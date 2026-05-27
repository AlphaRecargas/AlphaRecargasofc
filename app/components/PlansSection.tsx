'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PlansSection() {
  const planos = [
    {
      nome: 'Iniciante',
      destaque: false,
      beneficios: [
        'Cadastro rápido',
        'Sistema de recargas',
        'Suporte básico',
      ],
    },
    {
      nome: 'Profissional',
      destaque: true,
      beneficios: [
        'Tudo do plano iniciante',
        'Maior comissão',
        'Suporte prioritário',
        'Treinamento completo',
      ],
    },
    {
      nome: 'Premium',
      destaque: false,
      beneficios: [
        'Tudo do profissional',
        'Atendimento dedicado',
        'Estratégias de vendas',
      ],
    },
  ]

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Escolha seu plano
          </h2>
          <p className="text-zinc-400">
            Comece hoje mesmo a lucrar com recargas
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {planos.map((plano, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                plano.destaque
                  ? 'bg-gradient-to-b from-cyan-500/20 to-blue-500/10 border-cyan-400'
                  : 'bg-white/5 border-white/10'
              }`}
            >

              {/* Nome */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {plano.nome}
              </h3>

              {/* Benefícios */}
              <ul className="space-y-2 mb-6">
                {plano.beneficios.map((b, i) => (
                  <li key={i} className="text-zinc-300">
                    ✔ {b}
                  </li>
                ))}
              </ul>

              {/* Botão PADRONIZADO */}
              <Button
                variant={plano.destaque ? 'default' : 'secondary'}
                size="lg"
                className="w-full"
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
