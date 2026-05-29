'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LogoAlpha } from '@/components/logo-alpha'
import { Button } from '@/components/ui/button'

const links = [
  { name: 'Início', href: 'inicio' },
  { name: 'Como Funciona', href: 'como-funciona' },
  { name: 'Planos', href: 'planos' },
  { name: 'FAQ', href: 'faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const [showAbout, setShowAbout] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActive(id)
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e27]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 relative">
        
        {/* LOGO COM POPUP INSTITUCIONAL */}
        <div className="relative">
          <div 
            className="flex items-center gap-2 cursor-pointer select-none group"
            onClick={() => setShowAbout(!showAbout)}
          >
            <LogoAlpha size="sm" className="transform group-hover:scale-105 transition-transform" />
          </div>

          <AnimatePresence>
            {showAbout && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowAbout(false)} />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-3 w-72 bg-[#111636] border border-cyan-500/30 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 text-xs text-zinc-300 font-sans leading-relaxed"
                >
                  <h4 className="font-bold text-white mb-1 text-sm text-cyan-400">Sobre a Alpha Recargas</h4>
                  Somos uma plataforma líder em soluções de recargas eletrônicas, focada em transformar comércios locais em pontos de alta lucratividade com tecnologia estável, segura e atendimento especializado de alto nível.
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* NAVEGAÇÃO CORRIGIDA SEM TRAÇO SOLTO */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative font-sans text-sm font-medium transition-colors py-1 cursor-pointer ${
                active === link.href ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="gradient" 
            size="sm"
            onClick={() => setShowModal(true)}
            className="font-sans font-semibold cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Começar
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white cursor-pointer p-1">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0a0e27]/95 backdrop-blur-xl border-t border-white/10 absolute left-0 right-0 top-full px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-lg font-sans ${active === link.href ? 'text-cyan-400 font-bold' : 'text-zinc-300'}`}
                >
                  {link.name}
                </button>
              ))}

              <Button variant="gradient" className="w-full" onClick={() => { setMenuOpen(false); setShowModal(true); }}>
                Começar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL GLOBAL DE ATENDIMENTO */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#111636] border border-white/10 rounded-2xl w-full max-w-sm p-6 relative z-10 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white font-sans text-center mb-2">Falar com Atendimento</h3>
              <p className="text-zinc-400 text-xs font-sans text-center mb-6">Selecione o canal ou especialista disponível para iniciar:</p>
              
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/5511966061655?text=${encodeURIComponent('Olá Robson! Tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 p-4 rounded-xl transition-all group"
                >
                  <div className="font-sans text-left">
                    <p className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">Falar com Robson</p>
                    <p className="text-zinc-400 text-xs">Suporte e Credenciamento</p>
                  </div>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </a>

                <a 
                  href={`https://wa.me/5511987901884?text=${encodeURIComponent('Olá Vinicius! Tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/30 p-4 rounded-xl transition-all group"
                >
                  <div className="font-sans text-left">
                    <p className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">Falar com Vinicius</p>
                    <p className="text-zinc-400 text-xs">Atendimento Comercial</p>
                  </div>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </a>
              </div>
              
              <Button 
                variant="ghost" 
                className="w-full mt-4 text-zinc-500 hover:text-white font-sans text-xs cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Voltar ao site
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}

