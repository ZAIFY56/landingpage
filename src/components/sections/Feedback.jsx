import image1 from "/feedback/feedback1.png"
import image2 from "/feedback/feedback2.png"
import Card from "@/components/common/card/Card";

export default function Feedback() {
    const feedbacks = [
        {
            icon:image1,
            title:"Kristin Watson",
            description:"This courier company was extremely reliable and professional. My package arrived ahead of schedule and in perfect condition. I highly recommend their services for timely deliveries!"
        },
        {
            icon:image2,
            title:"Alice Wilson",
            description:"Amazing service with friendly staff and quick delivery. Tracking was simple and updates were frequent. I will definitely choose them again for future shipments!"
        }
    ]
    return (
      <div className=' py-2 md:pt-52'>
            <div className="container mx-auto px-2 py-2 items-center justify-between w-full">
                <div>
                    <h2 className="text-4xl md:text-3xl font-bold text-center text-[#4B9795]">
                        <span className="text-black">What</span> People & Businesses 
                        <br/>
                        <span className="text-black">Say About Our</span> Services
                    </h2>
                </div>
                
                <div className="container mx-auto flex flex-col mt-6 md:flex-row gap-8 justify-center">
                    {feedbacks.map((feedback, index) => (
                        <Card
                            key={index}
                            className="!bg-white !p-6 !rounded-lg border !border-[#4B9795] !flex !flex-col md:!flex-row !w-full md:!w-[45%] !max-w-none"
                            hoverEffect={false}
                            containerProps={{
                                className: "!w-full !h-auto !min-h-0 !p-0 !bg-transparent !shadow-none"
                            }}
                            iconContainerProps={{
                                className: "!hidden"
                            }}
                            titleProps={{
                                className: "!hidden"
                            }}
                            descriptionProps={{
                                className: "!hidden"
                            }}
                        >
                            <div className="flex flex-col items-center md:items-center md:w-1/3 md:pr-6 md:mb-0">
                                <img 
                                    src={feedback.icon} 
                                    alt={feedback.title} 
                                    className="w-28 h-28 rounded-full object-cover mb-3"
                                />
                                <h3 className="font-bold text-md text-gray-800 text-center md:text-left">
                                    {feedback.title}
                                </h3>
                            </div>
                            
                            <div className="md:w-2/3 md:pl-6">
                                <div className="flex justify-center md:justify-end mb-3 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-xl">★</span>
                                    ))}
                                </div>
                                
                                <p className="text-sm text-bold text-center md:text-left">
                                    "{feedback.description}"
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>

    )
}
