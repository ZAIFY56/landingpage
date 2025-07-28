import { motion } from "framer-motion";
import image1 from "/thankyou/thank.jpg";
import icon from "/thankyou/Vector.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/common";

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

export default function ThankYouPage() {
  const navigate = useNavigate();

  const heroVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white">
      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.img
          src={image1}
          alt="Thank you background"
          className="w-full h-[360px] object-cover"
          loading="lazy"
          decoding="async"
          width={1920}
          height={360}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        />

        <motion.div
          className="absolute top-72 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="flex justify-center mb-6"
              variants={iconVariants}
            >
              <motion.img
                src={icon}
                alt="Checkmark icon indicating success"
                className="h-16 w-16"
                width={64}
                height={64}
                decoding="async"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <AnimatedText text="Thank You!" delay={0.4} />
            </motion.h1>

            <motion.p
              className="text-md text-gray-600 mb-8"
              aria-live="polite"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Your order has been received. We will contact you shortly.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-64 mb-8 w-full max-w-2xl container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex justify-between items-center mb-4"
          variants={stepVariants}
          custom={0}
        >
          <motion.div
            className="flex flex-col items-center"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-2"
              aria-label="Step 1: Order received"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <span className="font-bold">1</span>
            </motion.div>
            <motion.span
              className="text-sm md:text-base font-medium text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Order received
            </motion.span>
          </motion.div>

          <motion.div
            className="flex-1 h-1 bg-primary mx-2"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            variants={progressVariants}
          ></motion.div>

          <motion.div
            className="flex flex-col items-center"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mb-2"
              aria-label="Step 2: Confirmation"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <span className="font-bold">2</span>
            </motion.div>
            <motion.span
              className="text-sm md:text-base font-medium text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              Confirmation
            </motion.span>
          </motion.div>

          <motion.div
            className="flex-1 h-1 bg-gray-300 mx-2"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            variants={progressVariants}
          ></motion.div>

          <motion.div
            className="flex flex-col items-center"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mb-2"
              aria-label="Step 3: Parcel delivered"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <span className="font-bold">3</span>
            </motion.div>
            <motion.span
              className="text-sm md:text-base font-medium text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              Parcel Delivered
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
