import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import ProfessionalIcon from "/whychoose/professionalicon.png";
import ReliabilityIcon from "/whychoose/Reliabilityicon.png";
import ResponsiveIcon from "/whychoose/responsiveicon.png";
import SustainabilityIcon from "/whychoose/sustainabilityicon.png";
import { Card } from "@/components/common";

const DropLetter = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: -50, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.span>
  );
};

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((letter, letterIndex) => (
            <DropLetter
              key={letterIndex}
              delay={delay + wordIndex * 0.1 + letterIndex * 0.05}
            >
              {letter}
            </DropLetter>
          ))}
        </span>
      ))}
    </div>
  );
};

const FEATURES = [
  {
    title: "Professional Service",
    icon: ProfessionalIcon,
    description:
      "Our experienced couriers ensure your goods are handled with care and delivered on time, every time.",
  },
  {
    title: "Reliability",
    icon: ReliabilityIcon,
    description:
      "With a network spanning the UK, we guarantee prompt collection and delivery, meeting your business deadlines consistently.",
  },
  {
    title: "Responsiveness",
    icon: ResponsiveIcon,
    description:
      "Our dedicated customer support team is available to address your needs and adapt to your requirements swiftly.",
  },
  {
    title: "Sustainability",
    icon: SustainabilityIcon,
    description:
      "Committed to ethical practices, we offer eco-friendly delivery options to help your business reduce its carbon footprint.",
  },
];

export default function WhyChoose() {
  const features = useMemo(() => FEATURES, []);
  const [isMobile, setIsMobile] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCardsPerSlide(mobile ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // React Spring animation
  const [spring, api] = useSpring(() => ({
    x: 0,
    config: config.gentle,
  }));

  // Calculate dimensions
  const cardWidth = isMobile ? 300 : 350;
  const gap = 24; // gap-6 = 24px
  const totalWidth = features.length * (cardWidth + gap) - gap;

  // Drag gestures
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], cancel }) => {
      if (down && Math.abs(mx) > cardWidth / 3) {
        const direction = xDir > 0 ? -1 : 1;
        const newIndex = Math.max(
          0,
          Math.min(features.length - cardsPerSlide, activeIndex + direction)
        );
        setActiveIndex(newIndex);
        cancel();
      }
    }
  );

  // Auto-scroll functionality
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + (isMobile ? 1 : cardsPerSlide);
        if (nextIndex >= features.length - (isMobile ? 0 : cardsPerSlide - 1)) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isMobile, cardsPerSlide, features.length]);

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + (isMobile ? 1 : cardsPerSlide);
        if (nextIndex >= features.length - (isMobile ? 0 : cardsPerSlide - 1)) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000);
  };

  // Update spring on index change
  useEffect(() => {
    const offset = -activeIndex * (cardWidth + gap);
    api.start({ x: offset });
    resetAutoScroll();
  }, [activeIndex, api, cardWidth, gap]);

  const goToIndex = (index) => {
    setActiveIndex(
      isMobile
        ? index
        : Math.min(index * cardsPerSlide, features.length - cardsPerSlide)
    );
    resetAutoScroll();
  };

  // Calculate visible card indices for dot indicators
  const getVisibleCardIndices = () => {
    if (isMobile) {
      return [activeIndex];
    }
    return [
      activeIndex,
      ...(activeIndex + 1 < features.length ? [activeIndex + 1] : []),
    ];
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-8" id="about">
      <div className="container mx-auto px-6 md:px-15 lg:px-12 xl:px-12 2xl:px-12 py-2 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex flex-col mt-10 md:flex-row gap-16">
          <motion.div
            className="md:w-1/3 justify-center md:justify-start md:my-2 md:text-start text-3xl md:text-4xl 2xl:text-6xl font-semibold flex"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <AnimatedText text="Why" delay={0.2} />
            <AnimatedText
              text="Choose Us"
              delay={0.2}
              className="text-primary ml-2"
            />
          </motion.div>
          <motion.div
            className="md:w-2/3"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <p className="text-xs 2xl:text-[18px] 2xl:ml-[12rem] 2xl:text-right lg:text-right text-center">
              At Rapid Response Couriers, we understand that in business, time
              isn't just money — it's everything. That's why when it's urgent,
              we're unstoppable. We specialize in fast, secure deliveries with
              zero excuses. From pickup to drop-off, we operate with precision
              timing, ensuring every parcel is delivered with care and delivered
              on time. Because in our world, delays aren't an option
            </p>
            <p className="text-xs 2xl:text-[20px] 2xl:text-end lg:text-end ml-[4rem] md:ml-[13rem]">
              — your emergency is our express route."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Slider */}
      <div className="lg:hidden relative w-full mt-10 px-4 md:px-4 lg:px-12 xl:px-12 2xl:px-12 container mx-auto">
        {/* Slider Container */}
        <div className="container mx-auto mt-6 gap-6 px-4 md:px-4 lg:px-12 xl:px-12 2xl:px-12 overflow-hidden">
          <animated.div
            className="flex gap-1 py-4 cursor-grab active:cursor-grabbing"
            style={{
              width: totalWidth,
              x: spring.x,
              touchAction: "none",
            }}
            {...bind()}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 ${isMobile ? "w-[300px]" : "w-[300px]"}`}
              >
                <Card
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="!w-full !h-full !items-center !justify-center"
                  containerProps={{
                    className:
                      "!h-full !flex !flex-col !items-center !text-center",
                  }}
                  iconContainerProps={{
                    className: "!mb-4",
                  }}
                  titleProps={{
                    className: "!text-lg !font-bold !mb-2",
                  }}
                  descriptionProps={{
                    className: "!text-sm",
                  }}
                />
              </motion.div>
            ))}
          </animated.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                getVisibleCardIndices().includes(index)
                  ? "bg-primary w-6"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <motion.div
        className="hidden lg:grid container mx-auto grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 mt-20 gap-6 px-4 md:px-4 lg:px-12 xl:px-12 2xl:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={`feature-${index}`}
            custom={index}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[320px]"
          >
            <Card
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="!w-full !h-full md:!w-full !max-w-md md:!max-w-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
