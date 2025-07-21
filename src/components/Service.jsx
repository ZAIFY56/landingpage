import React from 'react'
import Samedayicon from "../assets/samedeliveryicon.png"
import Nextdayicon from "../assets/nextdayicon.png"
import Economicalicon from "../assets/ecnomicserviceicon.png"
import Outofhoursicon from "../assets/outofhoursService.png"

export default function Service() {
    const services = [
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
    ]
    return (
        <div className='py-2'>
            <div className="max-w-screen-xl px-12 mx-auto items-center justify-between w-full">
                <div className='text-center mx-[21rem]'>
                    <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#4B9795] mb-3">Services <span className='text-black'>You Can</span> Trust</h2>
                    <p className="text-sm text-center mb-6">Trust Rapid Response Couriers for fast, secure, and reliable courier services that ensure your parcels arrive safely and on time. Count on us for dependable logistics you can rely on every step of the way.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 gap-4 ">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#F3F3F3] w-full flex flex-col items-center max-w-[240px] lg:w-[300px] min-h-[180px] p-4 rounded-xl  hover:shadow-2xl transition">
                            <img src={service.icon} alt={service.title} className="h-12 w-12 rounded-full p-2 object-contain bg-white" />
                            <h3 className="text-md mt-2 font-bold text-center">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-700 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
                  
            </div>
        </div>
    )
}