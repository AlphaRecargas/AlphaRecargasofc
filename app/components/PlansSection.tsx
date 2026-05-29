'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PlansSection() {
  const [showModal, setShowModal] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState('')

  const niveis = [
    { 
      nome: 'Iniciante', 
      meta: '0 a 50',
      subtitulo: 'recargas no mês',
      badge: 'Nível 1',
      beneficios: ['Acesso completo ao Site e App', 'Suporte especializado 24h', 'Taxa de lucro padrão'],
      destaque: false 
    },
    { 
      nome: 'Profissional', 
      meta: '51 a 100',
      subtitulo: 'recargas no mês',
      badge: 'Nível 2 • Recomendado',
      beneficios: ['Acesso completo ao Site e App', 'Suporte especializado 24h', 'Cartaz personalizado com a logo Alpha', 'Brindes exclusivos para dar aos clientes', 'Taxa de lucro aumentada 📈'],
      destaque: true 
    },
    { 
      nome: 'Premium', 
      meta: '100+',
      subtitulo: 'recargas no mês',
      badge: 'Nível Máximo',
      beneficios: ['Acesso completo ao Site e App', 'Suporte especializado 24h', 'Cartaz personalizado com a logo Alpha', 'Brindes exclusivos para dar aos clientes', 'Brindes especiais de conquista para o colaborador 🎁', 'Divulgação da sua loja nas redes sociais da Alpha ⭐', 'Taxa MÁXIMA de lucro de parceiro 🚀'],
      destaque: false 
    },
  ]

  const openContact = (nivel: string) => {
    setSelectedLevel(nivel)
    setShowModal(true)
  }

  return (
    <section id="planos" className="py-24 bg-[#0a0e27] relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl text-white text-center mb-4 font-sans font-bold">Cresça com a Alpha Recargas</h2>
        <p className="text-center text-zinc-400 mb-16 max-w-md mx-auto font-sans text-sm">Aumente o seu volume mensal de vendas, suba de nível e garanta prêmios e taxas de lucros maiores.</p>

        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">
          {niveis.map((nivel, index) => (
            <div
              key={index}
              className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                nivel.destaque ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.15)] md:scale-105 z-10' : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex-grow">
                <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full inline-block mb-4 ${nivel.destaque ? 'bg-cyan-400 text-black' : 'bg-cyan-400/10 text-cyan-400'}`}>{nivel.badge}</span>
                <h3 className="text-white text-2xl font-sans font-bold mb-2">{nivel.nome}</h3>
                <div className="flex flex-col text-white mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-wider font-semibold">Meta do Nível</span>
                  <div className="flex items-baseline gap-1 mt-1 flex-wrap">
                    <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-cyan-400">{nivel.meta}</span>
                    <span className="text-xs text-zinc-300 font-sans">{nivel.subtitulo}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {nivel.beneficios.map((beneficio, bIndex) => (
                    <li key={bIndex} className="text-zinc-300 font-sans text-xs md:text-sm flex items-start gap-2">
                      <span className="text-cyan-400 text-xs shrink-0 mt-0.5">✓</span>
                      <span className="leading-tight">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4">
                <Button
                  variant={nivel.destaque ? 'default' : 'secondary'}
                  className="w-full font-sans font-semibold transition-all hover:brightness-110 cursor-pointer"
                  onClick={() => openContact(nivel.nome)}
                >
                  Fazer parte da equipe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHATSAPP MODAL PARA ESCOLHA DE PLANO */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#111636] border border-cyan-500/20 rounded-2xl w-full max-w-sm p-6 relative z-10 shadow-2xl">
              <h3 className="text-lg font-bold text-white font-sans text-center mb-1">Entrar como {selectedLevel}</h3>
              <p className="text-zinc-400 text-xs font-sans text-center mb-6">Selecione o atendente disponível para configurar sua comissão:</p>
              
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/5511966061655?text=${encodeURIComponent(`Olá Robson! Quero fazer parte da equipe e ativar meu plano no nível: ${selectedLevel}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between bg-white/5 hover:bg-cyan-500/10 p-4 rounded-xl border border-white/5 transition-all"
                >
                  <div className="font-sans text-left"><p className="text-white text-sm font-semibold">Atendimento com Robson</p><p className="text-zinc-400 text-xs">Ativação de Conta imediata</p></div>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </a>
                
                <a 
                  href={`https://wa.me/5511987901884?text=${encodeURIComponent(`Olá Vinicius! Quero fazer parte da equipe e ativar meu plano no nível: ${selectedLevel}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between bg-white/5 hover:bg-blue-500/10 p-4 rounded-xl border border-white/5 transition-all"
                >
                  <div className="font-sans text-left"><p className="text-white text-sm font-semibold">Atendimento com Vinicius</p><p className="text-zinc-400 text-xs">Suporte Comercial</p></div>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

