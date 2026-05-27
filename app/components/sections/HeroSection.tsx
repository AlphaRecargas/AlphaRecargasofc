'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function HeroSection() {
  const [showContacts, setShowContacts] = useState(false)

  const contatos = [
    {
      nome: 'Vinicius',
      numero: '5511987901884',
      descricao: 'Atendimento Comercial',
    },
    {
      nome: 'Robson',
      numero: '5511966061655',
      descricao: 'Suporte e Vendas',
    },
  ]

  const mensagemWhatsApp = encodeURIComponent(
    'Olá! Escaneei o QR Code do panfleto e tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?'
  )

  const handleWhatsAppClick = (numero: string) => {
    window.open(`https://wa.me/${numero}?text=${mensagemWhatsApp}`, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-bold text-lg bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Alpha Recargas
          </h1>

          <div className="flex gap-6 text-sm text-zinc-300">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Benefícios</a>
            <a href="#" className="hover:text-white transition">Contato</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#1a1f3a] overflow-hidden pt-40 pb-4">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, -50, 0], y: [0, 100, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 left-0"
          />
          <motion.div
            animate={{ x: [0, -50, 50, 0], y: [0, -100, 100, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 2 }}
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0"
          />
        </div>

        {/* CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto px-6"
        >

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-center mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ganhe dinheiro
            </span>
            <br />
            <span className="text-white">vendendo recargas</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex justify-center">
            <button
              onClick={() => setShowContacts(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl"
            >
              Fale no WhatsApp
            </button>
          </motion.div>

        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {showContacts && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center"
              onClick={() => setShowContacts(false)}
            >
              <div className="bg-black p-6 rounded-xl">
                {contatos.map((c) => (
                  <button
                    key={c.numero}
                    onClick={() => handleWhatsAppClick(c.numero)}
                    className="block text-white mb-2"
                  >
                    {c.nome}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </>
  )
}
