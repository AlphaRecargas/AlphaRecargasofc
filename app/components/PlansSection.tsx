'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PlansSection() {
  const niveis = [
    { 
      nome: 'Iniciante', 
      meta: '0 a 50',
      subtitulo: 'recargas no mês',
      badge: 'Nível 1',
      beneficios: [
        'Acesso completo ao Site e App',
        'Suporte especializado 24h',
        'Taxa de lucro padrão'
      ],
      destaque: false 
    },
    { 
      nome: 'Profissional', 
      meta: '51 a 100',
      subtitulo: 'recargas no mês',
      badge: 'Nível 2 • Recomendado',
      beneficios: [
        'Acesso completo ao Site e App',
        'Suporte especializado 24h',
        'Cartaz personalizado com a logo Alpha',
        'Brindes exclusivos para dar aos clientes',
        'Taxa de lucro aumentada 📈'
      ],
      destaque: true 
    },
    { 
      nome: 'Premium', 
      meta: '100+',
      subtitulo: 'recargas no mês',
      badge: 'Nível Máximo',
      beneficios: [
        'Acesso completo ao Site e App',
        'Suporte especializado 24h',
        'Cartaz personalizado com a logo Alpha',
        'Brindes exclusivos para dar aos clientes',
        'Brindes especiais de conquista para o colaborador 🎁',
        'Divulgação da sua loja nas redes sociais da Alpha ⭐',
        'Taxa MÁXIMA de lucro de parceiro 🚀'
      ],
      destaque: false 
    },
  ]

  // Substitua pela URL final do seu WhatsApp de atendimento
  const LINK_WHATSAPP = "https://wa.me/seu-numero-aqui" 

  return (
    <motion.section
      id="planos"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-[#0a0e27]"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl text-white text-center mb-4 font-sans font-bold">
          Cresça com a Alpha Recargas
        </h2>
        <p className="text-center text-zinc-400 mb-16 max-w-md mx-auto font-sans">
          Aumente o seu volume mensal de vendas, suba de nível e garanta prêmios e taxas de lucros maiores.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">
          {niveis.map((nivel, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: nivel.destaque ? 1.05 : 1.02,
                y: -4,
              }}
              className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                nivel.destaque
                  ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.15)] md:scale-105 z-10'
                  : 'border-white/10 bg-white/5 opacity-95'
              }`}
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

              <div>
                <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full inline-block mb-4 ${
                  nivel.destaque ? 'bg-cyan-400 text-black' : 'bg-cyan-400/10 text-cyan-400'
                }`}>
                  {nivel.badge}
                </span>
                
                <h3 className="text-white text-2xl font-sans font-bold mb-2">
                  {nivel.nome}
                </h3>

                <div className="flex flex-col text-white mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-zinc-400 font-sans uppercase tracking-wider">Meta do Nível</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold tracking-tight text-cyan-400">{nivel.meta}</span>
                    <span className="text-sm text-zinc-300 font-sans">{nivel.subtitulo}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {nivel.beneficios.map((beneficio, bIndex) => (
                    <li key={bIndex} className="text-zinc-300 font-sans text-sm flex items-start gap-2">
                      <span className="text-cyan-400 text-xs shrink-0 mt-0.5">✓</span>
                      <span className="leading-tight">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <Button
                  variant={nivel.destaque ? 'default' : 'secondary'}
                  className="w-full font-sans font-semibold transition-all"
                  onClick={() => window.open(LINK_WHATSAPP, '_blank', 'noopener,noreferrer')}
                >
                  Fazer parte desse nível
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
