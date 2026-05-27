'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-white font-bold text-xl">
          Alpha Recargas
        </h1>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#" className="hover:text-white transition">
            Início
          </a>
          <a href="#planos" className="hover:text-white transition">
            Planos
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="gradient" size="sm">
            Começar
          </Button>
        </div>

      </div>
    </motion.header>
  )
}
