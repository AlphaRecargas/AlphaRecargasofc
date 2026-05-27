import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

// Correção aqui: Adicionando as chaves { } para corresponder à exportação correta
import { Providers } from '../components/theme-provider'
import { Loader } from '../components/loader'

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
  title: {
    default: 'Alpha Recargas',
    template: '%s | Alpha Recargas',
  },
  description: 'Sistema profissional de recargas e gerenciamento.',
  metadataBase: new URL('https://v0-alpha-recargas-whatsapp.vercel.app'),
  openGraph: {
    title: 'Alpha Recargas',
    description: 'Sistema profissional de recargas',
    url: '/',
    siteName: 'Alpha Recargas',
    images: ['/preview.png'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e27',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <Providers>
          <Loader>
            <div className="relative min-h-screen bg-black text-white overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)]" />
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />
              {children}
              {process.env.NODE_ENV === 'production' && <Analytics />}
            </div>
          </Loader>
        </Providers>
      </body>
    </html>
  )
}

