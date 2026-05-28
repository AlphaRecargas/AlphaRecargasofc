'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PlansSection() {
  const planos = [
    { 
      nome: 'Iniciante', 
      preco: 'Grátis',
      beneficios: ['Comissões padrão', 'Suporte via Chat', 'Acesso Web'],
      destaque: false 
    },
    { 
      nome: 'Profissional', 
      preco: 'Mais Popular',
      beneficios: ['Melhores taxas de lucro', 'Suporte Prioritário', 'Acesso Web + App', 'Relatórios Diários'],
      destaque: true 
    },
    { 
      nome: 'Premium', 
      preco: 'Exclusivo',
      beneficios: ['Taxas máximas de comissão', 'Gerente de Contas', 'Integração via API', 'Suporte 24h'],
      destaque: false 
    },
  ]

  // Altere para o link definitivo do seu WhatsApp de Vendas
  const LINK_WHATSAPP = "https://wa.me/seu-numero-aqui" 

  return (
    <motion.section
      id="planos"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 bg-[#0a0e27]"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl text-white text-center mb-4 font-sans font-bold">
          Escolha seu plano
        </h2>
        <p className="text-center text-zinc-400 mb-16 max-w-md mx-auto font-sans">
          Selecione a melhor opção para começar a faturar hoje mesmo.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
              className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                plano.destaque
                  ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.15)] md:scale-105'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

              <div>
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase bg-cyan-400/10 px-3 py-1 rounded-full inline-block mb-4">
                  {plano.preco}
                </span>
                <h3 className="text-white text-2xl font-sans font-bold mb-6">
                  {plano.nome}
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {plano.beneficios.map((beneficio, bIndex) => (
                    <li key={bIndex} className="text-zinc-300 font-sans text-sm flex items-center gap-2">
                      <span className="text-cyan-400 text-xs">✓</span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  variant={plano.destaque ? 'default' : 'secondary'}
                  className="w-full font-sans font-semibold transition-all hover:scale-[1.01]"
                  onClick={() => window.open(LINK_WHATSAPP, '_blank', 'noopener,noreferrer')}
                >
                  Começar agora
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

