import image1 from "/sustainabilityfeatures/feature1.png";
import image2 from "/sustainabilityfeatures/feature2.png";
import image3 from "/sustainabilityfeatures/feature3.png";
import Card from "@/components/common/card/Card";
export default function SustainabilityFeatures() {
 const services = [
        {
            title: "100% carbon neutral",
            icon: image1,
            description: "Our courier service is 100% carbon neutral, delivering swiftly while actively reducing environmental impact."
        },
        {
            title: "Less waste",
            icon: image2,
            description: "Our courier service is committed to reducing waste to ensure a more sustainable and eco-friendly delivery process."
        },
        {
            title: "Zero emission options",
            icon: image3,
            description: "Our courier service offers zero emission options to promote environmentally friendly deliveries."
        },
    ];
    
    return (
        <section className='py-20'>
            <div className="container px-2 mx-auto items-center justify-between  w-full">
                <div className='text-center '>
                    <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#4B9795] mb-3">
                     Delivering,   <span className='text-black'> not polluting</span>
                    </h2>
                    <p className="text-md text-center md:mx-[14rem] mb-6">
                  At Rapid Response Couriers, we are committed to delivering your parcels quickly, safely, and reliably. Whether you're sending documents across town or shipping goods nationwide, our comprehensive courier solutions are designed to meet your needs.                    </p>
                </div>
                    <div className="container md:mx-[8rem] grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 mt-20 gap-4">
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
        </section>
  )
}
