import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = 'https://v0-alfa-recarrega-whatsapp.vercel.app'

export const metadata: Metadata = {
  title: 'Alpha Recargas - Ganhe dinheiro vendendo recargas',
  description: 'Transforme sua loja em um ponto de recargas. Sistema rápido, suporte via WhatsApp e comissão em cada venda. Plataforma moderna e confiável. Atendimento 24/7.',
  generator: 'v0.app',
  applicationName: 'Alpha Recargas',
  keywords: ['Alpha Recargas', 'recargas', 'colaborador', 'parceria', 'ganhar dinheiro', 'ponto de recargas', 'WhatsApp', 'comissão', 'loja'],
  authors: [{ name: 'Alpha Recargas' }],
  creator: 'Alpha Recargas',
  publisher: 'Alpha Recargas',
  
  // Open Graph - Facebook, WhatsApp, LinkedIn
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Alpha Recargas',
    title: 'Alpha Recargas - Ganhe dinheiro vendendo recargas',
    description: 'Transforme sua loja em um ponto de recargas com sistema rápido, suporte via WhatsApp e comissão em cada venda.',
    images: [
      {
        url: `${siteUrl}/images/alpha-recargas-logo.jpg`,
        width: 1200,
        height: 630,
        alt: 'Alpha Recargas - Ganhe dinheiro vendendo recargas',
      },
    ],
  },
  
  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Recargas - Ganhe dinheiro vendendo recargas',
    description: 'Transforme sua loja em um ponto de recargas com sistema rápido, suporte via WhatsApp e comissão em cada venda.',
    images: [`${siteUrl}/images/alpha-recargas-logo.jpg`],
  },
  
  // Robots
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
  
  // Icons
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: '/images/alpha-recargas-logo.jpg',
    shortcut: '/favicon.ico',
  },
  
  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },
  
  // Manifest for PWA
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#0a0e27] dark">
      <body className="font-sans antialiased bg-[#0a0e27]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
