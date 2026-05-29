'use client'

import { motion } from 'framer-motion'

const trustItems = [
  { label: 'Parceiros Ativos', value: '100+', icon: '👥' },
  { label: 'Recargas Processadas', value: '1k+', icon: '📊' },
  { label: 'Tempo Médio', value: '< 15 minutos', icon: '⚡' },
  { label: 'Estabilidade Garantida', value: '99.9%', icon: '✅' },
]

const operators = [
  { name: 'Vivo', status: 'online' },
  { name: 'Claro', status: 'online' },
  { name: 'TIM', status: 'online' },
]

const statusItems = [
  { label: 'Sistema online', status: 'online' },
  { label: 'Atendimento ativo', status: 'online' },
  { label: 'Plataforma operacional', status: 'online' },
]

export function TrustSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-[#1a1f3a] via-[#0f1535] to-[#0a0e27] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-green-500/5 rounded-full blur-3xl -top-20 right-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-cyan-500/20 transition-all"
            >
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <span className="text-3xl font-extrabold text-cyan-400 font-sans block">{item.value}</span>
              <h4 className="text-zinc-400 text-xs mt-2 font-sans font-medium">{item.label}</h4>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <h3 className="text-xl font-bold text-white mb-6 font-sans">Operadoras Integradas</h3>
            <div className="space-y-4">
              {operators.map((operator, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all cursor-pointer">
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-white font-medium flex-1 font-sans text-sm">{operator.name}</span>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full font-sans">Disponível</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <h3 className="text-xl font-bold text-white mb-6 font-sans">Status da Rede</h3>
            <div className="space-y-4">
              {statusItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-zinc-300 text-sm font-sans flex-1">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

