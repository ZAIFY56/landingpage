import rapidLogo from "/footer/Vector.png";
import Input from "@/components/common/Input";
import { PrimaryButton } from "@/components/common/button";

const Footer = () => {
    const items = [
        {label: "Services"},
        {label: "Track Order"},
        {label: "About"},
        {label: "Contact"}
    ];
    const SupportItems = [
        {label: "Fraud Awareness"},
        {label: "Legal Notice"},
        {label: "Terms of Use"},
        {label: "Privacy Notice"}
    ];
    
    return (
        <footer className="bg-[#4B9795] text-white py-8 px-4 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="md:w-1/2">
                        <div className="flex flex-wrap gap-4">
                            {items.map((item, index) => (
                                <div key={index} className=" md:text-lg">
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 mb-6">
                            <img 
                                src={rapidLogo}
                                alt="Rapid Response Couriers"
                                width={300}
                                height={70}
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 flex flex-col items-center md:items-end">
                        <div className="text-center md:text-right mb-6">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Delivering On Promises,</h2>
                            <h2 className="text-2xl md:text-3xl font-semibold">Powered by Precision</h2>
                        </div>
                        <div className="flex w-22 md:w-3/4">
                            <Input
                                type="text"
                                placeholder="Enter your email"
                                className="flex-grow !bg-white rounded-r-none"
                            />
                            <PrimaryButton className="rounded-l-none border-2">
                                Subscribe
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-3 text-center md:text-start">
                        <h3 className="font-bold mb-3">Contact info</h3>
                        <p className="mb-1">helloworld@rapidresponsecourier.com</p>
                        <p className="mb-1">+971 000 0000 0000</p>
                    </div>
                    
                    <div className="md:mt-[4rem]  md:col-span-5 flex flex-wrap justify-center gap-4 whitespace-nowrap">
                        {SupportItems.map((SupportItem, index) => (
                            <div key={index} className="text-sm">
                                <span>{SupportItem.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="md:col-span-4 text-center md:text-end">
                        <h3 className="mb-3">Powered By</h3>
                        <p className="mb-1 text-sm">CacheLogic - Fast Track Your IT Evolution</p>
                        <p className="mb-1 text-sm">{new Date().getFullYear()} © all rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;