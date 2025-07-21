import React from 'react'
import heroImg from "/src/assets/hero.png"
import heroImg2 from "/src/assets/hero2.png"
import logoImg from "/src/assets/Vector.png"

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-12 py-2 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Speed Is <span className='text-[#4B9795]'>Our Priority</span>
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className='text-[#4B9795]'>We’re Already</span> Rolling Out!
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Our team specializes in fast, reliable deliveries for urgent needs.
                        No matter the deadline, we’re already on the move to ensure your order arrives on time.
                        Trust us to handle your last-minute requests with speed and precision.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <button className="bg-[#4B9795] font-semibold text-white px-6 py-3 rounded-md">
                            Book a Delivery
                        </button>
                        <button className="bg-white font-bold text-[#4B9795] border-2 border-[#4B9795] px-6 py-3 rounded-md">
                            Instant Quote
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 relative  w-full h-[350px] sm:h-[400px] md:h-[500px]">
                    <img 
                        src={heroImg2} 
                        alt="People with boxes" 
                        className="absolute top-20 right-12 w-[50%] z-10 object-contain" 
                    />
                    
                    <div className="absolute top-32 sm:top-44 left-18 sm:left-16 md:left-56 z-20">
                        <h3 className="text-[#4B9795] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
                            ON TIME
                        </h3>
                        <h2 className="text-[#4B9795] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                            EVERY TIME
                        </h2>
                    </div>
                    
                    <img
                        src={heroImg}
                        alt="Delivery Van"
                        className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-[90%] sm:w-[85%] z-30 object-contain"
                    />
                    
                    <img
                        src={logoImg}
                        alt="Logo on Van"
                        className="absolute bottom-12 sm:bottom-20 md:bottom-44 left-[60%] transform -translate-x-1/2 w-24 sm:w-32 z-40 opacity-90"
                    />
                </div>
            </div>
        </section>
    )
}
