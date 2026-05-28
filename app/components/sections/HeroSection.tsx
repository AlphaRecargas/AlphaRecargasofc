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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0e27] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0a0e27] to-cyan-900/30" />

      {/* LUZES DE FUNDO */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans leading-tight"
        >
          Ganhe dinheiro com{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            recargas
          </span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-zinc-400 text-lg md:text-xl mb-6 font-sans max-w-2xl mx-auto"
        >
          Plataforma simples, rápida e altamente lucrativa para o seu negócio.
        </motion.p>

        <AnimatedCounter />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {/* BOTÃO PRINCIPAL COM BRILHO */}
          <div className="relative group w-full sm:w-auto">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none" />
            <Button 
              variant="gradient" 
              size="lg" 
              className="w-full sm:w-auto font-sans font-medium transition-all transform hover:scale-[1.02]"
              onClick={() => scrollToSection('planos')}
            >
              Começar agora
            </Button>
          </div>

          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto font-sans font-medium border-white/20 text
          
