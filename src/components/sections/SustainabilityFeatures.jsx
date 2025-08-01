import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import image1 from "/sustainabilityfeatures/feature1.png";
import image2 from "/sustainabilityfeatures/feature2.png";
import image3 from "/sustainabilityfeatures/feature3.png";
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

const SUSTAINABILITY_SERVICES = [
  {
    title: "100% carbon neutral",
    icon: image1,
    description:
      "Our courier service is 100% carbon neutral, delivering swiftly while actively reducing environmental impact.",
  },
  {
    title: "Less waste",
    icon: image2,
    description:
      "Our courier service is committed to reducing waste to ensure a more sustainable and eco-friendly delivery process.",
  },
  {
    title: "Zero emission options",
    icon: image3,
    description:
      "Our courier service offers zero emission options to promote environmentally friendly deliveries.",
  },
];

export default function SustainabilityFeatures() {
  const services = useMemo(() => SUSTAINABILITY_SERVICES, []);
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
  const totalWidth = services.length * (cardWidth + gap) - gap;

  // Auto-scroll functionality
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + (isMobile ? 1 : cardsPerSlide);
        if (nextIndex >= services.length - (isMobile ? 0 : cardsPerSlide - 1)) {
          return 0;
        }
        return nextIndex;
      });
    }, 2000); // Change slide every 2 seconds

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isMobile, cardsPerSlide, services.length]);

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + (isMobile ? 1 : cardsPerSlide);
        if (nextIndex >= services.length - (isMobile ? 0 : cardsPerSlide - 1)) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000);
  };

  // Drag gestures
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], cancel }) => {
      if (down && Math.abs(mx) > cardWidth / 3) {
        const direction = xDir > 0 ? -1 : 1;
        const newIndex = Math.max(
          0,
          Math.min(services.length - cardsPerSlide, activeIndex + direction)
        );
        setActiveIndex(newIndex);
        cancel();
        resetAutoScroll();
      }
    }
  );

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
        : Math.min(index * cardsPerSlide, services.length - cardsPerSlide)
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
      ...(activeIndex + 1 < services.length ? [activeIndex + 1] : []),
    ];
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
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
    <section className="py-12 2xl:pt-32">
      <div className="container px-6 md:px-2 lg:px-12 xl:px-12 2xl:px-12 mx-auto items-center justify-between w-full">
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-3xl 2xl:text-6xl font-semibold text-center text-primary mb-3">
            <AnimatedText text="Delivering, not polluting" delay={0.2} />
          </h2>
          <p className="text-md 2xl:text-[20px] 2xl:mx-[26rem] text-center md:mx-[10rem] lg:mx-[14rem] mb-6">
            Delivering products efficiently while prioritizing eco-friendly
            practices to minimize environmental impact. Committed to sustainable
            logistics that protect our planet.
          </p>
        </motion.header>

        {/* Mobile & Tablet Slider */}
        <div className="lg:hidden relative mt-10 px-4">
          {/* Slider Container */}
          <div className="w-full overflow-hidden">
            <animated.div
              className="flex gap-6 py-4 cursor-grab active:cursor-grabbing"
              style={{
                width: totalWidth,
                x: spring.x,
                touchAction: "none",
              }}
              {...bind()}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 ${isMobile ? "w-[300px]" : "w-[350px]"}`}
                >
                  <Card
                    className="!w-full h-full"
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    iconProps={{
                      width: 64,
                      height: 64,
                      loading: "lazy",
                    }}
                  />
                </motion.div>
              ))}
            </animated.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {services.map((_, index) => (
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
          className="hidden lg:grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-3 2xl:mt-20 mt-10 gap-4 lg:mx-[8rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={`sustainability-${index}`}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="!w-full h-full"
                icon={service.icon}
                title={service.title}
                description={service.description}
                iconProps={{
                  width: 64,
                  height: 64,
                  loading: "lazy",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
