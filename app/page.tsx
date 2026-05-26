'use client'
import { LogoAlpha } from '@/components/logo-alpha'
import { HeroSection } from './components/sections/HeroSection'
import { BenefitsSection } from './components/sections/BenefitsSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { TrustSection } from './components/sections/TrustSection'
import { FAQSection } from './components/sections/FAQSection'
import { Footer } from './components/sections/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TrustSection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

