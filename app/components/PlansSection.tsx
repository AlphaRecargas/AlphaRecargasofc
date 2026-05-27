'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PlansSection() {
  const planos = [
    { nome: 'Iniciante', destaque: false },
    { nome: 'Profissional', destaque: true },
    { nome: 'Premium', destaque: false },
  ]

  return (
    <section className="py-24 bg-[#0a0e27]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-white text-center mb-16">
          Escolha seu plano
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {planos.map((plano, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateX: 5,
                rotateY: -5,
              }}
              className={`relative overflow-hidden p-6 rounded-2xl border ${
                plano.destaque
                  ? 'border-green-400 bg-green-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >

              {/* BRILHO */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <h3 className="text-white text-2xl mb-4">
                {plano.nome}
              </h3>

              <Button
                variant={plano.destaque ? 'gradient' : 'secondary'}
                className="w-full mt-6"
              >
                Começar agora
              </Button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
