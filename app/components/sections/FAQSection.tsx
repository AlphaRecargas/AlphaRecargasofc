'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Como funciona a parceria?',
    answer: 'Você entra em contato conosco, recebe acesso ao sistema, e passa a vender recargas para seus clientes. Ganhe comissão em cada venda sem investimento inicial.',
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer: 'Não! Não há mensalidade, taxa de inscrição ou custos adicional. Você tem acesso ao site totalmente gratuito e sua unica mensalidade será deixar o banner que iremos te entregar após a conclusão da parceria na sua loja para divulgar nossa empresa.',
  },
  {
    question: 'Como recebo minha comissão?',
    answer: 'Sua comissão é calculada automaticamente pela nossa equipe e seu lucro você recebe durante sua venda.',
  },
  {
    question: 'As recargas caem na hora?',
    answer: 'Sim! As recargas são processadas em tempo real. Seus clientes recebem a recarga em poucos minutos após o pagamento.',
  },
  {
    question: 'Vocês têm suporte?',
    answer: 'Claro! Temos suporte 24/7 via WhatsApp. Nossa equipe está sempre pronta para ajudá-lo com qualquer dúvida ou problema.',
  },
  {
    question: 'Como faço para começar?',
    answer: 'Clique no botão WhatsApp abaixo, entre em contato com nossa equipe e inicie sua parceria em poucos minutos!',
  },
]

const numerosWhatsApp = [
  {
    nome: "Vinicius",
    numero: "5511987901884",
    mensagem: "Olá! Escaneei o QR Code do panfleto e tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?",
  },
  {
    nome: "Robson",
    numero: "5511966061655",
    mensagem: "Olá! Escaneei o QR Code do panfleto e tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [mostrarNumeros, setMostrarNumeros] = useState(false)

  return (
    <section id="faq" className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-[#0f1535] via-[#1a1f3a] to-[#0a0e27] overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -bottom-40 left-1/4" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Perguntas frequentes
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">Tudo que você precisa saber</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl border border-cyan-500/20 overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between text-left"
              >
                <span className="text-white">{faq.question}</span>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                  >
                    <p className="px-6 pb-4 text-zinc-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
