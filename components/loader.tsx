'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0e27]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center"
          >
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="text-2xl font-semibold"
            >
              Alpha Recargas
            </motion.div>

            <div className="mt-3 h-[2px] w-28 bg-cyan-400 mx-auto animate-pulse" />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
