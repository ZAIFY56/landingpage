import React from "react";
import { PrimaryButton } from "@/components/common/button";
import Input from "@/components/common/Input";

const ContactUs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white overflow-hidden">
          <h2 className="text-3xl text-[#4B9795] font-bold">Contact <span className="text-black">Us</span></h2>
          <div className="p-6 md:p-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="py-8">
              <h2 className="text-xl font-bold mt-2">Submit your Details</h2>
              <form className="space-y-4 py-4">
                <div>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-5/6"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    id="number"
                    placeholder="Number"
                    className="w-5/6"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-5/6"
                  />
                </div>

                <div className="w-5/6">
                  <textarea
  id="message"
  rows={4}
  placeholder="Message"
  className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B9795] min-h-[120px] align-top pt-3 resize-none"
/>

                </div>

                <PrimaryButton type="submit" className="w-5/6">
                  Submit
                </PrimaryButton>
              </form>
            </div>

            <div className="space-y-2 mt-20 ">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mt-2 mb-2">Address</h3>
                <p className="text-gray-600 text-md flex items-center">
                  99 Roving St., Big City, PKU Ln. Mesa, New Jersey 45463
                </p>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold mt-2 mb-2">Contact Info</h3>
                <p className="text-gray-600  text-md flex items-center">
                  helloworld@rapidresponsecourier.com
                </p>
                <p className="text-gray-600  text-md flex items-center mt-2">
                  +971 000 0000 0000
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mt-2 mb-2">Opening hours</h3>
                <ul className="space-y-2 text-gray-600 mt-6">
                  <li className="flex justify-between  text-md">
                    Monday-Friday
                  </li>
                  <li className="flex justify-between  text-md">
                    9am - 5pm
                  </li>
                  <li className="flex justify-between  text-md">
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

export default ContactUs;