import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/common";
import { Input } from "@/components/common";

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

const ContactUs = () => {
  const titleVariants = {
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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white overflow-hidden">
          <motion.h2
            className="text-3xl text-primary 2xl:text-6xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <AnimatedText text="Contact Us" delay={0.2} />
          </motion.h2>
          <div className="p-6 md:p-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="py-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={formVariants}
            >
              <h2 className="text-xl 2xl:text-[44px] font-semibold mt-2">
                Submit your Details
              </h2>
              <form className="space-y-4 py-4 " noValidate>
                <motion.div custom={0} variants={fieldVariants}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-5/6 !border-none"
                    aria-label="Your name"
                  />
                </motion.div>
                <motion.div custom={1} variants={fieldVariants}>
                  <Input
                    type="tel"
                    id="number"
                    name="phone"
                    placeholder="Number"
                    className="w-5/6 !border-none"
                    aria-label="Phone number"
                  />
                </motion.div>
                <motion.div custom={2} variants={fieldVariants}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-5/6 !border-none"
                    aria-label="Email address"
                  />
                </motion.div>
                <motion.div
                  className="w-5/6 !border-none"
                  custom={3}
                  variants={fieldVariants}
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="w-full !border-none px-4 py-2 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] align-top pt-3 resize-none"
                    aria-label="Your message"
                  />
                </motion.div>
                <motion.div
                  custom={4}
                  variants={fieldVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="primary"
                    type="submit"
                    className="!w-5/6"
                    aria-label="Submit form"
                  >
                    Submit
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              className="space-y-2 mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={contactVariants}
            >
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl 2xl:text-[32px] font-semibold mt-2 mb-2">
                  Address
                </h3>
                <address className="text-gray-600 2xl:text-[20px] text-md not-italic">
                  99 Roving St., Big City, PKU Ln. Mesa, New Jersey 45463
                </address>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-xl 2xl:text-[32px] font-semibold mt-2 mb-2">
                  Contact Info
                </h3>
                <p className="text-gray-600 2xl:text-[20px] text-md">
                  <a
                    href="mailto:helloworld@rapidresponsecourier.com"
                    className="hover:text-primary transition-colors"
                  >
                    helloworld@rapidresponsecourier.com
                  </a>
                </p>
                <p className="text-gray-600 2xl:text-[20px] text-md mt-2">
                  <a
                    href="tel:+9710000000000"
                    className="hover:text-primary transition-colors"
                  >
                    +971 000 0000 0000
                  </a>
                </p>
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="text-xl 2xl:text-[32px] font-semibold mt-2 mb-2">
                  Opening hours
                </h3>
                <ul className="space-y-2 text-gray-600 mt-6">
                  <li className="2xl:text-[20px] text-md">Monday-Friday</li>
                  <li className="2xl:text-[20px] text-md">9am - 5pm</li>
                  <li className="2xl:text-[20px] text-md">
                    We are closed on weekends and national holidays
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactUs);
