import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "/hero/hero.png";
import heroImg2 from "/hero/hero2.png";
import logoImg from "/Vector.png";
import { Button } from "@/components/common";
import { useNavigate } from "react-router-dom";

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

export default function Hero() {
  const navigate = useNavigate();

  // Scroll-based animation for van
  const { scrollY } = useScroll();
  const vanX = useTransform(scrollY, [0, 500], [0, -400]); // Move van from right to left edge
  const vanOpacity = useTransform(scrollY, [0, 300], [1, 0.8]); // Slight opacity change

  // Animation Variants
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-2 lg:px-12 xl:px-12 2xl:px-12 lg:py-10 xl:py-12 2xl:py-12 2xl:mb-20 sm:py-8 md:py-0 flex flex-col md:flex-row items-center justify-between">
        <div className="mt-6 md:w-1/2 w-full text-center md:text-left mb-8 md:mb-40">
          <motion.div
            className="text-2xl md:mb-2 justify-center md:justify-normal md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight flex"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <AnimatedText text="Speed Is" delay={0.2} />
            <AnimatedText
              text="Our Priority"
              delay={0.2}
              className="text-primary"
            />
          </motion.div>
          <motion.div
            className="text-2xl justify-center md:justify-normal  md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-4 leading-tight flex"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <AnimatedText
              text="We're Already"
              delay={0.8}
              className="text-primary"
            />
            <AnimatedText text="Rolling Out!" delay={0.8} />
          </motion.div>
          <motion.div
            className="2xl:my-8 2xl:mr-44"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p className="font-normal mb-6 xl:text-[20px] 2xl:text-[20px] md:text-[14px] leading-[100%] tracking-normal align-middle">
              Our team specializes in fast, reliable deliveries for urgent
              needs. No matter the deadline, we're already on the move to ensure
              your order arrives on time. Trust us to handle your last-minute
              requests with speed and precision.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Button
              variant="primary"
              onClick={() => navigate("/instant-quote/form")}
              className="w-[191px] h-[48px] sm:w-auto"
            >
              Book a Delivery
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/instant-quote")}
              className="w-[175px] h-[48px] sm:w-auto"
            >
              Instant Quote
            </Button>
          </motion.div>
        </div>

        <div className="2xl:ml-18 md:w-1/2 w-full relative h-[320px] md:h-[400px] lg:h-[500px] 2xl:h-[600px] mb-8 md:mb-0">
          <motion.img
            src={heroImg2}
            alt="Team handling packages professionally"
            className="absolute dark:filter dark:grayscale hover:filter-none hover:grayscale-0 top-10 md:top-16 lg:top-20 xl:top-16 2xl:top-10 left-32  md:left-44 lg:left-56 xl:left-72 2xl:left-92 w-[55%] 2xl:w-[60%] z-10 object-contain"
            width={499}
            height={330}
            loading="lazy"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />

          <motion.div
            className="absolute font-inter top-24 md:top-32 lg:top-44 xl:top-44 2xl:top-48 right-10 md:right-6 lg:right-6 xl:right-18 2xl:right-16 z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-primary font-bold text-xl sm:text-2xl md:text-2xl  xl:text-4xl 2xl:text-5xl leading-tight">
              <AnimatedText text="ON TIME" delay={1.2} />
            </div>
            <div className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
              <AnimatedText text="EVERY TIME" delay={1.4} />
            </div>
          </motion.div>

          <motion.img
            src={heroImg}
            alt="Modern delivery van in motion"
            className="absolute bottom-11 md:bottom-14 lg:bottom-20 xl:bottom-2 2xl:bottom-6 2xl:top-70  2xl:left-2 sm:left-4 w-full sm:w-[90%] md:w-[932px] z-30 object-contain"
            width={900}
            height={600}
            loading="lazy"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            style={{
              x: vanX,
              opacity: vanOpacity,
            }}
          />
        </div>
      </div>
    </section>
  );
}
