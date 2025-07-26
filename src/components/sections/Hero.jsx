import React from "react";
import heroImg from "/hero/hero.png";
import heroImg2 from "/hero/hero2.png";
import logoImg from "/Vector.png";
import { Button } from "@/components/common";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto sm:px-4 2xl:px-15 2xl:py-0 2xl:mb-20 sm:py-8 md:py-0 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl font-semibold leading-tight">
            Speed Is <span className="text-[#4B9795]">Our Priority</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-[#4B9795]">We're Already</span> Rolling Out!
          </h2>
          <div className="2xl:my-8 2xl:mr-44 ">
            <p className="text-gray-700 mb-6    2xl:text-[20px] md:text-[16px] leading-[100%] tracking-[-0.04em] align-middle">
              Our team specializes in fast, reliable deliveries for urgent
              needs. No matter the deadline, we're already on the move to ensure
              your order arrives on time. Trust us to handle your last-minute
              requests with speed and precision.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button
              variant="primary"
              onClick={() => navigate("/instant-quote/form")}
              className="w-[191px] h-[48px] sm:w-auto"
            >
              Book a Delivery
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/instant-quote")}
              className="w-[175px] h-[48px] sm:w-auto"
            >
              Instant Quote
            </Button>
          </div>
        </div>

        <div className="2xl:mr-18   md:w-1/2 w-full relative h-[320px] sm:h-[400px] md:h-[400px] mb-8 md:mb-0">
          <img
            src={heroImg2}
            alt="Team handling packages professionally"
            className="absolute dark:filter dark:grayscale top-2 md:top-32 lg:top-20 xl:top-8  2xl:top-10 right-2 sm:right-8 md:right-12  2xl:right-54 w-[50%] 2xl:w-[45%] z-10 object-contain"
            width={499}
            height={330}
            loading="lazy"
          />

          <div className="absolute top-20 md:top-44 lg:top-36 xl:top-28  2xl:top-36 left-44 sm:left-46 md:left-36 lg:left-60 xl:left-72 2xl:left-96 z-20">
            <h3 className="text-[#4B9795] font-bold text-xl sm:text-2xl md:text-2xl xl:text-4xl 2xl:text-4xl leading-tight">
              ON TIME
            </h3>
            <h2 className="text-[#4B9795] font-bold text-2xl sm:text-3xl md:text-2xl xl:text-4xl  2xl:text-5xl leading-tight">
              EVERY TIME
            </h2>
          </div>

          <img
            src={heroImg}
            alt="Modern delivery van in motion"
            className="absolute bottom-10 md:bottom-10 lg:bottom-8 xl:bottom-0  2xl:top-56 right-0 sm:right-4 w-full sm:w-[90%] md:w-[85%]  z-30 object-contain"
            width={800}
            height={600}
            loading="lazy"
          />

          <div className="absolute bottom-36 md:bottom-32 lg:bottom-40 2xl:bottom-24 left-52 md:left-[62%] lg:left-[60%] 2xl:left-[64%] transform -translate-x-1/2 z-40">
            <img
              src={logoImg}
              alt="Company logo badge"
              className="w-24 md:w-32 2xl:w-52 opacity-90"
              width={128}
              height={128}
              loading="lazy"
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
