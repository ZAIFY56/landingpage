import { motion } from "framer-motion";
import heroimg from "/getquote/getqoute1.jpg";
import svan from "/getquote/van.jpg";
import tvan from "/getquote/tvan.png";
import mvan from "/getquote/mvan.jpg";
import xvan from "/getquote/xvan.png";
import lvan from "/getquote/lvan.jpg";
import vectoricon from "/getquote/Vector.png";
import vanIcon from "/getquote/vanicon.png";
import backIcon from "/getquote/prevoius.png";
import personimg from "/getquote/person.jpg";

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

const vanOptions = [
  {
    title: "Small Van",
    image: svan,
    specs: { length: "1.3m", width: "1.2m", height: "1.2m", weight: "400kg" },
    price: 75,
    vat: 15,
  },
  {
    title: "Transit Van",
    image: tvan,
    specs: { length: "1.8m", width: "1.4m", height: "1.4m", weight: "900kg" },
    price: 83,
    vat: 17,
  },
  {
    title: "Medium Van",
    image: mvan,
    specs: { length: "2.0m", width: "1.5m", height: "1.4m", weight: "950kg" },
    price: 90,
    vat: 18,
  },
  {
    title: "Xlwb Van",
    image: xvan,
    specs: { length: "3.4m", width: "1.7m", height: "1.7m", weight: "1250kg" },
    price: 175,
    vat: 35,
  },
  {
    title: "Luton Van",
    image: lvan,
    specs: { length: "4.0m", width: "2.0m", height: "2.2m", weight: "1000kg" },
    price: 170,
    vat: 34,
  },
];

function GetQuotesPage() {
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

  const infoBarVariants = {
    hidden: { opacity: 0, y: 50 },
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
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="bg-white relative">
      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.img
          src={heroimg}
          alt="Hero"
          className="w-full h-[360px] object-cover"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        />

        <motion.div
          className="absolute mx-[4rem] lg:mx-[16rem]  2xl:rounded-lg 2xl:top-68 top-80 left-0 right-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="bg-white text-black p-6 text-xl md:text-4xl font-bold text-center rounded-md">
            <AnimatedText text="Instant Quotes" delay={0.2} />
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-14 flex flex-wrap justify-between items-center bg-primary text-white p-4 rounded-md max-w-5xl mx-auto mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={infoBarVariants}
      >
        <InfoItem icon={vectoricon} label="Pickup from:" value="EC1A 1NT" />
        <InfoItem icon={vectoricon} label="Destination:" value="E17JF" />
        <InfoItem
          icon={vanIcon}
          label="Earliest Delivery:"
          value="14:21 if Booked Now"
        />
        <BackButton icon={backIcon} />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {vanOptions.map((van, index) => (
          <VanCard
            key={index}
            van={van}
            index={index}
            variants={cardVariants}
          />
        ))}
        <motion.div
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
            src={personimg}
            alt="Person"
            className="2xl:w-[366px] rounded-md mt-20"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <motion.img
        src={icon}
        alt={label}
        className="2xl:w-[32px] 2xl:h-[32px]"
        whileHover={{
          rotate: 360,
          transition: { duration: 0.5 },
        }}
      />
      <div>
        <p className="2xl:text-[18px] md:text-sm">{label}</p>
        <h3 className="2xl:text-[18px] font-semibold md:text-lg">{value}</h3>
      </div>
    </motion.div>
  );
}

function BackButton({ icon }) {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer hover:underline"
      initial={{ opacity: 0, x: 20 }}
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
      <motion.img
        src={icon}
        alt="Back"
        className="2xl:w-[32px] 2xl:h-[32px]"
        whileHover={{
          x: -3,
          transition: { duration: 0.2 },
        }}
      />
      <h3 className="2xl:text-[18px] font-semibold text-md md:text-lg">Back</h3>
    </motion.div>
  );
}

function VanCard({ van, index, variants }) {
  const total = van.price + van.vat;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="border border-primary rounded-md p-4 shadow-sm"
      custom={index}
      variants={variants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.h4
        className="font-semibold bg-primary p-2 text-center rounded-se-md text-white 2xl:text-lg w-[140px] 2xl:w-[156px] mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {van.title}
      </motion.h4>
      <motion.img
        src={van.image}
        alt={van.title}
        className="w-full h-32 object-contain mb-4"
        variants={imageVariants}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      />
      <SpecsList specs={van.specs} />
      <PriceInfo price={van.price} vat={van.vat} total={total} />
      <motion.button
        className="w-full bg-primary text-white py-2 rounded hover:bg-[#3c7e7c] transition"
        whileHover={{
          scale: 1.02,
          backgroundColor: "#3c7e7c",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        Choose this Option
      </motion.button>
    </motion.div>
  );
}

function SpecsList({ specs }) {
  const specVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.ul
      className="text-sm space-y-1 mb-4"
      variants={specVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {Object.entries(specs).map(([key, value]) => (
        <motion.li
          key={key}
          className="flex justify-between"
          variants={itemVariants}
        >
          <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
          <span>{value}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function PriceInfo({ price, vat, total }) {
  const priceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="text-sm mb-2 space-y-1"
      variants={priceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <PriceLine label="Price:" value={price} variants={itemVariants} />
      <PriceLine label="VAT:" value={vat} variants={itemVariants} />
      <PriceLine label="TOTAL:" value={total} isBold variants={itemVariants} />
    </motion.div>
  );
}

function PriceLine({ label, value, isBold = false, variants }) {
  return (
    <motion.p
      className={`flex justify-between ${isBold ? "font-semibold" : ""}`}
      variants={variants}
    >
      <span>{label}</span>
      <span>£{value.toFixed(2)}</span>
    </motion.p>
  );
}

export default GetQuotesPage;
