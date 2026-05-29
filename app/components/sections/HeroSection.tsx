'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-[#0a0e27] overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0a0e27] to-cyan-900/30" />

      {/* LUZES AMBIENTES */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans leading-tight"
        >
          Ganhe dinheiro com{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            recargas
          </span>
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-zinc-400 text-lg md:text-xl mb-6 font-sans max-w-2xl mx-auto"
        >
          Plataforma simples, rápida e altamente lucrative para o seu negócio expandir.
        </motion.p>

        <AnimatedCounter />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            className="w-full sm:w-auto font-sans font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 transition-all transform hover:scale-[1.02] h-11 px-8 rounded-md cursor-pointer"
            onClick={() => scrollToSection('planos')}
          >
            Começar agora
          </Button>

          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto font-sans font-medium border-white/20 text-white hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => scrollToSection('como-funciona')}
          >
            Ver como funciona
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

function AnimatedCounter() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    let start = 0
    const end = 5000
    const duration = 1200 
    const stepTime = 25
    const steps = duration / stepTime
    const increment = end / steps

    const interval = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(interval)
      }
      setValue(Math.floor(start))
    }, stepTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-green-400 text-sm md:text-base mt-4 font-sans font-semibold tracking-wide bg-green-500/5 border border-green-500/10 px-4 py-2 rounded-full inline-block select-none">
      + R$ {value.toLocaleString('pt-BR')} faturados esse mês
    </p>
  )
}

