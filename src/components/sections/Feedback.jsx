import React, { useMemo } from "react";
import { motion } from "framer-motion";
import image1 from "/feedback/feedback1.png";
import image2 from "/feedback/feedback2.png";
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

const FEEDBACK_DATA = [
  {
    icon: image1,
    title: "Kristin Watson",
    description:
      "This courier company was extremely reliable and professional. My package arrived ahead of schedule and in perfect condition. I highly recommend their services for timely deliveries!",
  },
  {
    icon: image2,
    title: "Alice Wilson",
    description:
      "Amazing service with friendly staff and quick delivery. Tracking was simple and updates were frequent. I will definitely choose them again for future shipments!",
  },
];

export default function Feedback() {
  const feedbacks = useMemo(() => FEEDBACK_DATA, []);

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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-2 md:mt-52">
      <div className="container mx-auto px-2 py-2 items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center">
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
            className="text-xl md:text-3xl 2xl:text-6xl font-bold text-center flex"
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
            className="text-xl md:text-3xl 2xl:text-6xl font-bold text-center flex"
          >
            <AnimatedText text="Say About Our" delay={0.2} />
            <AnimatedText
              text="Services"
              delay={0.2}
              className="text-primary"
            />
          </motion.header>
        </div>
        <motion.div
          className="2xl:mt-16 container mx-auto flex flex-col mt-6 md:flex-row gap-8 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={`feedback-${index}`}
              custom={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px]" // Added responsive width classes
            >
              <Card
                className="!bg-white !p-6 !rounded-lg border !border-primary !flex !flex-col md:!flex-row !w-full !max-w-none"
                hoverEffect={false}
                containerProps={{
                  className:
                    "!w-full !h-auto !min-h-0 !p-0 !bg-transparent !shadow-none",
                }}
                iconContainerProps={{
                  className: "!hidden",
                }}
                titleProps={{
                  className: "!hidden",
                }}
                descriptionProps={{
                  className: "!hidden",
                }}
              >
                <div className="flex flex-col items-center md:items-center md:w-1/4 md:pr-6 md:mb-0">
                  <motion.img
                    src={feedback.icon}
                    alt={`${feedback.title} profile`}
                    className="2xl:w-[140px] 2xl:h-[140px] lg:w-28 h-28 rounded-full object-cover mb-3"
                    width={140}
                    height={140}
                    loading="lazy"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  />
                  <h3 className="font-bold 2xl:text-[20px] text-md text-gray-800 text-center lg:text-left">
                    {feedback.title}
                  </h3>
                </div>

                <div className="md:w-3/4 md:pl-6">
                  <motion.div
                    className="flex justify-center md:justify-end mb-3 text-yellow-400"
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={`star-${i}`}
                        className="2xl:text-[32px]"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </motion.div>

                  <blockquote className="text-sm text-bold 2xl:text-[20px] text-center lg:text-left">
                    "{feedback.description}"
                  </blockquote>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
