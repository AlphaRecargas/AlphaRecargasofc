'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,174,255,0.25),transparent_40%),radial-gradient(circle_at_bottom,_rgba(0,255,136,0.15),transparent_35%)]"></div>
      
      <div className="relative z-10 text-center max-w-md">
        <h1 className="text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-clip-text text-transparent mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          Página não encontrada
        </h2>
        
        <p className="text-zinc-400 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-[0_0_20px_rgba(0,174,255,0.35)] hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}

