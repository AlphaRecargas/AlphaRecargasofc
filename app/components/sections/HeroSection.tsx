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
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#1a1f3a] overflow-hidden pt-20 pb-10">
      {/* Animated background blobs */}
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,174,255,0.15),transparent_50%),radial-gradient(circle_at_bottom,_rgba(0,255,136,0.1),transparent_40%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        {/* Trust badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="glass px-4 py-2 rounded-full text-sm font-medium text-cyan-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Plataforma ativa 24/7
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
            Ganhe dinheiro
          </span>
          <br />
          <span className="text-white">vendendo recargas na sua loja</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-300 text-center mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Transforme sua loja em um ponto de recargas com sistema rápido, suporte via WhatsApp e{' '}
          <span className="text-green-400 font-semibold">comissão em cada venda</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.button
            onClick={() => setShowContacts(true)}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 174, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7 group-hover:animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.559.897-2.813 2.379-3.6 4.114-.852 1.922-1.263 4.057-1.263 6.219 0 .828.034 1.641.102 2.441L1.75 23.128l2.285-.764c1.312.742 2.786 1.133 4.342 1.133 5.369 0 9.75-4.353 9.75-9.687 0-2.591-.991-5.026-2.793-6.841-1.801-1.816-4.2-2.817-6.72-2.817z" />
            </svg>
            Fale conosco no WhatsApp
          </motion.button>
        </motion.div>

        {/* Contact Selection Modal */}
        <AnimatePresence>
          {showContacts && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowContacts(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1535] border border-cyan-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Escolha um atendente</h3>
                  <p className="text-zinc-400 text-sm">Clique para iniciar a conversa no WhatsApp</p>
                </div>

                <div className="space-y-3">
                  {contatos.map((contato, index) => (
                    <motion.a
                      key={contato.numero}
                      href={`https://wa.me/${contato.numero}?text=${mensagemWhatsApp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(`https://wa.me/${contato.numero}?text=${mensagemWhatsApp}`, '_blank')
                      }}
                    >
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 group">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {contato.nome}
                          </h4>
                          <p className="text-sm text-zinc-400">{contato.descricao}</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <button
                  onClick={() => setShowContacts(false)}
                  className="mt-6 w-full py-3 text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Cancelar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-6 mb-8 max-w-2xl mx-auto"
        >
          {[
            { label: 'Parceiros Ativos', value: '100+' },
            { label: 'Recargas Diárias', value: '1k+' },
            { label: 'Suporte 24/7', value: 'Online' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-lg p-4 text-center border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-zinc-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
