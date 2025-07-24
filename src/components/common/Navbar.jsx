import { useState } from 'react';
import logoImg from "/Vector.png";
import { IconButton } from '@/components/common/button';
import { FaArrowRight, FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItems = [
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Track Order",
            path: "/track-order"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Contact",
            path: "/contact"
        },
    ];

    return (
        <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
                <div className="w-[8rem] md:w-[14rem] md:h-[4rem]">
                    <img src={logoImg} alt="logo-img" className="w-full h-full object-contain" />
                </div>

                <div className='hidden md:flex space-x-6 text-center font-sans text-[1.2rem] text-[#333333]'>
                    {navItems.map((item, index) => (
                        <div key={index}>
                            <div>
                                <span className="hover:text-[#4B9795] transition-colors">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <IconButton icon={<FaArrowRight />}>Call Now</IconButton>
                    </div>
                    
                    <div className="md:hidden flex items-center gap-4">
                        <IconButton icon={<FaArrowRight />} className="!p-2">
                            Call Now
                        </IconButton>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#333333] focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - appears when hamburger is clicked (small screens only) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4 px-2 shadow-md rounded-lg mt-2">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.path}
                                className="text-[#333333] hover:text-[#4B9795] transition-colors py-2 px-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}