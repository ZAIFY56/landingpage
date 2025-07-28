import { useNavigate } from 'react-router-dom';
import termsImage from "/termscondition/t1.jpg";

const TermsAndConditionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container px-4 mx-auto w-full"> 
        <h1 className="text-3xl font-semibold text-[#4B9795] 2xl:text-6xl mb-8">Our Terms & Conditions</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="flex flex-col">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold 2xl:text-[32px] text-[#4B9795] mb-4">Introduction</h2>
                <p className="mb-4 2xl:text-[20px]">
                  Welcome to the Rapid Response Courier website These Terms & Conditions govern your use of our website and the services we provide. By accessing our website and/or using our services, you agree to be bound by these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Definitions</h2>
                <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2 mb-4">
                  <li>"Customer": The individual or entity using our courier services.</li>
                  <li>"Package": The item(s) to be couriered.</li>
                  <li>"Services": The courier and delivery services provided by Rapid Response Courier.</li>
                  <li>"Booking": The arrangement to send a package via our services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Service Provision</h2>
                <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2 mb-4">
                  <li>We agree to collect, transport, and deliver Packages in accordance with the agreed terms.</li>
                  <li>We reserve the right to refuse any Booking or service at our discretion, including for safety, legal, or operational reasons.</li>
                </ul>
              </section>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Booking & Payment</h2>
              <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2 mb-4">
                <li>Bookings must be made via our website or approved channels.</li>
                <li>Payment must be completed in full before collection unless otherwise agreed.</li>
                <li>Prices are listed on our website and are subject to change without notice.</li>
                <li>We accept payment via the methods specified on our website.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Customer Responsibilities</h2>
              <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2 mb-4">
                <li>The Customer must ensure the Package is properly packed, labeled, and safe for transportation.</li>
                <li>The Customer must provide accurate and complete delivery and contact details.</li>
                <li>The Customer must declare if the Package contains any items requiring special handling or restrictions.</li>
              </ul>
            </section>
          </div>

          <div className="lg:w-1/3 lg:self-start">
            <div className="p-4">
              <img 
                src={termsImage} 
                alt="Courier service terms illustration" 
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <section className="mb-8  p-6 ">
            <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Liability and Insurance</h2>
            <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2 mb-4">
              <li>We accept liability for loss or damage caused by our negligence up to the limits specified in our insurance policy.</li>
              <li>The Customer is advised to obtain insurance for valuable, fragile, or sensitive items.</li>
              <li>We are not liable for loss or damage caused by improper packaging or illegal contents.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Prohibited Items</h2>
            <div className=" p-6">
              <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2 mb-4">
                <li>The Customer shall not send illegal, hazardous, or prohibited items, including but not limited to explosives, drugs, perishable goods, or items that violate UK law.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Delivery Timeframes</h2>
            <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2">
              <li>Estimated delivery times are provided but are not guaranteed.</li>
              <li>We are not liable for delays caused by circumstances beyond our control, including weather, traffic, or customs procedures.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-4">Claims and Complaints</h2>
            <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2">
              <li>Claims for loss, damage, or delay must be submitted within [X] days of delivery.</li>
              <li>All claims are subject to investigation and applicable policies.</li>
              <li>To make a claim, contact us at [contact details].</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-3">Data Protection</h2>
            <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2">
              <li>We will process personal data in accordance with UK GDPR and the Data Protection Act 2018.</li>
              <li>Personal data will only be used for the purpose of providing our services and in accordance with our Privacy Policy.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl 2xl:text-[32px]  font-semibold text-[#4B9795] mb-3">Termination</h2>
            <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2">
              <li>We may suspend or terminate our services at any time if the Customer breaches these Terms & Conditions or for operational reasons.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl 2xl:text-[32px] font-semibold text-[#4B9795] mb-3">Governing Law</h2>
            <ul className="list-disc 2xl:text-[20px] pl-6 space-y-2">
              <li>These Terms & Conditions are governed by the laws of England and Wales.</li>
              <li>Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;