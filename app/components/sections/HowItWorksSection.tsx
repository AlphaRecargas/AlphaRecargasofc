'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Entre em contato pelo WhatsApp',
    description: 'Clique no botão "fale conosco" para iniciar sua parceria',
    icon: '💬',
  },
  {
    number: 2,
    title: 'Receba acesso ao sistema',
    description: 'Após aprovação, você recebe acesso completo à plataforma',
    icon: '🔓',
  },
  {
    number: 3,
    title: 'Faça recargas para seus clientes',
    description: 'Use a plataforma para processar recargas de forma segura e rápida',
    icon: '📱',
  },
  {
    number: 4,
    title: 'Ganhe comissão em cada venda',
    description: 'Receba sua comissão automaticamente para sua conta',
    icon: '💵',
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#1a1f3a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,174,255,0.1),transparent_70%)]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
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
              Como funciona
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">4 passos simples para começar a ganhar</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 md:p-8 rounded-2xl border border-cyan-500/30 h-full flex flex-col items-center text-center group cursor-pointer hover:border-cyan-500/60 transition-all duration-300"
              >
                {/* Number circle */}
                <motion.div
                  animate={{ boxShadow: ['0 0 20px rgba(0, 174, 255, 0.4)', '0 0 40px rgba(0, 174, 255, 0.6)', '0 0 20px rgba(0, 174, 255, 0.4)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all"
                >
                  <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {step.description}
                </p>
              </motion.div>

              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute top-24 -right-2 w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
