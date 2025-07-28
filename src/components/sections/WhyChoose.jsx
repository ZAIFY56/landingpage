import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ProfessionalIcon from "/whychoose/professionalicon.png";
import ReliabilityIcon from "/whychoose/Reliabilityicon.png";
import ResponsiveIcon from "/whychoose/responsiveicon.png";
import SustainabilityIcon from "/whychoose/sustainabilityicon.png";
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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-8">
      <div className="container px-4 mx-auto w-full flex flex-col md:flex-row items-center  md:justify-between">
        <div className="flex flex-col mt-10 md:flex-row gap-16">
          <motion.div
            className="md:w-1/3 justify-center md:justify-start md:my-2 md:text-start text-3xl md:text-4xl 2xl:text-6xl font-bold flex"
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
              className="text-primary"
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
            <p className="text-xs 2xl:text-[18px] 2xl:ml-[12rem] 2xl:text-right text-center">
              At Rapid Response Couriers, we understand that in business, time
              isn't just money — it's everything. That's why when it's urgent,
              we're unstoppable. We specialize in fast, secure deliveries with
              zero excuses. From pickup to drop-off, we operate with precision
              timing, ensuring every parcel is delivered with care and delivered
              on time. Because in our world, delays aren't an option
            </p>
            <p className="text-xs md-text: ml-[7rem] 2xl:text-[20px] 2xl:text-end md:ml-[22rem]">
              — your emergency is our express route."
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 mt-20 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={`feature-${index}`}
            custom={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
