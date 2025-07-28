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

  // Animation variants
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
      <div className="container px-4 mx-auto w-full flex flex-col md:flex-row items-center  md:justify-between">
        <div className=" my-8 md:w-1/2 w-full text-center font-inter font-feature-default antialiased align-middle md:text-left mb-8 md:mb-0">
          <motion.div
            className="text-2xl sm:text-4xl md:text-4xl 2xl:text-6xl font-semibold leading-tight justify-center md:justify-start flex"
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
            className="text-2xl sm:text-4xl md:text-4xl 2xl:text-6xl font-semibold mb-4 leading-tightjustify-center md:justify-start flex"
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
            <p className="text-gray-600 mb-6  text-sm  2xl:text-[20px] md:text-[16px] leading-[100%] tracking-[-0.04em] align-middle">
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

        <div className="2xl:mr-18   md:w-1/2 w-full relative h-[320px] sm:h-[400px] md:h-[400px] mb-8 md:mb-0">
          <motion.img
            src={heroImg2}
            alt="Team handling packages professionally"
            className="absolute dark:filter dark:grayscale top-4 md:top-32 lg:top-12 xl:top-8  2xl:top-10 right-2 sm:right-8 md:right-42 2xl:right-54 w-[50%] 2xl:w-[45%] z-10 object-contain"
            width={499}
            height={330}
            loading="lazy"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />

          <motion.div
            className="absolute top-16 md:top-44 lg:top-32 xl:top-28  2xl:top-36 left-44 sm:left-46 md:left-36 lg:left-56 xl:left-72 2xl:left-96 z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-primary font-bold text-xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-4xl leading-tight">
              <AnimatedText text="ON TIME" delay={1.2} />
            </div>
            <div className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl xl:text-4xl  2xl:text-5xl leading-tight">
              <AnimatedText text="EVERY TIME" delay={1.4} />
            </div>
          </motion.div>

          <motion.img
            src={heroImg}
            alt="Modern delivery van in motion"
            className="absolute bottom-16 md:bottom-10 lg:bottom-10 xl:bottom-4 2xl:bottom-8  2xl:top-56 right-0 sm:right-4 w-full sm:w-[90%] md:w-[85%]  z-30 object-contain"
            width={800}
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
