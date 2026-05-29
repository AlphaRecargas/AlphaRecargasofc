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
    <section 
      id="como-funciona" 
      className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#1a1f3a] overflow-hidden scroll-mt-20"
    >
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
          className="text

