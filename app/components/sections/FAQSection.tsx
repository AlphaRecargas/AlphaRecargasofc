'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Como funciona a parceria?',
    answer:
      'Você entra em contato conosco, recebe acesso ao sistema e começa a vender recargas.',
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer:
      'Não existe mensalidade ou taxa de entrada.',
  },
  {
    question: 'Como recebo minha comissão?',
    answer:
      'Seu lucro é calculado automaticamente em cada venda.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 bg-[#0a0e27]"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl text-white text-center mb-12">
          Perguntas frequentes
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-5 text-white flex justify-between"
              >
                {faq.question}
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-zinc-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>
      </div>
    </motion.section>
  )
}
