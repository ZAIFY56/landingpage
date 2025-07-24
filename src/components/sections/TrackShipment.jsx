import { PrimaryButton } from "@/components/common/button";
import Input from "@/components/common/Input";
import mapimage from "/trackshipment/map.png";

const statusSteps = [
  {
    title: "Ordered",
    time: "15:30 July 3, 2025",
    completed: true,
  },
  {
    title: "Shipped",
    time: "15:45 July 3, 2025",
    completed: true,
  },
  {
    title: "Delivered",
    time: "Estimated by 17:30",
    completed: false,
  },
];

const TrackShipment = () => {
  return (
    <section className="py-10">
      <div className="container px-2 mx-auto flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/2 bg-white p-6">
          <h1 className="text-3xl font-semibold text-[#4B9795] mb-6">
            <span className="text-black">Track</span> Your Shipment
          </h1>

          <div className="flex mb-6">
            <Input
              type="text"
              placeholder="Enter tracking number"
              className="w-1/2 rounded-r-none"
            />
            <PrimaryButton className="rounded-l-none">Track Shipment</PrimaryButton>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#4B9795]"></div>
            
            <div className="space-y-12 py-12">
              {statusSteps.map((step, index) => (
                <div key={index} className="relative flex items-start min-h-[40px]">
                  <div 
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 -ml-[12px] rounded-full border-2 
                              ${step.completed ? 'bg-[#4B9795] border-[#4B9795]' : 'bg-white border-[#4B9795]'}`}
                  ></div>
                  
                  <div className="pl-4 flex text-center gap-20">
                    <h3 className="font-semibold mt-2 text-gray-800">{step.title}</h3>
                    <p className="text-sm text-[#4B9795] mt-2">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4">Tracking Number: 0000 0000 0000</p>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6">
          <div className="">
            <p className="text-sm text-end">
              Track Your Shipment offers real-time updates on your packaging location and delivery status.
              Stay informed and have peace of mind with our reliable courier tracking service.
            </p>
          </div>
          <div className="aspect-w-16 mt-8 aspect-h-9 dark:filter dark:grayscale">
            <img src={mapimage} alt="map" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackShipment;