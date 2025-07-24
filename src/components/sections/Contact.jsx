import React from "react";
import { Button } from "@/components/common";
import { Input } from "@/components/common";

const ContactUs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white overflow-hidden">
          <h2 className="text-3xl text-[#4B9795] 2xl:text-6xl font-bold">
            Contact <span className="text-black">Us</span>
          </h2>
          <div className="p-6 md:p-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="py-8">
              <h2 className="text-xl 2xl:text-[44px] font-semibold mt-2">
                Submit your Details
              </h2>
              <form className="space-y-4 py-4" noValidate>
                <div>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-5/6"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <Input
                    type="tel" 
                    id="number"
                    name="phone"
                    placeholder="Number"
                    className="w-5/6"
                    aria-label="Phone number"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-5/6"
                    aria-label="Email address"
                  />
                </div>
                <div className="w-5/6">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B9795] min-h-[120px] align-top pt-3 resize-none"
                    aria-label="Your message"
                  />
                </div>
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="!w-5/6"
                  aria-label="Submit form"
                >
                  Submit
                </Button>
              </form>
            </div>

            <div className="space-y-2 mt-20">
              <div className="mb-6">
                <h3 className="text-xl 2xl:text-[32px] font-semibold mt-2 mb-2">
                  Address
                </h3>
                <address className="text-gray-600 2xl:text-[20px] text-md not-italic">
                  99 Roving St., Big City, PKU Ln. Mesa, New Jersey 45463
                </address>
              </div>
              <div>
                <h3 className="text-xl 2xl:text-[32px] font-semibold mt-2 mb-2">
                  Contact Info
                </h3>
                <p className="text-gray-600 2xl:text-[20px] text-md">
                  <a href="mailto:helloworld@rapidresponsecourier.com" className="hover:text-[#4B9795] transition-colors">
                    helloworld@rapidresponsecourier.com
                  </a>
                </p>
                <p className="text-gray-600 2xl:text-[20px] text-md mt-2">
                  <a href="tel:+9710000000000" className="hover:text-[#4B9795] transition-colors">
                    +971 000 0000 0000
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl 2xl:text-[32px] font-semibold mt-2 mb-2">
                  Opening hours
                </h3>
                <ul className="space-y-2 text-gray-600 mt-6">
                  <li className="2xl:text-[20px] text-md">
                    Monday-Friday
                  </li>
                  <li className="2xl:text-[20px] text-md">
                    9am - 5pm
                  </li>
                  <li className="2xl:text-[20px] text-md">
                    We are closed on weekends and national holidays
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactUs);