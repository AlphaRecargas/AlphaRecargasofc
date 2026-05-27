'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-[#0a0e27] flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glow de fundo */}
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />

          {/* Loader content */}
          <motion.div
            className="relative text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
              className="text-white text-2xl font-semibold tracking-wide"
            >
              Alpha Recargas
            </motion.div>

            <motion.div
              className="mt-3 h-[2px] w-32 bg-cyan-400 mx-auto"
              animate={{ scaleX: [0.4, 1, 0.4] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
