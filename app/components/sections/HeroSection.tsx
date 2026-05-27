'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0e27] overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0a0e27] to-cyan-900/30" />

      {/* LUZES */}
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
          className="text-4xl md:text-6xl font-bold text-white mb-6"
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
          className="text-zinc-400 text-lg mb-6"
        >
          Plataforma simples, rápida e lucrativa
        </motion.p>

        <AnimatedCounter />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          {/* BOTÃO COM BRILHO */}
          <div className="relative group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md translate-x-[-100%] group-hover:translate-x-[100%]" />

            <Button variant="gradient" size="lg" className="relative z-10">
              Começar agora
            </Button>
          </div>

          <Button variant="outline" size="lg">
            Ver como funciona
          </Button>

        </div>

      </motion.div>

      {/* SCROLL */}
      <motion.div
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
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

    const interval = setInterval(() => {
      start += 100
      if (start >= end) {
        start = end
        clearInterval(interval)
      }
      setValue(start)
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-green-400 text-xl mt-4">
      + R$ {value.toLocaleString()} faturados
    </p>
  )
}
