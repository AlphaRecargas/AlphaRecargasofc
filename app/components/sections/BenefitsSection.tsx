'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '💰',
    title: 'Comissão em cada recarga',
    description: 'Ganhe uma porcentagem em cada recargelizada pelo sistema de seus clientes',
  },
  {
    icon: '⚡',
    title: 'Sistema rápido e simples',
    description: 'Recargas processadas em segundos com interface intuitiva e fácil de usar',
  },
  {
    icon: '💬',
    title: 'Atendimento via WhatsApp',
    description: 'Suporte disponível 24/7 direto pelo WhatsApp para resolver suas dúvidas',
  },
  {
    icon: '🚀',
    title: 'Recargas instantâneas',
    description: 'Tecnologia de ponta que garante recargas instantâneas para seus clientes',
  },
  {
    icon: '🛡️',
    title: 'Plataforma moderna',
    description: 'Sistema seguro, confiável e totalmente automatizado para sua tranquilidade',
  },
  {
    icon: '👨‍💼',
    title: 'Suporte rápido e eficiente',
    description: 'Equipe especializada pronta para ajudá-lo a maximizar seus ganhos',
  },
]

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-[#0f1535] via-[#1a1f3a] to-[#0a0e27] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-green-500/5 rounded-full blur-3xl -top-40 -right-40" />
        <div className="absolute w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -bottom-40 -left-40" />
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
              Benefícios exclusivos
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">Tudo que você precisa para começar a ganhar</p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 174, 255, 0.15)' }}
                className="glass-hover h-full p-6 md:p-8 rounded-2xl border border-cyan-500/20 group cursor-pointer"
              >
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {benefit.description}
                </p>

                {/* Glow line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
