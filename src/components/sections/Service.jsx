import Samedayicon from "/service/samedeliveryicon.png";
import Nextdayicon from "/service/nextdayicon.png";
import Economicalicon from "/service/ecnomicserviceicon.png";
import Outofhoursicon from "/service/outofhoursService.png";
import Card from "@/components/common/card/Card";

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
    ];
    
    return (
        <div className='py-2'>
            <div className="container px-2 mx-auto items-center justify-between w-full">
                <div className='text-center'>
                    <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#4B9795] mb-3">
                        Services <span className='text-black'>You Can</span> Trust
                    </h2>
                    <p className="text-sm text-center mx-[16rem] mb-6">
Trust Rapid Response Couriers for fast, secure, and reliable courier services that ensure your parcels arrive safely and on time. Count on us for dependable logistics you can rely on every step of the way.                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 gap-4">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>  
            </div>
        </div>
    );
}