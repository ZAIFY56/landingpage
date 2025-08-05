import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Button } from "@/components/common";
import {
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaClock,
  FaTruck,
} from "react-icons/fa6";
import { Card } from "@/components/common";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const BENEFITS = [
  {
    title: "Diverse Roles",
    description:
      "From drivers to logistics managers, we have positions for all skill levels.",
    icon: <FaBriefcase />,
  },
  {
    title: "Team Culture",
    description: "Join a supportive team that values collaboration and growth.",
    icon: <FaUsers />,
  },
  {
    title: "Career Growth",
    description: "Clear paths for advancement with training programs.",
    icon: <FaChartLine />,
  },
  {
    title: "Competitive Pay",
    description: "Attractive compensation packages with benefits.",
    icon: <FaHandshake />,
  },
  {
    title: "Flexible Schedules",
    description: "Work-life balance with various shift options.",
    icon: <FaClock />,
  },
  {
    title: "Modern Fleet",
    description: "Work with well-maintained, modern vehicles.",
    icon: <FaTruck className="text-2xl text-primary" />,
  },
];

const OPEN_POSITIONS = [
  {
    title: "Delivery Driver",
    type: "Full-time",
    location: "Multiple Cities",
    description: "Responsible for safe and timely package deliveries.",
  },
  {
    title: "Logistics Coordinator",
    type: "Full-time",
    location: "Headquarters",
    description: "Manage shipment routing and customer communications.",
  },
  {
    title: "Customer Service Rep",
    type: "Part-time",
    location: "Remote",
    description: "Assist customers with tracking and inquiries.",
  },
];

export default function CareersSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Create an infinite loop by duplicating the benefits
  const benefits = useMemo(() => [...BENEFITS, ...BENEFITS, ...BENEFITS], []);

  const cardWidth = isMobile ? 300 : 350;
  const gap = 24;
  const singleSetWidth = BENEFITS.length * (cardWidth + gap);

  const [spring, api] = useSpring(() => ({
    x: 0,
    config: { tension: 20, friction: 0, duration: 0 },
  }));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offsetRef = useRef(0);
  useEffect(() => {
    let animationFrame;
    const speed = 1.5; // px/frame - slower than sustainability for better readability
    const loop = () => {
      offsetRef.current -= speed;
      if (Math.abs(offsetRef.current) >= singleSetWidth) {
        offsetRef.current = 0;
      }
      api.set({ x: offsetRef.current });

      const normalized = Math.abs(offsetRef.current) % singleSetWidth;
      const index = Math.floor(normalized / (cardWidth + gap));
      setActiveIndex(index % BENEFITS.length); // Ensure index stays within original array bounds

      animationFrame = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(animationFrame);
  }, [api, singleSetWidth, cardWidth, gap]);

  const bind = useDrag(
    ({ movement: [mx], down }) => {
      if (down) {
        api.set({ x: offsetRef.current + mx });
      } else {
        // When released, snap to nearest card
        const currentX = offsetRef.current + mx;
        const cardIndex =
          Math.round(Math.abs(currentX) / (cardWidth + gap)) % BENEFITS.length;
        const targetX = -cardIndex * (cardWidth + gap);
        offsetRef.current = targetX;
        api.start({ x: targetX });
        setActiveIndex(cardIndex);
      }
    },
    {
      filterTaps: true,
      bounds: { left: -singleSetWidth, right: singleSetWidth },
      rubberband: true,
    }
  );

  const handleDotClick = (index) => {
    const targetX = -index * (cardWidth + gap);
    offsetRef.current = targetX;
    api.start({ x: targetX });
    setActiveIndex(index);
  };

  return (
    <section className="py-10" id="careers">
      <div className="container mx-auto px-6 md:px-12 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            variants={itemVariants}
          >
            Join Our Team
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Be part of a company that's revolutionizing delivery services. We're
            looking for passionate individuals to grow with us.
          </motion.p>
        </motion.div>

        {/* Benefits Carousel */}
        <motion.div
          className="relative mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="relative px-4">
            <div className="w-full overflow-hidden">
              <animated.div
                className="flex gap-6 py-4 cursor-grab active:cursor-grabbing"
                style={{
                  width: benefits.length * (cardWidth + gap),
                  x: spring.x,
                  touchAction: "none",
                }}
                {...bind()}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={`${index}-${benefit.title}`}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-shrink-0 ${isMobile ? "w-[300px]" : "w-[350px]"}`}
                  >
                    <Card
                      icon={benefit.icon}
                      title={benefit.title}
                      description={benefit.description}
                      hoverEffect={true}
                    />
                  </motion.div>
                ))}
              </animated.div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {BENEFITS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all rounded-full ${
                  activeIndex === index
                    ? "bg-primary w-6 h-3"
                    : "bg-gray-300 w-3 h-3"
                }`}
                aria-label={`Go to benefit ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            variants={itemVariants}
          >
            Current Openings
          </motion.h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            {OPEN_POSITIONS.map((position, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 !rounded-lg border !border-primary hover:border-primary transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-semibold">{position.title}</h4>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span>{position.type}</span>
                      <span className="mx-2">•</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    icon={<FaArrowRight />}
                    className="!border-primary !text-primary hover:!bg-primary hover:!text-white"
                    onClick={() => alert(`Applying for ${position.title}`)}
                    aria-label={`Apply for ${position.title}`}
                  >
                    Apply Now
                  </Button>
                </div>
                <p className="mt-4 text-gray-600">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 flex justify-center items-center flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Don't see your perfect role?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume
            and we'll contact you when a matching position opens.
          </p>
          <Button
            variant="primary"
            className="!w-auto !text-md"
            onClick={() => alert("Resume submission form coming soon!")}
          >
            Submit Your Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
