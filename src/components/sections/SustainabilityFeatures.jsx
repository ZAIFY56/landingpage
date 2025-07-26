import React, { useMemo } from "react";
import image1 from "/sustainabilityfeatures/feature1.png";
import image2 from "/sustainabilityfeatures/feature2.png";
import image3 from "/sustainabilityfeatures/feature3.png";
import { Card } from "@/components/common";

const SUSTAINABILITY_SERVICES = [
  {
    title: "100% carbon neutral",
    icon: image1,
    description:
      "Our courier service is 100% carbon neutral, delivering swiftly while actively reducing environmental impact.",
  },
  {
    title: "Less waste",
    icon: image2,
    description:
      "Our courier service is committed to reducing waste to ensure a more sustainable and eco-friendly delivery process.",
  },
  {
    title: "Zero emission options",
    icon: image3,
    description:
      "Our courier service offers zero emission options to promote environmentally friendly deliveries.",
  },
];

export default function SustainabilityFeatures() {
  const services = useMemo(() => SUSTAINABILITY_SERVICES, []);

  return (
    <section className="py-12 2xl:pt-32">
      <div className="container px-2 mx-auto items-center justify-between w-full">
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-semibold text-center text-primary mb-3">
            Delivering, <span className="text-black">not polluting</span>
          </h2>
          <p className="text-md 2xl:text-[20px] 2xl:mx-[26rem] text-center md:mx-[10rem] lg:mx-[14rem] mb-6">
            Delivering products efficiently while prioritizing eco-friendly
            practices to minimize environmental impact. Committed to sustainable
            logistics that protect our planet.
          </p>
        </header>

        <div className="container lg:mx-[8rem] grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 2xl:mt-20 mt-10 gap-4">
          {services.map((service, index) => (
            <Card
              className="!w-full"
              key={`sustainability-${index}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconProps={{
                width: 64,
                height: 64,
                loading: "lazy",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
