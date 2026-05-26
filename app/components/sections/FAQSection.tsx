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

  const abrirWhatsApp = (numero: string, mensagem: string) => {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
    setMostrarNumeros(false)
  }

  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-[#0f1535] via-[#1a1f3a] to-[#0a0e27] overflow-hidden">
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
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-xl border border-cyan-500/20 overflow-hidden"
            >
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox
