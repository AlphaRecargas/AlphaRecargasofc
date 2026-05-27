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
    <section className="py-24 bg-[#0a0e27] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* TÍTULO COM ANIMAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Escolha seu plano
          </h2>
          <p className="text-zinc-400">
            Comece hoje mesmo a lucrar com recargas
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border transition-all duration-300 backdrop-blur-xl ${
                plano.destaque
                  ? 'bg-gradient-to-b from-green-500/20 to-emerald-600/10 border-green-400 shadow-lg shadow-green-500/20'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >

              {/* BADGE DE DESTAQUE */}
              {plano.destaque && (
                <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-green-400/20 text-green-300 border border-green-400/30">
                  MAIS ESCOLHIDO
                </span>
              )}

              {/* NOME */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {plano.nome}
              </h3>

              {/* BENEFÍCIOS */}
              <ul className="space-y-2 mb-6">
                {plano.beneficios.map((b, i) => (
                  <li key={i} className="text-zinc-300">
                    ✔ {b}
                  </li>
                ))}
              </ul>

              {/* BOTÃO PADRÃO */}
              <Button
                variant={plano.destaque ? 'gradient' : 'secondary'}
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
