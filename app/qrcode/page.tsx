'use client'

import { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode'
const QR_URL = "https://v0-alpha-recargas-whatsapp.vercel.app/qr"
// URL do QR Code - aponta para a rota /qr que faz o redirecionamento
const QR_URL = "https://v0-alpha-recargas-whatsapp.vercel.app/qr"

export default function QRCodePage() {
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    generateQRCode()
  }, [])

  const generateQRCode = async () => {
    try {
      // Gera QR Code em alta qualidade
      const dataUrl = await QRCode.toDataURL(QR_URL, {
        width: 1024,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H', // Alta correção de erros
      })
      setQrDataUrl(dataUrl)
      setIsLoading(false)
    } catch (err) {
      console.error('Erro ao gerar QR Code:', err)
      setIsLoading(false)
    }
  }

  const downloadQRCode = () => {
    if (!qrDataUrl) return

    const link = document.createElement('a')
    link.download = 'alpha-recargas-qrcode.png'
    link.href = qrDataUrl
    link.click()
  }

  const downloadHighRes = async () => {
    try {
      // Gera versão em altíssima resolução para impressão
      const highResDataUrl = await QRCode.toDataURL(QR_URL, {
        width: 2048,
        margin: 3,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      })

      const link = document.createElement('a')
      link.download = 'alpha-recargas-qrcode-highres.png'
      link.href = highResDataUrl
      link.click()
    } catch (err) {
      console.error('Erro ao gerar QR Code HD:', err)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2 tracking-tight">
            QR Code
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base">
            Alpha Recargas - Parceiros
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white border-2 border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <div className="aspect-square w-full max-w-[280px] mx-auto bg-white rounded-xl overflow-hidden flex items-center justify-center">
            {isLoading ? (
              <div className="animate-pulse bg-zinc-100 w-full h-full flex items-center justify-center">
                <span className="text-zinc-400">Gerando...</span>
              </div>
            ) : (
              <img
                src={qrDataUrl}
                alt="QR Code Alpha Recargas"
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* URL Info */}
          <div className="mt-6 p-3 bg-zinc-50 rounded-lg">
            <p className="text-xs text-zinc-400 text-center mb-1">Aponta para:</p>
            <p className="text-xs text-zinc-600 text-center font-mono break-all">
              {QR_URL}
            </p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="space-y-3">
          <button
            onClick={downloadQRCode}
            disabled={isLoading}
            className="w-full bg-black hover:bg-zinc-800 disabled:bg-zinc-300 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PNG
          </button>

          <button
            onClick={downloadHighRes}
            disabled={isLoading}
            className="w-full bg-white hover:bg-zinc-50 disabled:bg-zinc-100 text-black font-semibold py-4 px-6 rounded-xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Download Alta Resolução
          </button>
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-400 leading-relaxed">
            Este QR Code aponta para uma URL fixa.<br />
            O destino pode ser alterado sem trocar o QR Code.
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-zinc-500 hover:text-black transition-colors underline underline-offset-4"
          >
            Voltar para o site
          </a>
        </div>
      </div>
    </div>
  )
}
