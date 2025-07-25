import React from 'react'
import Hero from '@/components/sections/Hero'
import Service from '@/components/sections/Service'
import WhyChoose from '@/components/sections/WhyChoose'
import Purpose from '@/components/sections/Purpose'
import Feedback from '@/components/sections/Feedback'
import SustainabilityFeatures from '@/components/sections/SustainabilityFeatures'
import CourierPartners from '@/components/sections/CourierPartners'
import NewsAndArticles from '../components/sections/NewsAndArticles'
import TrackShipment from '../components/sections/TrackShipment'
import Contact from '../components/sections/Contact';

export default function LandingPage() {
  return (
    <>
    <Hero/>
    <Service/>
    <WhyChoose/>
    <Purpose/>
    <Feedback/>
    <SustainabilityFeatures/>
    <CourierPartners />
    <NewsAndArticles />
    <TrackShipment />
    <Contact />
    </>
  )
}
