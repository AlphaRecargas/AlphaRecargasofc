'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0e27] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0a0e27] to-cyan-900/30" />

      {/* LUZES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
      />

      {/* CONTEÚDO */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >

        {/* TÍTULO */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Ganhe dinheiro com{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            recargas
          </span>{' '}
          todos os dias
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-zinc-400 text-lg mb-6"
        >
          Plataforma simples, rápida e lucrativa para você vender recargas
        </motion.p>

        {/* CONTADOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <AnimatedCounter />
        </motion.div>

        {/* BOTÕES */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* BOTÃO COM BRILHO */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />
            
            <Button size="lg" variant="gradient" className="relative z-10">
              Começar agora
            </Button>
          </div>

          <Button size="lg" variant="outline">
            Ver como funciona
          </Button>
        </motion.div>

      </motion.div>

      {/* SCROLL CLICK */}
      <motion.div
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>

    </section>
  )
}

/* CONTADOR */
function AnimatedCounter() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    let start = 0
    const end = 5000
    const duration = 2000
    const increment = end / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(counter)
      }
      setValue(Math.floor(start))
    }, 16)

    return () => clearInterval(counter)
  }, [])

  return (
    <p className="text-green-400 text-xl font-semibold">
      + R$ {value.toLocaleString()} já faturados por usuários
    </p>
  )
}
