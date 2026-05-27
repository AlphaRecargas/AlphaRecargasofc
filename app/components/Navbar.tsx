'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { LogoAlpha } from '@/components/logo-alpha'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { name: 'Início', href: '#' },
  { name: 'Planos', href: '#planos' },
  { name: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#')

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      setScrolled(current > 50)

      if (current > lastScroll && current > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScroll(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  // SCROLL SPY
  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  const handleClick = (href: string) => {
    setMenuOpen(false)

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? 'bg-[#0a0e27]/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => handleClick('#')}
        >
          <LogoAlpha />
        </motion.div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="relative text-zinc-400 hover:text-white transition"
            >
              {link.name}

              {active === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400"
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="gradient" size="sm">
            Começar
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0a0e27]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-zinc-300 hover:text-white text-lg"
                >
                  {link.name}
                </button>
              ))}

              <ThemeToggle />

              <Button variant="gradient">
                Começar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
