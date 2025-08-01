import React, { useMemo } from "react";
import { motion } from "framer-motion";
import image1 from "/new&letter/news1.png";
import image2 from "/new&letter/news2.png";
import image3 from "/new&letter/news3.png";
import image4 from "/new&letter/news4.png";
import { Card } from "@/components/common";
import { Button } from "@/components/common";
import { FaArrowRight } from "react-icons/fa6";

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

const ARTICLES_DATA = [
  {
    date: "July 4, 2025",
    icon: image2,
    title: "How to Choose the Right Courier Service for Your Business",
    hasReadMore: true,
  },
  {
    date: "July 4, 2025",
    icon: image3,
    title: "Protecting Your Shipments: Understanding Insurance Options",
    hasReadMore: true,
  },
  {
    date: "July 4, 2025",
    icon: image4,
    title: "Behind the Scenes: A Day in the Life of a Courier Driver",
    hasReadMore: true,
  },
];

export default function NewsAndArticles() {
  const articles = useMemo(() => ARTICLES_DATA, []);

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

  const mainArticleVariants = {
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

  const sideArticleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16" id="news-and-articles">
      <div className="container mx-auto px-6 md:px-15 lg:px-12 xl:px-12 2xl:px-12">
        <motion.header
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-semibold text-primary">
            <AnimatedText text="Our Latest News & Articles" delay={0.2} />
          </h2>
          <p className="mt-4 text-sm text-black 2xl:text-[20px] 2xl:mx-[26rem] md:[12rem] lg:mx-[12rem]">
            Stay updated with our latest news and articles, showcasing
            innovations and tips in the courier industry. Discover insights on
            delivery efficiency, safety, and customer satisfaction. Keep
            informed about our newest services and company achievements.
          </p>
        </motion.header>

        <div className="2xl:mt-24 flex flex-col md:flex-row      lg:flex-row gap-8">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={mainArticleVariants}
          >
            <motion.img
              src={image1}
              alt="Proper packing techniques demonstration"
              className="w-full 2xl:w-[610px] 2xl:h-[384px] 2xl:rounded-lg rounded-md h-64 object-cover"
              loading="lazy"
              width={610}
              s
              height={384}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />
            <div className="py-4">
              <span className="text-sm 2xl:text[20px] text-gray-500">
                July 4, 2025
              </span>
              <h3 className="text-2xl 2xl:text[24px] font-semibold mt-2 mb-4 text-gray-800">
                The Ultimate Guide to Packing for Safe Shipping
              </h3>
              <p className="text-md 2xl:text-[20px] text-black mb-6">
                Learn how to pack your items securely for safe shipping with
                this comprehensive guide. It covers essential materials, proper
                packing techniques, and labeling tips to prevent damage. Ensure
                your packages arrive intact and on time with these expert
                packing tips.
              </p>
              <Button variant="link" icon={<FaArrowRight />}>
                Read more
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {articles.map((article, index) => (
              <motion.div
                key={`article-${index}`}
                custom={index}
                variants={sideArticleVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="!p-0 !bg-white !max-w-none !w-full !border-b-2 !flex-row !items-stretch !min-h-0 !rounded-md hover:!shadow-none">
                  <div className="w-1/4">
                    <motion.img
                      src={article.icon}
                      alt={`Illustration for ${article.title}`}
                      className="w-full 2xl:w-[146px] 2xl:h-[156px] md:h-[6rem] rounded-l-md object-cover"
                      loading="lazy"
                      width={146}
                      height={156}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                    />
                  </div>
                  <div className="px-4 py-1 flex flex-col justify-between items-start w-3/4">
                    <div>
                      <span className="text-xs 2xl:text-[20px] text-gray-500">
                        {article.date}
                      </span>
                      <h3 className="text-md 2xl:text-[24px] font-semibold mt-1 mb-2 text-gray-800 line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                    <Button
                      variant="link"
                      icon={<FaArrowRight />}
                      className="!justify-start"
                    >
                      Read more
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
