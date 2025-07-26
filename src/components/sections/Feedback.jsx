import React, { useMemo } from "react";
import image1 from "/feedback/feedback1.png";
import image2 from "/feedback/feedback2.png";
import { Card } from "@/components/common";

const FEEDBACK_DATA = [
  {
    icon: image1,
    title: "Kristin Watson",
    description:
      "This courier company was extremely reliable and professional. My package arrived ahead of schedule and in perfect condition. I highly recommend their services for timely deliveries!",
  },
  {
    icon: image2,
    title: "Alice Wilson",
    description:
      "Amazing service with friendly staff and quick delivery. Tracking was simple and updates were frequent. I will definitely choose them again for future shipments!",
  },
];

export default function Feedback() {
  const feedbacks = useMemo(() => FEEDBACK_DATA, []);

  return (
    <section className="py-2 md:mt-52 lg:pt-32 2xl:pt-52">
      <div className="container mx-auto px-2 py-2 items-center justify-between w-full">
        <header>
          <h2 className="text-xl md:text-3xl 2xl:text-6xl font-bold text-center text-primary">
            <span className="text-black">What</span> People & Businesses
            <br />
            <span className="text-black">Say About Our</span> Services
          </h2>
        </header>

        <div className="2xl:mt-16 container mx-auto flex flex-col mt-6 md:flex-row gap-8 justify-center">
          {feedbacks.map((feedback, index) => (
            <Card
              key={`feedback-${index}`}
              className="!bg-white !p-6 !rounded-lg border !border-primary !flex !flex-col md:!flex-row !w-full lg  :!w-[45%] 2xl:!w-[48%] !max-w-none"
              hoverEffect={false}
              containerProps={{
                className:
                  "!w-full !h-auto !min-h-0 !p-0 !bg-transparent !shadow-none",
              }}
              iconContainerProps={{
                className: "!hidden",
              }}
              titleProps={{
                className: "!hidden",
              }}
              descriptionProps={{
                className: "!hidden",
              }}
            >
              <div className="flex flex-col items-center md:items-center md:w-1/3 md:pr-6 md:mb-0">
                <img
                  src={feedback.icon}
                  alt={`${feedback.title} profile`}
                  className="2xl:w-[140px] 2xl:h-[140px]lg:w-28 h-28 rounded-full object-cover mb-3"
                  width={140}
                  height={140}
                  loading="lazy"
                />
                <h3 className="font-bold 2xl:text-[20px] text-md text-gray-800 text-center lg:text-left">
                  {feedback.title}
                </h3>
              </div>

              <div className="md:w-2/3 md:pl-6">
                <div
                  className="flex justify-center md:justify-end mb-3 text-yellow-400"
                  aria-hidden="true"
                >
                  {[...Array(5)].map((_, i) => (
                    <span key={`star-${i}`} className="2xl:text-[32px]">
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-sm text-bold 2xl:text-[20px] text-center lg:text-left">
                  "{feedback.description}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
