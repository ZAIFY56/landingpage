import { FaArrowRight } from 'react-icons/fa';
import heroimg from "/formgetquote/getqoute1.jpg";  
import backIcon from "/getquote/prevoius.png";
import { Input, Button } from "@/components/common";
import image1 from "/formgetquote/form1.jpg";
import image2 from "/formgetquote/form2.jpg";
import image3 from "/formgetquote/form3.jpg";
import { useNavigate } from 'react-router-dom';

const AddressSection = ({ title }) => (

  <div className="p-6 pb-6">
    <h2 className="text-xl 2xl:text-[32px] font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input 
        type="text" 
        placeholder="First Name *" 
        className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
        required 
      />
      <Input 
        type="text" 
        placeholder="Last Name *" 
        className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
        required 
      />
      <div className="md:col-span-2">
        <Input 
          type="tel" 
          placeholder="Telephone number *" 
          className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
          required 
        />
      </div>
      <div className="md:col-span-2">
        <Input 
          type="text" 
          placeholder="Address Line *" 
          className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
          required 
        />
      </div>
      <Input 
        type="text" 
        placeholder="City *" 
        className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
        required 
      />
      <Input 
        type="text" 
        placeholder="Postcode *" 
        className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
        required 
      />
    </div>
  </div>
);

const BackButton = () => (
  <Button className="flex items-center gap-2 !bg-white !text-[#4B9795]">
    <img 
      src={backIcon} 
      alt="Back" 
      className="h-3 w-3 2xl:w-[16px] 2xl:w-[12px]" 
      style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(13%) saturate(1532%) hue-rotate(122deg) brightness(90%) contrast(87%)' }}
    />
    Back
  </Button>
);

export default function InstantQuoteFormPage() {
  const navigate=useNavigate();
  return (
    <div className="bg-white relative">
      <div className="relative">
        <img 
          src={heroimg} 
          alt="Hero" 
          className="w-full 2xl:mx-[28rem] 2xl:w-[1920px] h-[360px] object-cover" 
          loading="lazy"
        />
        <div className="absolute mx-[4rem] md:mx-[16rem] 2xl:mx-[64rem] 2xl:rounded-lg 2xl:top-68 top-80 left-0 right-0">
          <h2 className="bg-white text-[#4B9795] p-6 text-xl md:text-4xl 2xl:text-6xl font-semibold text-center rounded-md">
            Instant Quotes
          </h2>
        </div>
      </div>

      <div className="lg:hidden text-end bg-white p-4 pt-20 z-10">
        <BackButton className="flex ml-52 gap-2" />
      </div>

      <div className="container mx-auto mt-4 md:mt-14 flex flex-col lg:flex-row gap-8 px-4">
        <div className="lg:w-3/4 bg-white">
          <div className="p-6 pb-6">
            <h2 className="text-xl 2xl:text-[32px] font-semibold mb-4">Your details:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                type="text" 
                placeholder="First Name *" 
                className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
                required 
              />
              <Input 
                type="text" 
                placeholder="Last Name *" 
                className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
                required 
              />
              <Input 
                type="email" 
                placeholder="Email *" 
                className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
                required 
              />
              <Input 
                type="tel" 
                placeholder="Telephone number *" 
                className="w-full !bg-white !border !border-[#4B9795] placeholder:font-medium" 
                required 
              />
            </div>
          </div>

          <div className="lg:hidden p-4">
            <img src={image1} alt="Courier service" className="w-full h-auto rounded-md" loading="lazy" />
          </div>

          <AddressSection title="Collection Address" />
          <div className="lg:hidden p-4">
            <img src={image2} alt="Delivery van" className="w-full h-auto rounded-md" loading="lazy" />
          </div>

          <AddressSection title="Delivery Address" />
          <div className="lg:hidden p-4">
            <img src={image3} alt="Shipping package" className="w-full h-auto rounded-md" loading="lazy" />
          </div>

          <div className="p-6 pb-6">
            <h2 className="text-xl 2xl:text-[32px] font-semibold mb-2">NOTES</h2>
            <p className="text-sm mb-4 2xl:text-[20px]">
              Please provide details such as dimensions, weight, loading notes etc.
            </p>
            <Input
              type="text"
              placeholder="Any additional details to help your delivery..."
              className="w-full 2xl:text-[16px] !2xl:w-[464px] !bg-white !border !border-[#4B9795] placeholder:font-medium h-12 pt-2"
              required
            />
          </div>

          <div className="p-6 space-y-4 mb-6">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                className="mr-2 h-4 w-4 appearance-none border border-[#4B9795] rounded checked:bg-[#4B9795] checked:border-transparent focus:ring-0 focus:ring-offset-0" 
                required 
              />
              <span className="text-sm 2xl:text-[20px]">
                I have read and accepted the T&Cs <span className="text-red-500">*</span>
              </span>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="loading" 
                className="mr-2 h-4 w-4 appearance-none border border-[#4B9795] rounded checked:bg-[#4B9795] checked:border-transparent focus:ring-0 focus:ring-offset-0" 
                required 
              />
              <span className="text-sm 2xl:text-[20px]">
                I have read and agree to the loading notice below <span className="text-red-500">*</span>
              </span>
            </div>
          </div>

          <div className="p-6 flex flex-col items-start pt-6">
            <div className="mb-2">
              <p className="text-2xl font-bold text-[#4B9795]">£90.00 <span className="text-sm font-normal text-gray-500">(no VAT)</span></p>
            </div>
          <Button 
  variant="primary"
  className="mt-4 px-8 py-3 bg-[#4B9795] text-white rounded font-medium flex items-center transition"
  onClick={() => navigate("/thank-you")}
>
  Book Now <FaArrowRight className="md:ml-2" />
</Button>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-1/4 flex-col gap-6 h-fit">
          <div className="bg-white p-4 rounded-lg">
            <BackButton className="2xl:text-xl" />
          </div>
          <div className="bg-white p-4 rounded-lg space-y-6">
            <img src={image1} alt="Courier service" className="w-full h-auto rounded-md" loading="lazy" />
            <img src={image2} alt="Delivery van" className="md:pt-20 2xl:pt-0 w-full h-auto rounded-md" loading="lazy" />
            <img src={image3} alt="Shipping package" className="md:pt-44 2xl:pt-0 w-full h-auto rounded-md" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}