'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PlansSection() {
  const planos = [
    { nome: 'Iniciante', destaque: false },
    { nome: 'Profissional', destaque: true },
    { nome: 'Premium', destaque: false },
  ]

  // Adicione a URL do seu contato/WhatsApp aqui
  const LINK_WHATSAPP = "https://wa.me/seu-numero-aqui" 

  return (
    <motion.section
      id="planos"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 bg-[#0a0e27]"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl text-white text-center mb-16 font-sans">
          Escolha seu plano
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
              className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                plano.destaque
                  ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,0.15)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

              <h3 className="text-white text-2xl mb-4 font-sans font-semibold">
                {plano.nome}
              </h3>

              <div className="mt-6">
                <Button
                  variant={plano.destaque ? 'default' : 'secondary'}
                  className="w-full font-sans font-medium transition-transform"
                  onClick={() => window.open(LINK_WHATSAPP, '_blank', 'noopener,noreferrer')}
                >
                  Começar agora
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

