import logoImg from "/src/assets/Vector.png";
import { FaArrowRight } from "react-icons/fa";
export default function Navbar() {
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
    ]
    return (
          <div className="max-w-screen-xl mx-auto px-12 py-3 flex justify-between items-center">
            <div className="w-[14rem] h-[4rem]">
                <img src={logoImg} alt="logo-img" />
            </div>
            <div className='flex space-x-6 text-center font-sans text-[1.2rem] text-[ #333333]'>
                {navItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <span>{item.label}</span>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className="bg-[#4B9795] text-white p-4 flex gap-2 text-center items-center rounded-md">
                 <button className="">Call Now</button>
            <FaArrowRight className="mt-1"/>
            </div>
        </div>
    )
}
