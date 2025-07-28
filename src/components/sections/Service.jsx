import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Samedayicon from "/service/samedeliveryicon.png";
import Nextdayicon from "/service/nextdayicon.png";
import Economicalicon from "/service/ecnomicserviceicon.png";
import Outofhoursicon from "/service/outofhoursService.png";
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

const SERVICE_DATA = [
  {
    title: "Same Day Delivery",
    icon: Samedayicon,
    description: "Direct, dedicated same-day collection and delivery.",
  },
  {
    title: "Next Day Delivery",
    icon: Nextdayicon,
    description: "Reliable next-day delivery with overnight service.",
  },
  {
    title: "Economical Service",
    icon: Economicalicon,
    description: "Affordable option for non-urgent deliveries.",
  },
  {
    title: "Out of Hours Services",
    icon: Outofhoursicon,
    description:
      "Timely deliveries with strict deadlines for pick-up/drop-off.",
  },
];

export default function Service() {
  const services = useMemo(() => SERVICE_DATA, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section className="py-2 2xl:mt-12">
      <div className="container px-4 mx-auto w-full">
        <motion.header
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-semibold text-center text-primary mb-3">
            <AnimatedText text="Services You Can Trust" delay={0.2} />
          </h2>
          <p className="2xl:text-[20px] text-sm text-center md:mx-[10rem] lg:mx-[15rem] 2xl:mx-[24rem] mb-6">
            Trust Rapid Response Couriers for fast, secure, and reliable courier
            services that ensure your parcels arrive safely and on time. Count
            on us for dependable logistics you can rely on every step of the
            way.
          </p>
        </motion.header>

        <motion.div
          className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="!w-full md:!w-full !max-w-md md:!max-w-none"
                icon={service.icon}
                title={service.title}
                description={service.description}
                hoverEffect={true}
                containerProps={{
                  className:
                    "!h-full !flex !flex-col !items-center !text-center",
                }}
                iconContainerProps={{
                  className: "!mb-4",
                }}
                titleProps={{
                  className: "!text-lg md:!text-xl !font-bold !mb-2",
                }}
                descriptionProps={{
                  className: "!text-sm md:!text-base",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
