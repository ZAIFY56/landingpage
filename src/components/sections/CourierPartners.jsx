import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import image1 from "/courierpartner/courierpartner1 (2).png";
import image2 from "/courierpartner/courierpartner2.png";
import image3 from "/courierpartner/courierpartner3 (2).png";
import image4 from "/courierpartner/courierpartner4.png";
import image5 from "/courierpartner/courierpartner5 (2).png";
import image6 from "/courierpartner/courierpartner6 (2).png";
import image7 from "/courierpartner/courierpartner7.png";
import image8 from "/courierpartner/courierpartner8.png";
import image9 from "/courierpartner/courierpartner9.png";
import image10 from "/courierpartner/courierpartner10.png";
import image11 from "/courierpartner/courierpartner11.png";

import { Card } from "@/components/common";

// Drop letter animation component
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

// Animated text component that splits text and applies drop animation
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

const PARTNER_DATA = [
  {
    logo: image1,
  },
  {
    logo: image2,
  },
  {
    logo: image3,
  },
  {
    logo: image4,
  },
  {
    logo: image5,
  },
  {
    logo: image6,
  },
  {
    logo: image7,
  },
  {
    logo: image8,
  },
  {
    logo: image9,
  },
  {
    logo: image10,
  },
  {
    logo: image11,
  },
];

export default function CourierPartners() {
  const partners = useMemo(() => PARTNER_DATA, []);
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
  const cardWidth = isMobile ? 250 : 280;
  const gap = 24; // gap-6 = 24px
  const totalWidth = partners.length * (cardWidth + gap) - gap;

  // Drag gestures
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], cancel }) => {
      if (down && Math.abs(mx) > cardWidth / 3) {
        const direction = xDir > 0 ? -1 : 1;
        const newIndex = Math.max(
          0,
          Math.min(partners.length - cardsPerSlide, activeIndex + direction)
        );
        setActiveIndex(newIndex);
        cancel();
      }
    }
  );

  // Update spring on index change
  useEffect(() => {
    const offset = -activeIndex * (cardWidth + gap);
    api.start({ x: offset });

    // Reset auto-scroll timer when user interacts
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      startAutoScroll();
    }
  }, [activeIndex, api, cardWidth, gap]);

  // Auto-scroll functionality
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + cardsPerSlide;
        if (nextIndex >= partners.length - cardsPerSlide + 1) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [cardsPerSlide]);

  const goToIndex = (index) => {
    // For mobile, each dot represents one card
    // For desktop, each dot represents a pair of cards
    const targetIndex = isMobile ? index : index * cardsPerSlide;
    setActiveIndex(targetIndex);
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

  // Calculate which dot should be active
  const getActiveDotIndex = () => {
    if (isMobile) {
      return activeIndex;
    }
    return Math.floor(activeIndex / cardsPerSlide);
  };

  // Calculate total number of dots needed
  const totalDots = isMobile
    ? partners.length
    : Math.ceil(partners.length / cardsPerSlide);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-15 lg:px-12 xl:px-12 2xl:px-12">
        <motion.header
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-semibold text-primary mb-4">
            <AnimatedText text="Our Happy Customers" delay={0.2} />
          </h2>
          <p className="text-md 2xl:text-[20px] 2xl:mx-[6rem] md:[10rem] lg:mx-[12rem] text-gray-600">
            We collaborate with industry leaders to deliver exceptional service.
            These partnerships enable us to provide comprehensive logistics
            solutions tailored to your business needs.
          </p>
        </motion.header>

        <div className="relative">
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
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 ${isMobile ? "w-[250px]" : "w-[280px]"}`}
                >
                  <Card
                    className="!p-0 !min-h-[200px] !max-w-none !w-full aspect-[4/3] relative overflow-hidden group"
                    hoverEffect={true}
                  >
                    <motion.img
                      src={partner.logo}
                      alt={`Partner company ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width={600}
                      height={450}
                    />
                  </Card>
                </motion.div>
              ))}
            </animated.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  getActiveDotIndex() === index ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
