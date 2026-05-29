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
        'Acesso completo ao site e app',
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
        'Acesso completo ao site e app',
        'Suporte especializado 24h',
        'Cartaz personalizado com a logo da Alpha',
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
        'Acesso completo ao site e app',
        'Suporte especializado 24h',
        'Cartaz personalizado com a logo da Alpha',
        'Brindes exclusivos para dar aos clientes',
        'Brindes especiais de conquista para o colaborador 🎁',
        'Divulgação da sua loja nas redes oficiais Alpha',
        'Melhor taxa de lucro do mercado 💎'
      ],
      destaque: false 
    }
  ]

  const LINK_WHATSAPP = "https://wa.me/5511987901884?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+n%C3%ADveis+da+Alpha+Recargas."

  return (
    <motion.section
      id="planos"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative pt-12 pb-24 px-6 bg-[#0a0e27]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            <span>Cresça com a </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Alpha Recargas
            </span>
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl mx-auto text-sm md:text-base">
            Suba de nível conforme suas vendas aumentam e garanta comissões maiores, brindes exclusivos e ferramentas de marketing gratuitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {niveis.map((nivel, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative flex flex-col justify-between p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                nivel.destaque
                  ? 'bg-gradient-to-b from-blue-950/40 via-cyan-950/20 to-[#0a0e27] border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] md:scale-105 z-10'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-xs font-sans font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                    nivel.destaque 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-white/5 text-zinc-400 border border-white/5'
                  }`}>
                    {nivel.badge}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-4 font-sans">{nivel.nome}</h3>
                
                <div className="mb-6 p-4 rounded-xl bg-black/20 border border-white/[0.03]">
                  <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-wider font-semibold">Meta do nível</span>
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
                  className="w-full font-sans font-semibold transition-all hover:brightness-110"
                  onClick={() => window.open(LINK_WHATSAPP, '_blank', 'noopener,noreferrer')}
                >
                  Fazer parte deste nível
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

