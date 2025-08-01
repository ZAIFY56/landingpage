import React, { useMemo } from "react";
import rapidLogo from "/footer/Vector.png";
import { Input, Button } from "@/components/common";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navItems = useMemo(
    () => [
      { label: "Services", path: "/#services" },
      { label: "About", path: "/#about" },
      { label: "Track Order", path: "/#track-order" },
      { label: "Latest News", path: "/#news-and-articles" },
      { label: "Contact", path: "/#contact-us" },
    ],
    []
  );

  const supportItems = useMemo(
    () => [
      { label: "Fraud Awareness" },
      { label: "Legal Notice" },
      { label: "Terms of Use", path: "/terms-condition" },
      { label: "Privacy Notice" },
    ],
    []
  );

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <footer className="bg-primary text-white py-8 px-4 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/2">
            <nav aria-label="Main navigation">
              <div className="flex flex-wrap gap-4 md:gap-8 xl:gap-6">
                {navItems.map((item, index) => (
                  <a
                    href={item.path}
                    key={`nav-${index}`}
                    onClick={() => handleNavigation(item.path)}
                    className="2xl:text-[20px] xl:text-[16px] text-sm hover:underline bg-transparent border-none text-white cursor-pointer p-0"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="mt-6 md:mt-12 cursor-pointer 2xl:mt-12 2xl:w-[488px] 2xl:h-[137px] 2xl:mb-0 md:mb-6">
              <img
                onClick={() => navigate("/")}
                src={rapidLogo}
                alt="Rapid Response Couriers Logo"
                width={300}
                height={70}
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <div className="text-center md:text-right mb-6">
              <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-2">
                Delivering On Promises,
              </h2>
              <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                Powered by Precision
              </h2>
            </div>
            <div className="relative w-full max-w-sm md:max-w-xs xl:max-w-xs 2xl:max-w-md">
              <Input
                type="text"
                placeholder="Enter your email"
                className="flex-grow bg-white w-full py-3 h-14"
                aria-label="Enter your email"
              />
              <Button
                className="absolute top-1/2 right-2 -translate-y-1/2 h-10 md:h-12 px-6"
                aria-label="Track shipment"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <address className="md:col-span-3 font-400 text-center md:text-start not-italic">
            <h3 className="font-semibold mb-3 2xl:text-[32px]">Contact info</h3>
            <a
              href="mailto:helloworld@rapidresponsecourier.com"
              className="mb-1 2xl:text-[20px] hover:underline block"
            >
              info@rrcourires.co.uk
            </a>
            <a
              href="tel:+9710000000000"
              className="mb-1 2xl:text-[20px] hover:underline block"
            >
              +443301335997
            </a>
          </address>

          <nav
            className="md:mt-[4rem] md:col-span-5 flex flex-wrap justify-center gap-4 whitespace-nowrap"
            aria-label="Support navigation"
          >
            {supportItems.map((item, index) => (
              <button
                key={`support-${index}`}
                onClick={() => handleNavigation(item.path)}
                className="2xl:text-[20px] text-sm hover:underline bg-transparent border-none text-white cursor-pointer p-0"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:col-span-4 2xl:text-[20px] text-center md:text-end">
            <h3 className="mb-3">Powered By</h3>
            <p className="mb-1 text-sm">
              CacheLogic - Fast Track Your IT Evolution
            </p>
            <h4>Company Number</h4>
            <a
              href="tel:+9710000000000"
              className="mb-1 text-sm hover:underline block"
            >
              +16521183
            </a>
            <p className="mb-1 text-sm">
              {new Date().getFullYear()} © all rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
