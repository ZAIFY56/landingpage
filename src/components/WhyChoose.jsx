import ProfessionalIcon from "../assets/professionalicon.png"
import ReliabilityIcon from "../assets/Reliabilityicon.png"
import ResponsiveIcon from "../assets/responsiveicon.png"
import SustainabilityIcon from "../assets/sustainabilityicon.png"
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
            <div className="max-w-screen-xl mx-auto px-12 py-2 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="flex flex-col mt-10 md:flex-row gap-16">
                    <div className="md:w-1/3 text-center md:text-start">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Why <span className='text-[#4B9795]'>Choose Us</span>
                        </h2>
                    </div>
                    <div className="w-3/5">
                        <p className="text-md text-center">
                            At Rapid Response Couriers, we understand that in business, time isn't just money — it's everything. That's why when it's urgent, we're unstoppable. We specialize in fast, secure deliveries with zero excuses. From pickup to drop-off, we operate with precision timing, ensuring every parcel is delivered with care and delivered on time. Because in our world, delays aren't an option
                        </p>
                        <p className='text-sm ml-[27rem]'>— your emergency is our express route."</p>
                    </div>
                </div>
                
            </div>
            <div className="max-w-screen-xl mx-auto px-12 py-[3rem] flex flex-col-reverse md:flex-row items-center justify-between">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#F3F3F3] w-full flex flex-col items-center max-w-[240px] lg:w-[300px] min-h-[180px] p-4 rounded-xl  hover:shadow-2xl transition">
                            <img src={feature.icon} alt={feature.title} className="h-12 w-12 rounded-full p-2 object-contain bg-white" />
                            <h3 className="text-md mt-2 font-bold text-center">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-700 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
        </div>
    )
}