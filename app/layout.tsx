import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import * as ThemeModule from '../components/theme-provider'
import * as LoaderModule from '../components/loader'

import './globals.css'

const Providers = (ThemeModule as any).default || (ThemeModule as any).Providers || (ThemeModule as any).ThemeProvider
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
  title: {
    default: 'Alpha Recargas',
    template: '%s | Alpha Recargas',
  },
  description: 'Sistema profissional de recargas e gerenciamento.',
  metadataBase: new URL('https://v0-alpha-recargas-whatsapp.vercel.app'),
  
  // ÍCONES DA ABA (FAVICON)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  // PREVIEW DE COMPARTILHAMENTO
  openGraph: {
    title: 'Alpha Recargas',
    description: 'Sistema profissional de recargas e gerenciamento.',
    url: '/',
    siteName: 'Alpha Recargas',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Recargas - Plataforma Oficial',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Recargas',
    description: 'Sistema profissional de recargas',
    images: ['/preview.png'],
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
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <SafeWrapper component={Providers}>
          <SafeWrapper component={Loader}>
            <div className="relative min-h-screen bg-black text-white overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)]" />
              {children}
            </div>
          </SafeWrapper>
        </SafeWrapper>
        <Analytics />
      </body>
    </html>
  )
}

