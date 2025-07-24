import React from 'react'
import heroImg from "/hero/hero.png"
import heroImg2 from "/hero/hero2.png"
import logoImg from "/Vector.png"
import { PrimaryButton } from "@/components/common/button"
import { OutlineButton } from "@/components/common/button"

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Speed Is <span className='text-[#4B9795]'>Our Priority</span>
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className='text-[#4B9795]'>We're Already</span> Rolling Out!
                    </h2>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base">
                        Our team specializes in fast, reliable deliveries for urgent needs.
                        No matter the deadline, we're already on the move to ensure your order arrives on time.
                        Trust us to handle your last-minute requests with speed and precision.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <PrimaryButton className="w-full sm:w-auto">Book a Delivery</PrimaryButton>
                        <OutlineButton className="w-full sm:w-auto">Instant Quote</OutlineButton>
                    </div>
                </div>

                <div className="md:w-1/2 w-full relative h-[320px] sm:h-[400px] md:h-[500px] mb-8 md:mb-0">
                    <img
                        src={heroImg2}
                        alt="People with boxes"
                        className="absolute top-8 md:top-32  right-4 sm:right-8 md:right-12 w-[50%] z-10 object-contain"
                    />

                    <div className="absolute top-20 md:top-52 left-32 sm:left-46 md:left-36 z-20">
                        <h3 className="text-[#4B9795] font-bold text-xl sm:text-2xl md:text-4xl leading-tight">
                            ON TIME
                        </h3>
                        <h2 className="text-[#4B9795] font-bold text-2xl sm:text-3xl md:text-5xl leading-tight">
                            EVERY TIME
                        </h2>
                    </div>

                    <img
                        src={heroImg}
                        alt="Delivery Van"
                        className="absolute bottom-12 md:bottom-10 right-0 sm:right-4 w-full sm:w-[90%] md:w-[85%] z-30 object-contain"
                    />

                    <div className="absolute bottom-36 sm:bottom-20 md:bottom-40 left-48 md:left-[60%] transform -translate-x-1/2 z-40">
                        <img
                            src={logoImg}
                            alt="Logo on Van"
                            className="w-16 sm:w-24  md:w-32 opacity-90"
                            style={{
                                position: 'relative',
                                left: '50%',
                                transform: 'translateX(-50%)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}