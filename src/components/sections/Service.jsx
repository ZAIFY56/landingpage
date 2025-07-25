import React, { useMemo } from 'react';
import Samedayicon from "/service/samedeliveryicon.png";
import Nextdayicon from "/service/nextdayicon.png";
import Economicalicon from "/service/ecnomicserviceicon.png";
import Outofhoursicon from "/service/outofhoursService.png";
import { Card } from "@/components/common";

const SERVICE_DATA = [
    {
        title: "Same Day Delivery",
        icon: Samedayicon,
        description: "Direct, dedicated same-day collection and delivery."
    },
    {
        title: "Next Day Delivery",
        icon: Nextdayicon,
        description: "Reliable next-day delivery with overnight service."
    },
    {
        title: "Economical Service",
        icon: Economicalicon,
        description: "Affordable option for non-urgent deliveries."
    },
    {
        title: "Out of Hours Services",
        icon: Outofhoursicon,
        description: "Timely deliveries with strict deadlines for pick-up/drop-off."
    },
];

export default function Service() {
    const services = useMemo(() => SERVICE_DATA, []);

    return (
        <section className='py-2 2xl:mt-12'> 
            <div className="container px-4 mx-auto w-full">
                <header className='text-center mb-10'> 
                    <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-semibold text-center text-[#4B9795] mb-3">
                        Services <span className='text-black'>You Can</span> Trust
                    </h2>
                    <p className="2xl:text-[20px] text-sm text-center md:mx-[10rem] lg:mx-[15rem] 2xl:mx-[24rem] mb-6">
                        Trust Rapid Response Couriers for fast, secure, and reliable courier services that ensure your parcels arrive safely and on time. Count on us for dependable logistics you can rely on every step of the way.
                    </p>
                </header>

                <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
                    {services.map((service, index) => (
                        <Card
                            key={`service-${index}`}
                            className="!w-full md:!w-full !max-w-md md:!max-w-none"
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            hoverEffect={true}
                            containerProps={{
                                className: "!h-full !flex !flex-col !items-center !text-center"
                            }}
                            iconContainerProps={{
                                className: "!mb-4"
                            }}
                            titleProps={{
                                className: "!text-lg md:!text-xl !font-bold !mb-2"
                            }}
                            descriptionProps={{
                                className: "!text-sm md:!text-base"
                            }}
                        />
                    ))}
                </div>  
            </div>
        </section>
    );
}