'use client'

import React from 'react'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { PlansSection } from './components/PlansSection'
import { BenefitsSection } from './components/sections/BenefitsSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { TrustSection } from './components/sections/TrustSection'
import { FAQSection } from './components/sections/FAQSection'
import { Footer } from './components/sections/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white">
      {Navbar && <Navbar />}
      {HeroSection && <HeroSection />}
      {PlansSection && <PlansSection />}
      {BenefitsSection && <BenefitsSection />}
      {HowItWorksSection && <HowItWorksSection />}
      {TrustSection && <TrustSection />}
      {FAQSection && <FAQSection />}
      {Footer && <Footer />}
      {FloatingWhatsApp && <FloatingWhatsApp />}
    </main>
  )
}
