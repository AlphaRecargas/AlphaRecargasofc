'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function FloatingWhatsApp() {
  const whatsappLink = `https://wa.me/5511987901884?text=${encodeURIComponent(
    'Olá! Escaneei o QR Code do panfleto e tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?'
  )}`

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-400 opacity-20"
        />
        <svg
          className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.559.897-2.813 2.379-3.6 4.114-.852 1.922-1.263 4.057-1.263 6.219 0 .828.034 1.641.102 2.441L1.75 23.128l2.285-.764c1.312.742 2.786 1.133 4.342 1.133 5.369 0 9.75-4.353 9.75-9.687 0-2.591-.991-5.026-2.793-6.841-1.801-1.816-4.2-2.817-6.72-2.817z" />
        </svg>
      </motion.button>
    </Link>
  )
}
