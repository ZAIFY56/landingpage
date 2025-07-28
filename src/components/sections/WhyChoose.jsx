import React, { useMemo } from 'react';
import ProfessionalIcon from "/whychoose/professionalicon.png";
import ReliabilityIcon from "/whychoose/Reliabilityicon.png";
import ResponsiveIcon from "/whychoose/responsiveicon.png";
import SustainabilityIcon from "/whychoose/sustainabilityicon.png";
import { Card } from "@/components/common";

const FEATURES = [
    {
        title: "Professional Service",
        icon: ProfessionalIcon,
        description: "Our experienced couriers ensure your goods are handled with care and delivered on time, every time."
    },
    {
        title: "Reliability",
        icon: ReliabilityIcon,
        description: "With a network spanning the UK, we guarantee prompt collection and delivery, meeting your business deadlines consistently."
    },
    {
        title: "Responsiveness",
        icon: ResponsiveIcon,
        description: "Our dedicated customer support team is available to address your needs and adapt to your requirements swiftly."
    },
    {
        title: "Sustainability",
        icon: SustainabilityIcon,
        description: "Committed to ethical practices, we offer eco-friendly delivery options to help your business reduce its carbon footprint."
    },
];

export default function WhyChoose() {
    const features = useMemo(() => FEATURES, []);

    return (
        <section className="py-8">
            <div className="container mx-auto px-2 py-2 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="flex flex-col mt-10 md:flex-row gap-16">
                    <div className="md:w-1/3 text-center md:my-2 md:text-start">
                        <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold">
                            Why <span className='text-[#4B9795]'>Choose Us</span>
                        </h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-xs 2xl:text-[18px] 2xl:ml-[12rem] 2xl:text-right text-center">
                            At Rapid Response Couriers, we understand that in business, time isn't just money — it's everything. That's why when it's urgent, we're unstoppable. We specialize in fast, secure deliveries with zero excuses. From pickup to drop-off, we operate with precision timing, ensuring every parcel is delivered with care and delivered on time. Because in our world, delays aren't an option
                        </p>
                        <p className="text-xs md-text: ml-[7rem] 2xl:text-[20px] 2xl:text-end md:ml-[22rem]">
                            — your emergency is our express route."
                        </p>
                    </div>
                </div>
            </div>
                <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
                {features.map((feature, index) => (
                    <Card 
                        key={`feature-${index}`} 
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                            className="!w-full md:!w-full !max-w-md md:!max-w-none"
                    />
                ))}
            </div>
        </section>
    );
}