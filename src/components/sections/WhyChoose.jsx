import ProfessionalIcon from "/whychoose/professionalicon.png"
import ReliabilityIcon from "/whychoose/Reliabilityicon.png"
import ResponsiveIcon from "/whychoose/responsiveicon.png"
import SustainabilityIcon from "/whychoose/sustainabilityicon.png"
import Card from "@/components/common/card/Card";

export default function WhyChoose() {
     const features = [
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
        ]
    return (
        <div className="py-8">
            <div className="container mx-auto px-2 py-2 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="flex flex-col mt-10 md:flex-row gap-16">
                    <div className="md:w-1/3 text-center md:my-2 md:text-start">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Why <span className='text-[#4B9795]'>Choose Us</span>
                        </h2>
                    </div>
                    <div className="md:w-2/3 ">
                        <p className="text-sm text-center">
                            At Rapid Response Couriers, we understand that in business, time isn't just money — it's everything. That's why when it's urgent, we're unstoppable. We specialize in fast, secure deliveries with zero excuses. From pickup to drop-off, we operate with precision timing, ensuring every parcel is delivered with care and delivered on time. Because in our world, delays aren't an option
                        </p>
                        <p className='text-sm ml-[7rem] md:ml-[22rem]'>— your emergency is our express route."</p>
                    </div>
                </div>
                
            </div>
                <div className="container mx-auto grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 mt-20 gap-4">
                    {features.map((feature, index) => (
                       <Card 
                       key={index}
                       icon={feature.icon}
                       title={feature.title}
                       description={feature.description}
                       />
                    ))}
                </div>
        </div>
    )
}