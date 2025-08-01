import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import image1 from "/feedback/feedback1.png";
import image2 from "/feedback/feedback2.png";
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

const FEEDBACK_DATA = [
  {
    icon: image1,
    title: "Kristin Watson",
    description:
      "This courier company was extremely reliable and professional. My package arrived ahead of schedule and in perfect condition. I highly recommend their services!",
  },
  {
    icon: image2,
    title: "Alice Wilson",
    description:
      "Amazing service with friendly staff and quick delivery. Tracking was simple and updates were frequent. I will definitely choose them again for future shipments!",
  },
  {
    icon: "https://picsum.photos/id/1011/200/200",
    title: "Robert Johnson",
    description:
      "Outstanding delivery experience! The courier was punctual and handled my fragile items with great care. Their customer service team was also very responsive.",
  },
  {
    icon: "https://picsum.photos/id/1027/200/200",
    title: "Emily Chen",
    description:
      "Fast international shipping with no hidden fees. My package cleared customs faster than expected and arrived in pristine condition. Very impressed with their efficiency!",
  },
  {
    icon: "https://picsum.photos/id/1005/200/200",
    title: "Michael Brown",
    description:
      "Consistently excellent service. I've used them multiple times and they've never disappointed. Their real-time tracking system gives me peace of mind throughout process.",
  },
  {
    icon: "https://picsum.photos/id/1015/200/200",
    title: "Sarah Williams",
    description:
      "The courier went above and beyond to ensure my time-sensitive package arrived when needed. Their attention to commitment to customer satisfaction is remarkable!",
  },
  {
    icon: "https://picsum.photos/id/1016/200/200",
    title: "David Lee",
    description:
      "Competitive pricing with premium service. My bulky items were delivered with special care and the delivery personnel were courteous and professional throughout.",
  },
  {
    icon: "https://picsum.photos/id/1021/200/200",
    title: "Jennifer Martinez",
    description:
      "Perfect 5-star service! From pickup to delivery, everything was seamless. The mobile app notifications kept me informed at every stage of the shipping process.",
  },
  {
    icon: "https://picsum.photos/id/1025/200/200",
    title: "Thomas Anderson",
    description:
      "Reliable same-day delivery service that saved my business meeting. The courier arrived early and was very polite. Will be using them for all my urgent deliveries!",
  },
  {
    icon: "https://picsum.photos/id/1033/200/200",
    title: "Olivia Garcia",
    description:
      "Exceptional handling of temperature-sensitive medical supplies. The specialized packaging and prompt delivery ensured the integrity of my important shipment.",
  },
];

export default function Feedback() {
  const feedbacks = useMemo(() => FEEDBACK_DATA, []);
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
  const cardWidth = isMobile ? 300 : 400;
  const gap = 24;
  const totalWidth = feedbacks.length * (cardWidth + gap) - gap;

  // Auto-scroll functionality
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + (isMobile ? 1 : cardsPerSlide);
        if (
          nextIndex >=
          feedbacks.length - (isMobile ? 0 : cardsPerSlide - 1)
        ) {
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
  }, [isMobile, cardsPerSlide, feedbacks.length]);

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + (isMobile ? 1 : cardsPerSlide);
        if (
          nextIndex >=
          feedbacks.length - (isMobile ? 0 : cardsPerSlide - 1)
        ) {
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
          Math.min(feedbacks.length - cardsPerSlide, activeIndex + direction)
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
  }, [activeIndex, api, cardWidth, gap]);

  const goToIndex = (index) => {
    setActiveIndex(
      isMobile
        ? index
        : Math.min(index * cardsPerSlide, feedbacks.length - cardsPerSlide)
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
      ...(activeIndex + 1 < feedbacks.length ? [activeIndex + 1] : []),
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
    <section className="py-2 md:mt-52">
      <div className="container mx-auto px-6 md:px-15 lg:px-12 xl:px-12 2xl:px-12 py-2 items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center">
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
            className="text-xl md:text-3xl 2xl:text-6xl font-semibold text-center flex"
          >
            <AnimatedText text="What" delay={0.2} />
            <AnimatedText
              text="People & Businesses"
              delay={0.2}
              className="text-primary"
            />
          </motion.header>
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
            className="text-xl md:text-3xl 2xl:text-6xl font-semibold text-center flex"
          >
            <AnimatedText text="Say About Our" delay={0.2} />
            <AnimatedText
              text="Services"
              delay={0.2}
              className="text-primary"
            />
          </motion.header>
        </div>

        <div className="relative overflow-hidden">
          {/* Slider Container */}
          <div className="container mx-auto mt-6 gap-6 px-4 md:px-4 lg:px-12 xl:px-12 2xl:px-12 overflow-hidden">
            <animated.div
              className="flex gap-6 py-4 cursor-grab active:cursor-grabbing"
              style={{
                width: totalWidth,
                x: spring.x,
                touchAction: "none",
              }}
              {...bind()}
            >
              {feedbacks.map((feedback, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-shrink-0 ${isMobile ? "w-[300px]" : "w-[400px]"}`}
                >
                  <Card
                    className="!bg-white !p-6 !rounded-lg border !border-primary !flex !flex-row md:!flex-row !w-full !max-w-none"
                    hoverEffect={false}
                    containerProps={{
                      className:
                        "!w-full !h-auto !min-h-0 !p-0 !bg-transparent !shadow-none",
                    }}
                  >
                    <div className="flex flex-col items-center md:items-center md:w-1/4 md:pr-6 md:mb-0">
                      <motion.img
                        src={feedback.icon}
                        alt={`${feedback.title} profile`}
                        className="rounded-full w-[120px] h-[60px] object-cover mb-3"
                        whileHover={{ scale: 1.1 }}
                      />
                      <h3 className="font-bold text-xs md:text-md text-gray-800 text-center">
                        {feedback.title}
                      </h3>
                    </div>

                    <div className="md:w-3/4 pl-2 md:pl-6">
                      <motion.div
                        className="flex justify-center md:justify-end mb-3 text-yellow-400"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.span
                            key={`star-${i}`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </motion.div>

                      <blockquote className="text-xs md:text-sm font-normal text-right md:text-left">
                        "{feedback.description}"
                      </blockquote>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </animated.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  getVisibleCardIndices().includes(index)
                    ? "bg-primary w-6"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to feedback ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
