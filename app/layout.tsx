import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import * as LoaderModule from '../components/loader'
import './globals.css'

const Loader = (LoaderModule as any).default || (LoaderModule as any).Loader

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
  title: 'Alpha Recargas - Sistema Profissional',
  description: 'Aumente o faturamento do seu negócio vendendo recargas eletrônicas!',
  metadataBase: new URL('https://v0-alpha-recargas-whatsapp.vercel.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Alpha Recargas',
    description: 'Plataforma simples, rápida e altamente lucrativa para o seu negócio expandir faturando com recargas.',
    url: 'https://v0-alpha-recargas-whatsapp.vercel.app',
    siteName: 'Alpha Recargas',
    images: [
      {
        url: '/link WhatsApp.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Recargas Banner',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e27',
}

function SafeWrapper({ component: Component, children }: { component: any; children: React.ReactNode }) {
  if (!Component || typeof Component === 'undefined') {
    return <>{children}</>
  }
  return <Component>{children}</Component>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} dark`}>
      <body className="font-sans antialiased overflow-x-hidden bg-[#0a0e27] text-white">
        <SafeWrapper component={Loader}>
          <div className="relative min-h-screen bg-[#0a0e27] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)]" />
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />
            {children}
            <Analytics />
          </div>
        </SafeWrapper>
      </body>
    </html>
  )
}

