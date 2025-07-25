import { FaArrowRight } from 'react-icons/fa';
import heroimg from "/formgetquote/getqoute1.jpg";  
import { Input } from "@/components/common";
import image1 from "/formgetquote/form1.jpg";
import image2 from "/formgetquote/form2.jpg";
import image3 from "/formgetquote/form3.jpg";

export default function InstantQuoteFormPage() {
  return (
    <div className="bg-white relative">
      <div className="relative">
        <img 
          src={heroimg} 
          alt="Hero" 
          className="w-full 2xl:mx-[28rem] 2xl:w-[1920px] h-[360px] object-cover" 
        />
        <div className="absolute mx-[4rem] md:mx-[16rem] 2xl:mx-[64rem] 2xl:rounded-lg 2xl:top-68 top-80 left-0 right-0">
          <h2 className="bg-white text-[#4B9795] p-6 text-xl md:text-4xl font-bold text-center rounded-md">
            Instant Quotes
          </h2>
        </div>
      </div>

      <div className="mt-10 md:mt-14 flex flex-wrap justify-between items-center  p-4 rounded-md max-w-5xl mx-auto mb-8">
        <div className="lg:w-3/4 bg-white p-6 rounded-lg shadow-sm">
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-4">Your details:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telephone number*</label>
                <Input type="tel" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email*</label>
                <Input type="email" className="w-full" required />
              </div>
            </div>
          </div>

          <div className="border-b pb-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Collection Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telephone number*</label>
                <Input type="tel" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address Line*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Postcode*</label>
                <Input type="text" className="w-full" required />
              </div>
            </div>
          </div>

          {/* Delivery Address Section */}
          <div className="border-b pb-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telephone number*</label>
                <Input type="tel" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address Line*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City*</label>
                <Input type="text" className="w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Postcode*</label>
                <Input type="text" className="w-full" required />
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="border-b pb-6 mt-6">
            <h2 className="text-xl font-semibold mb-2">NOTES</h2>
            <p className="text-sm text-gray-600 mb-4">
              Please provide details such as dimensions, weight, loading notes etc.
            </p>
            <textarea
              className="w-full p-4 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#4B9795]"
              placeholder="Any additional details to help your delivery..."
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4 mb-6 mt-6">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                className="mr-2 h-4 w-4 text-[#4B9795] focus:ring-[#4B9795] border-gray-300 rounded" 
                required 
              />
              <label htmlFor="terms" className="text-sm">
                I have read and accepted the T&Cs *
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="loading" 
                className="mr-2 h-4 w-4 text-[#4B9795] focus:ring-[#4B9795] border-gray-300 rounded" 
                required 
              />
              <label htmlFor="loading" className="text-sm">
                I have read and agree to the loading notice below *
              </label>
            </div>
          </div>

          {/* Price and Submit Button */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6 mt-6">
            <div className="mb-4 md:mb-0">
              <p className="text-2xl font-bold">£90.00 <span className="text-sm font-normal">(no VAT)</span></p>
            </div>
            <div className="flex space-x-4">
              <button className="px-8 py-3 border rounded font-medium hover:bg-gray-50 transition">
                Back
              </button>
              <button className="px-8 py-3 bg-[#4B9795] text-white rounded font-medium flex items-center hover:bg-[#3c7e7c] transition">
                Book Now <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Images Section (1/4 width) */}
        <div className="lg:w-1/4 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <img src={image1} alt="Courier service" className="w-full h-auto rounded-md mb-4" />
            <img src={image2} alt="Delivery van" className="w-full h-auto rounded-md mb-4" />
            <img src={image3} alt="Shipping package" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}