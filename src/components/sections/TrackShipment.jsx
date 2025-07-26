import React, { useMemo } from "react";
import { Button } from "@/components/common";
import { Input } from "@/components/common";

const TRACKING_STEPS = [
  {
    title: "Ordered",
    time: "15:30 July 3, 2025",
    completed: true,
  },
  {
    title: "Shipped",
    time: "15:45 July 3, 2025",
    completed: true,
  },
  {
    title: "Delivered",
    time: "Estimated by 17:30",
    completed: false,
  },
];

const TrackShipment = () => {
  const statusSteps = useMemo(() => TRACKING_STEPS, []);

  return (
    <section className="py-10">
      <div className="container px-2 mx-auto flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/2 bg-white p-6">
          <h1 className="text-3xl 2xl:text-6xl font-semibold text-[#4B9795] mb-6">
            <span className="text-black">Track</span> Your Shipment
          </h1>

          <div className="mb-6">
            <div className="relative w-full max-w-sm 2xl:max-w-xl">
              <Input
                type="text"
                placeholder="Enter tracking number"
                className="w-full h-12 md:h-14 2xl:h-[70px] pr-36 rounded-md"
                aria-label="Tracking number input"
              />
              <Button
                variant="primary"
                className="absolute top-1/2 right-0 -translate-y-1/2 h-10 md:h-12 px-6 rounded-l-none rounded-r-md"
                aria-label="Track shipment"
              >
                Track
              </Button>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#4B9795]"></div>

            <div className="space-y-12 py-12">
              {statusSteps.map((step, index) => (
                <div
                  key={`step-${index}`}
                  className="relative flex items-start min-h-[40px]"
                >
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 -ml-[12px] rounded-full border-2 
                              ${step.completed ? "bg-[#4B9795] border-[#4B9795]" : "bg-white border-[#4B9795]"}`}
                  ></div>

                  <div className="pl-4 flex text-center gap-20">
                    <h3 className="font-semibold 2xl:text-[24px] mt-2 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-sm 2xl:text-[16px] text-[#4B9795] mt-2">
                      {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 2xl:text-[16px]">
            Tracking Number: 0000 0000 0000
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6">
          <div className="">
            <p className="text-sm 2xl:text-[20px] text-end">
              Track Your Shipment offers real-time updates on your packaging
              location and delivery status. Stay informed and have peace of mind
              with our reliable courier tracking service.
            </p>
          </div>
          <div className="aspect-w-16 mt-8 aspect-h-9 dark:filter dark:grayscale">
            <iframe
              title="Live Shipment Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.296612386422!2d55.313517585107974!3d25.231929344178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d364e1720cb%3A0x63bbf8d4c3d0263b!2sUmm%20Hurair%202%20-%20Dubai%20Healthcare%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1753389132198!5m2!1sen!2s"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full rounded-lg border border-gray-200"
              aria-label="Shipment location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackShipment;
