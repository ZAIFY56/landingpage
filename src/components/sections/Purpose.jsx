import React from "react";
import image1 from "/purpose/Purpose1.png";
import image2 from "/purpose/purpose2.png";

export default function Purpose() {
  return (
    <section className="py-8 2xl:mt-10">
      <div className="container mx-auto px-2 py-2 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-xl md:text-3xl text-center md:text-start 2xl:text-6xl font-bold mb-6">
            Our <span className="text-primary">Mission</span>
          </h1>
          <div className="space-y-4 text-sm md:text-md relative">
            <p className="mx-auto text-center md:text-start 2xl:text-[20px] pr-12">
              At Rapid Response Couriers, speed, reliability, and
              professionalism are at the core of everything we do. Specializing
              in same-day and urgent deliveries, we provide secure and
              time-critical courier services tailored to meet the needs of
              businesses and individuals across UK.
              <br />
              <br />
              With a dedicated team of trained couriers and a fleet ready to
              respond at a moment's notice, we ensure your packages reach their
              destination swiftly and safely. Whether it's legal documents,
              medical supplies, or high-value items, we handle every delivery
              with care and precision.
            </p>
            <img
              src={image1}
              alt="Courier delivering package"
              className="md:absolute dark:filter dark:grayscale border-8 rounded border-[#F3F3F3] top-56 left-20 w-[100%] h-[18rem] 2xl:h-[25rem] z-50 object-cover"
              loading="lazy"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-xl md:text-3xl text-center md:text-start 2xl:text-6xl font-bold mb-6">
            Our <span className="text-primary">Vision</span>
          </h1>
          <div className="space-y-4 text-sm md:text-md">
            <p className="mx-auto text-center md:text-start 2xl:text-[20px] pr-12">
              To become the UK’s most trusted and efficient courier service,
              setting the standard for speed, security, and reliability —
              delivering peace of mind to every doorstep, on time, every
              time.{" "}
            </p>
            <img
              src={image2}
              alt="Future vision of delivery services"
              className="w-[90%] border-8 rounded border-[#F3F3F3] z-50 object-contain dark:filter dark:grayscale"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
