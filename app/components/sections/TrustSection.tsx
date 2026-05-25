'use client'

import { motion } from 'framer-motion'

const trustItems = [
  { label: 'Parceiros Ativos', value: '100+', icon: '👥' },
  { label: 'Recargas Processadas', value: '1k+', icon: '📊' },
  { label: 'Tempo Médio', value: '< 15 minutos', icon: '⚡' },
  { label: 'Uptime', value: '99.9%', icon: '✅' },
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-green-500/5 rounded-full blur-3xl -top-20 right-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Por que confiar na Alpha Recargas
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">Números que falam por si só</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-4 md:p-6 rounded-xl border border-cyan-500/20 text-center group cursor-pointer hover:border-cyan-500/50 transition-all"
            >
              <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-zinc-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two columns: Status and Operators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-8 rounded-2xl border border-cyan-500/20"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Status do Sistema</h3>
            <div className="space-y-4">
              {statusItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={item.status === 'online' ? { boxShadow: ['0 0 0 0 rgba(0, 255, 136, 0.7)', '0 0 0 10px rgba(0, 255, 136, 0)'] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-green-400"
                  />
                  <span className="text-white font-medium">{item.label}</span>
                  <span className="text-green-400 text-sm ml-auto">Online</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Operators */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-8 rounded-2xl border border-cyan-500/20"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Operadoras Integradas</h3>
            <div className="space-y-4">
              {operators.map((operator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all cursor-pointer"
                >
                  <motion.div
                    animate={operator.status === 'online' ? { boxShadow: ['0 0 0 0 rgba(0, 255, 136, 0.7)', '0 0 0 10px rgba(0, 255, 136, 0)'] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-green-400"
                  />
                  <span className="text-white font-medium flex-1">{operator.name}</span>
                  <span className="text-green-400 text-sm">Online</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
