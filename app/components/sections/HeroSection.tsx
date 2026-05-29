'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToSection = (id: string) => {
    let element = document.getElementById(id)
    
    if (!element && id === 'como-funciona') {
      element = document.getElementById('beneficios') || document.getElementById('planos')
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-auto pt-32 pb-12 md:pt-40 md:pb-16 flex flex-col items-center justify-center bg-[#0a0e27] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0a0e27] to-cyan-900/30" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center"
      >
        <span className="px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6 backdrop-blur-sm tracking-wide uppercase">
          Plataforma de recargas premium
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
          <span>Sua loja lucrando com </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            recargas celulares
          </span>
        </h1>

        <p className="text-zinc-400 text-base md:text-xl max-w-2xl mb-10 font-sans leading-relaxed">
          Transforme o seu comércio num ponto de recargas oficial. Atendimento rápido, comissões instantâneas e suporte 24/7.
        </p>

        <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
          <AnimatedCounter />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-30">
          <Button
            size="lg"
            variant="gradient"
            className="w-full sm:w-auto text-base font-bold px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection('planos')}
          >
            <span>Seja um parceiro</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base font-semibold px-8 py-6 rounded-xl border-white/10 hover:bg-white/5 text-white hover:text-white transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection('como-funciona')}
          >
            <span>Ver como funciona</span>
          </Button>
        </div>
      </motion.div>

      <motion.div
        onClick={() => scrollToSection('planos')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 hover:border-cyan-400 transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
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
    <p className="text-green-400 font-bold tracking-wide text-sm md:text-base flex items-center gap-2">
      <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span>Mais de </span>
      <span className="text-white text-lg font-black">{value.toLocaleString()}+</span>
      <span> recargas processadas deste mês!</span>
    </p>
  )
}

