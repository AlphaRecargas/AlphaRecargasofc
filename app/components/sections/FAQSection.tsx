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

// ========================================
// CONFIGURE SEUS NÚMEROS AQUI
// ========================================
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
// ========================================

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [mostrarNumeros, setMostrarNumeros] = useState(false)

  const abrirWhatsApp = (numero: string, mensagem: string) => {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
    setMostrarNumeros(false)
  }

  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-[#0f1535] via-[#1a1f3a] to-[#0a0e27] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -bottom-40 left-1/4" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
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
              Perguntas frequentes
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">Tudo que você precisa saber</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-xl border border-cyan-500/20 overflow-hidden"
            >
              {/* Question */}
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between hover:bg-cyan-500/5 transition-colors text-left group"
              >
                <span className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-cyan-400 flex-shrink-0 ml-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-cyan-500/10"
                  >
                    <p className="px-6 md:px-8 py-4 md:py-5 text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA com popup de números */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center relative"
        >
          <p className="text-zinc-400 mb-6">Ainda tem dúvidas?</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMostrarNumeros(!mostrarNumeros)}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg transition-all duration-300"
          >
            Converse com nosso time
          </motion.button>

          {/* Popup com os números */}
          <AnimatePresence>
            {mostrarNumeros && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#1a1f3a] border border-cyan-500/30 rounded-xl shadow-2xl overflow-hidden z-50"
              >
                <div className="p-4 border-b border-cyan-500/20">
                  <p className="text-sm text-zinc-400">Escolha um número:</p>
                </div>
                {numerosWhatsApp.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => abrirWhatsApp(item.numero, item.mensagem)}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-cyan-500/10 transition-colors text-left"
                  >
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div>
                      <p className="text-white font-medium">{item.nome}</p>
                      <p className="text-xs text-zinc-400">
                        ({item.numero.slice(2, 4)}) {item.numero.slice(4, 9)}-{item.numero.slice(9)}
                      </p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Overlay para fechar o popup ao clicar fora */}
      {mostrarNumeros && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setMostrarNumeros(false)}
        />
      )}
    </section>
  )
}
