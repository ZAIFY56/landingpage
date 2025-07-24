import React, { useMemo } from 'react';
import image1 from "/courierpartner/courierpartner1.png";
import image2 from "/courierpartner/courierpartner2.png";
import image3 from "/courierpartner/courierpartner3.png";
import font1 from "/courierpartner/font1.png";
import font2 from "/courierpartner/font2.png";
import font3 from "/courierpartner/font3.png";
import { Card } from "@/components/common";

const PARTNER_DATA = [
    {
        logo: image1,
        brand: font1,
    },
    {
        logo: image2,
        brand: font2,
    },
    {
        logo: image3,
        brand: font3,
    },
];

export default function CourierPartners() {
    const partners = useMemo(() => PARTNER_DATA, []);

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <header className="text-center max-w-4xl mx-auto mb-16"> 
                    <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-semibold text-[#4B9795] mb-4">
                        <span className="text-black">Our Trusted</span> Courier Partner
                    </h2>
                    <p className="text-md 2xl:text-[20px] 2xl:mx-[6rem] md:mx-[12rem] text-gray-600">
                        At Rapid Response Couriers, we are committed to delivering your parcels quickly,
                        safely, and reliably. Whether you're sending documents across town or shipping
                        goods nationwide, our comprehensive courier solutions are designed to meet your needs.
                    </p>
                </header>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {partners.map((partner, index) => (
                        <Card
                            key={`partner-${index}`} 
                            className="!p-0 !bg-black !min-h-[200px] !max-w-none !w-full aspect-[4/3] relative overflow-hidden"
                            hoverEffect={true}
                        >
                            <img 
                                src={partner.logo} 
                                alt={`Partner company ${index + 1}`} 
                                className="absolute dark:filter dark:grayscale inset-0 w-full h-full object-cover opacity-70"
                                loading="lazy" 
                                width={600} 
                                height={450}
                            />
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                <img 
                                    src={partner.brand} 
                                    alt={`${partner.brand} brand name`} 
                                    className="max-w-[70%] max-h-[40%] object-contain z-10"
                                    loading="lazy"
                                    width={300}
                                    height={100}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}