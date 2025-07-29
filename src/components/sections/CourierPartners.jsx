import React, { useMemo } from "react";
import { motion } from "framer-motion";
import image1 from "/courierpartner/courierpartner1.png";
import image2 from "/courierpartner/courierpartner2.png";
import image3 from "/courierpartner/courierpartner3.png";
import font1 from "/courierpartner/font1.png";
import font2 from "/courierpartner/font2.png";
import font3 from "/courierpartner/font3.png";
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
    brand: font1,
  },
  {
    logo: image2,
    brand: font2,
  },
  {
    logo: image3,
    brand: font3,
  },
];

export default function CourierPartners() {
  const partners = useMemo(() => PARTNER_DATA, []);

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
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

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
            <AnimatedText text="Our Trusted Courier Partner" delay={0.2} />
          </h2>
          <p className="text-md 2xl:text-[20px] 2xl:mx-[6rem] md:[10rem] lg:mx-[12rem] text-gray-600">
            At Rapid Response Couriers, we are committed to delivering your
            parcels quickly, safely, and reliably. Whether you're sending
            documents across town or shipping goods nationwide, our
            comprehensive courier solutions are designed to meet your needs.
          </p>
        </motion.header>

        <motion.div
          className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={`partner-${index}`}
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
                className="!p-0 !bg-black !min-h-[200px] !max-w-none !w-full aspect-[4/3] relative overflow-hidden"
                hoverEffect={true}
              >
                <motion.img
                  src={partner.logo}
                  alt={`Partner company ${index + 1}`}
                  className="absolute dark:filter dark:grayscale inset-0 w-full h-full object-cover opacity-70"
                  loading="lazy"
                  width={600}
                  height={450}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <motion.img
                    src={partner.brand}
                    alt={`${partner.brand} brand name`}
                    className="max-w-[70%] max-h-[40%] object-contain z-10"
                    loading="lazy"
                    width={300}
                    height={100}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
