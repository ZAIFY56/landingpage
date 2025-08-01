import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroimg from "/formgetquote/getqoute1.jpg";
import backIcon from "/getquote/prevoius.png";
import { Input, Button } from "@/components/common";
import image1 from "/formgetquote/form1.jpg";
import image2 from "/formgetquote/form2.jpg";
import image3 from "/formgetquote/form3.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

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

const AddressSection = ({ title }) => {
  const sectionVariants = {
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
    <motion.div
      className="p-6 pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="text-xl 2xl:text-[32px] font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <AnimatedText text={title} delay={0.2} />
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div custom={0} variants={fieldVariants}>
          <Input
            type="text"
            placeholder="First Name *"
            className="w-full !bg-white !border !border-primary placeholder:font-medium"
            required
          />
        </motion.div>
        <motion.div custom={1} variants={fieldVariants}>
          <Input
            type="text"
            placeholder="Last Name *"
            className="w-full !bg-white !border !border-primary placeholder:font-medium"
            required
          />
        </motion.div>
        <motion.div
          className="md:col-span-2"
          custom={2}
          variants={fieldVariants}
        >
          <Input
            type="tel"
            placeholder="Telephone number *"
            className="w-full !bg-white !border !border-primary placeholder:font-medium"
            required
          />
        </motion.div>
        <motion.div
          className="md:col-span-2"
          custom={3}
          variants={fieldVariants}
        >
          <Input
            type="text"
            placeholder="Address Line *"
            className="w-full !bg-white !border !border-primary placeholder:font-medium"
            required
          />
        </motion.div>
        <motion.div custom={4} variants={fieldVariants}>
          <Input
            type="text"
            placeholder="City *"
            className="w-full !bg-white !border !border-primary placeholder:font-medium"
            required
          />
        </motion.div>
        <motion.div custom={5} variants={fieldVariants}>
          <Input
            type="text"
            placeholder="Postcode *"
            className="w-full !bg-white !border !border-primary placeholder:font-medium"
            required
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const BackButton = () => (
  <motion.div
    onClick={() => window.history.back()}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{
      scale: 1.05,
      x: -5,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    <Button className="flex items-center gap-2 !bg-white !text-primary">
      <motion.img
        src={backIcon}
        alt="Back"
        className="h-3 w-3 2xl:w-[12px]"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(48%) sepia(13%) saturate(1532%) hue-rotate(122deg) brightness(90%) contrast(87%)",
        }}
        whileHover={{
          x: -3,
          transition: { duration: 0.2 },
        }}
      />
      Back
    </Button>
  </motion.div>
);

export default function InstantQuoteFormPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedVanPrice = location.state?.totalPrice || 90.0;

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

  const sidebarVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white relative">
      <motion.div
        className="relative px-6 md:px-15 lg:px-12 xl:px-12 2xl:px-12"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.img
          src={heroimg}
          alt="Hero"
          className="w-full  h-[360px] object-cover"
          loading="lazy"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        />
        <motion.div
          className="absolute mx-[4rem] lg:mx-[16rem] 2xl:rounded-lg 2xl:top-68 top-80 left-0 right-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="bg-white text-primary p-6 text-xl md:text-4xl 2xl:text-6xl font-semibold text-center rounded-md">
            <AnimatedText text="Instant Quotes" delay={0.2} />
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:hidden text-end bg-white p-4 pt-20 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <BackButton className="flex ml-52 gap-2" />
      </motion.div>

      <div className="container mx-auto mt-4 md:mt-14 flex flex-col lg:flex-row gap-8 px-4">
        <motion.div
          className="lg:w-3/4 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={formVariants}
        >
          <motion.div
            className="p-6 pb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl 2xl:text-[32px] font-semibold mb-4">
              <AnimatedText text="Your details:" delay={0.2} />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Input
                  type="text"
                  placeholder="First Name *"
                  className="w-full !bg-white !border !border-primary placeholder:font-medium"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full !bg-white !border !border-primary placeholder:font-medium"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Input
                  type="email"
                  placeholder="Email *"
                  className="w-full !bg-white !border !border-primary placeholder:font-medium"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Input
                  type="tel"
                  placeholder="Telephone number *"
                  className="w-full !bg-white !border !border-primary placeholder:font-medium"
                  required
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:hidden p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={image1}
              alt="Courier service"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </motion.div>

          <AddressSection title="Collection Address" />
          <motion.div
            className="lg:hidden p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={image2}
              alt="Delivery van"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </motion.div>

          <AddressSection title="Delivery Address" />
          <motion.div
            className="lg:hidden p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={image3}
              alt="Shipping package"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="p-6 pb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl 2xl:text-[32px] font-semibold mb-2">
              <AnimatedText text="NOTES" delay={0.2} />
            </h2>
            <p className="text-sm mb-4 2xl:text-[20px]">
              Please provide details such as dimensions, weight, loading notes
              etc.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Input
                type="text"
                placeholder="Any additional details to help your delivery..."
                className="w-full 2xl:text-[16px] !2xl:w-[464px] !bg-white !border !border-primary placeholder:font-medium h-12 pt-2"
                required
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="p-6 space-y-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-4 w-4 appearance-none border border-primary rounded checked:bg-primary checked:border-transparent focus:ring-0 focus:ring-offset-0"
                required
              />
              <span className="text-sm 2xl:text-[20px]">
                I have read and accepted the T&Cs{" "}
                <span className="text-red-500">*</span>
              </span>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <input
                type="checkbox"
                id="loading"
                className="mr-2 h-4 w-4 appearance-none border border-primary rounded checked:bg-primary checked:border-transparent focus:ring-0 focus:ring-offset-0"
                required
              />
              <span className="text-sm 2xl:text-[20px]">
                I have read and agree to the loading notice below{" "}
                <span className="text-red-500">*</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="p-6 flex flex-col items-start pt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-2xl font-bold text-primary">
                £{selectedVanPrice.toFixed(2)}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="primary"
                className="mt-4 px-8 py-3 bg-primary text-white rounded font-medium flex items-center transition"
                onClick={() => navigate("/thank-you")}
              >
                Book Now <FaArrowRight className="md:ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:flex lg:w-1/4 flex-col gap-6 h-fit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sidebarVariants}
        >
          <motion.div
            className="bg-white p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BackButton className="2xl:text-xl" />
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded-lg space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={image1}
              alt="Courier service"
              className="w-full h-auto rounded-md"
              loading="lazy"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src={image2}
              alt="Delivery van"
              className="md:pt-20 2xl:pt-0 w-full h-auto rounded-md"
              loading="lazy"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src={image3}
              alt="Shipping package"
              className="md:pt-44 2xl:pt-0 w-full h-auto rounded-md"
              loading="lazy"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
