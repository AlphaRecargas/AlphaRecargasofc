'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Como funciona a parceria?',
    answer: 'Você entra em contato conosco, recebe acesso completo ao sistema e começa a emitir e vender recargas imediatamente.',
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer: 'Não! Não cobramos qualquer tipo de mensalidade, anuidade ou taxa oculta de entrada.',
  },
  {
    question: 'Como recebo minha comissão?',
    answer: 'Seu lucro é calculado e adicionado de forma automatizada e transparente no momento exato de cada venda realizada.',
  },
  {
    question: 'Quais operadoras e serviços estão disponíveis no aplicativo?',
    answer: 'O sistema conta com todas as principais operadoras de telefonia do Brasil (Vivo, Tim, Claro).',
  },
  {
    question: 'O saldo adicionado expira se eu não vender no mesmo mês?',
    answer: 'Não! O saldo adicionado via PIX não possui prazo de validade, dando total liberdade para você vender no ritmo do seu estabelecimento comercial.',
  }
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-[#0a0e27] scroll-mt-16 relative z-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl text-white text-center mb-12 font-sans font-bold">
          Perguntas frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.01] hover:border-cyan-500/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-5 text-white flex justify-between items-center font-sans font-medium hover:bg-white/[0.02] transition-colors cursor-pointer select-none"
              >
                <span className="pr-4 text-sm md:text-base">{faq.question}</span>
                <span className={`text-cyan-400 transition-transform duration-300 text-xs shrink-0 ${open === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-zinc-300 font-sans text-xs md:text-sm leading-relaxed border-t border-white/[0.03] pt-3 bg-black/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

