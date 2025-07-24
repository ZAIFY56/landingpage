import React from "react";
import rapidLogo from "/footer/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-[#4B9795] text-white py-8 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-4">
            <img 
              src={rapidLogo}
              alt="Rapid Response Couriers"
              width={200}
              height={60}
            />
          </div>
          <div className="text-center italic">
            <p>Delivering On Promises,</p>
            <p>Powered by Precision</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="font-bold text-lg mb-2">CORRELATION</h3>
          <h3 className="font-bold text-lg mb-4">SERVICES</h3>
          <div className="h-px bg-gray-300 w-24 mx-auto mb-4"></div>
        </div>

        <div className="text-center mb-8">
          <h3 className="font-bold mb-3">Contact info</h3>
          <p className="mb-2">Nationality to enhance innovation and cost (ISO 9001:2003)</p>
          <p className="mb-1">Headquarters: Local School, Tanya-Aslan, Tanya-Aslan,</p>
          <p className="mb-1">Company: Tech. Tech. Dr. P. Firouzaki</p>
          <p>Site ID: at ry@tech.co.uk</p>
        </div>

        <div className="text-center text-sm">
          <p> {new Date().getFullYear()} Rapid Response Couriers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;