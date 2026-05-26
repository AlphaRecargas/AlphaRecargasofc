import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Alpha Recargas - Ganhe dinheiro vendendo recargas na sua loja',
  description: 'Transforme sua loja em um ponto de recargas. Sistema rápido, suporte via WhatsApp 24/7 e comissão em cada venda. Mais de 100 parceiros ativos e 1000+ recargas diárias.',
  keywords: ['recargas', 'recarga de celular', 'ganhar dinheiro', 'venda de recargas', 'Alpha Recargas', 'comissão', 'WhatsApp'],
  authors: [{ name: 'Alpha Recargas' }],
  creator: 'Alpha Recargas',
  publisher: 'Alpha Recargas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://v0-alpha-recargas-whatsapp.vercel.app/',
    siteName: 'Alpha Recargas',
    title: 'Alpha Recargas - Ganhe dinheiro vendendo recargas',
    description: 'Transforme sua loja em um ponto de recargas. Sistema rápido, suporte via WhatsApp 24/7 e comissão em cada venda.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Recargas - Plataforma de Recargas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Recargas - Ganhe dinheiro vendendo recargas',
    description: 'Transforme sua loja em um ponto de recargas. Sistema rápido, suporte via WhatsApp 24/7.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' },
    { media: '(prefers-color-scheme: dark)', color: '#059669' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
