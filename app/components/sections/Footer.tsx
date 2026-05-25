'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = `https://wa.me/5511987901884?text=${encodeURIComponent(
    'Olá! Escaneei o QR Code do panfleto e tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?'
  )}`

  return (
    <footer className="relative py-8 md:py-12 px-6 bg-gradient-to-r from-[#0a0e27] to-[#1a1f3a] border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Alpha Recargas
            </h3>
            <p className="text-sm text-zinc-400">
              Plataforma moderna para você ganhar dinheiro vendendo recargas
            </p>
          </div>

          {/* WhatsApp Link */}
          <div className="text-center">
            <p className="text-sm text-zinc-400 mb-3">Fale conosco</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.559.897-2.813 2.379-3.6 4.114-.852 1.922-1.263 4.057-1.263 6.219 0 .828.034 1.641.102 2.441L1.75 23.128l2.285-.764c1.312.742 2.786 1.133 4.342 1.133 5.369 0 9.75-4.353 9.75-9.687 0-2.591-.991-5.026-2.793-6.841-1.801-1.816-4.2-2.817-6.72-2.817z" />
              </svg>
              (11) 98790-1884
              (11) 96606-1655
            </a>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <p className="text-sm text-zinc-400 mb-1">Horário de atendimento</p>
            <p className="text-sm font-semibold text-white">24 horas por dia</p>
            <p className="text-xs text-zinc-500">Todos os dias</p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 mb-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-zinc-500"
        >
          <p>© {currentYear} Alpha Recargas. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
