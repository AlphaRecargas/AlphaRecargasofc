import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = 'https://v0-alfa-recarrega-whatsapp.vercel.app'

export const metadata: Metadata = {
  title: 'Alpha Recargas - Seja um Colaborador',
  description: 'Quer se tornar um colaborador Alpha Recargas? Entre em contato pelo WhatsApp e inicie sua parceria. Atendimento 24 horas. Rápido, Seguro, Sempre com você.',
  generator: 'v0.app',
  applicationName: 'Alpha Recargas',
  keywords: ['Alpha Recargas', 'recargas', 'colaborador', 'parceria', 'WhatsApp', 'atendimento 24 horas'],
  authors: [{ name: 'Alpha Recargas' }],
  creator: 'Alpha Recargas',
  publisher: 'Alpha Recargas',
  
  // Open Graph - Facebook, WhatsApp, LinkedIn
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Alpha Recargas',
    title: 'Alpha Recargas - Seja um Colaborador',
    description: 'Quer se tornar um colaborador Alpha Recargas? Entre em contato pelo WhatsApp e inicie sua parceria. Atendimento 24 horas.',
    images: [
      {
        url: `${siteUrl}/images/alpha-recargas-logo.jpg`,
        width: 1200,
        height: 630,
        alt: 'Alpha Recargas - Rápido, Seguro, Sempre com você',
      },
    ],
  },
  
  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Recargas - Seja um Colaborador',
    description: 'Quer se tornar um colaborador Alpha Recargas? Entre em contato pelo WhatsApp e inicie sua parceria. Atendimento 24 horas.',
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
    icon: [
      { url: '/images/alpha-recargas-logo.jpg', type: 'image/jpeg' },
    ],
    apple: '/images/alpha-recargas-logo.jpg',
    shortcut: '/images/alpha-recargas-logo.jpg',
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
    <html lang="pt-BR" className="bg-black">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
