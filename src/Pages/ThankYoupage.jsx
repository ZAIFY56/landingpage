import image1 from "/thankyou/thank.jpg";
import icon from "/thankyou/Vector.png";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/common";

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="relative">
        <img 
          src={image1} 
          alt="Thank you background" 
          className="w-full h-[360px] object-cover" 
          loading="lazy"
          decoding="async"
          width={1920}
          height={360}
        />
        
        <div className="absolute top-22 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={icon} 
                alt="Checkmark icon indicating success" 
                className="h-16 w-16"
                width={64}
                height={64}
                decoding="async"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#4B9795] mb-4">
              Thank You!
            </h1>
            
            <p className="text-md text-gray-600 mb-8" aria-live="polite">
              Your order has been received. We will contact you shortly.
            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-44 mb-8 w-full max-w-2xl container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#4B9795] text-white flex items-center justify-center mb-2" aria-label="Step 1: Order received">
              <span className="font-bold">1</span>
            </div>
            <span className="text-sm md:text-base font-medium text-[#4B9795]">Order received</span>
          </div>
          
          <div className="flex-1 h-1 bg-[#4B9795] mx-2" aria-hidden="true"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mb-2" aria-label="Step 2: Confirmation">
              <span className="font-bold">2</span>
            </div>
            <span className="text-sm md:text-base font-medium text-gray-500">Confirmation</span>
          </div>
          
          <div className="flex-1 h-1 bg-gray-300 mx-2" aria-hidden="true"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mb-2" aria-label="Step 3: Parcel delivered">
              <span className="font-bold">3</span>
            </div>
            <span className="text-sm md:text-base font-medium text-gray-500">Parcel Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
}