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
  metadataBase: new URL('https://v0-alpha-recargas-whatsapp.vercel.app'),

  title: 'Alpha Recargas',
  
  description:
    'Sistema profissional de recargas, atendimento e gerenciamento da Alpha Recargas.',

  keywords: [
    'Alpha Recargas',
    'recargas',
    'recarga de celular',
    'painel de recargas',
    'WhatsApp',
    'sistema de recargas',
  ],

  authors: [{ name: 'Alpha Recargas' }],

  creator: 'Alpha Recargas',

  publisher: 'Alpha Recargas',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Alpha Recargas',

    description:
      'Sistema profissional de recargas, atendimento e gerenciamento da Alpha Recargas.',

    url: 'https://v0-alpha-recargas-whatsapp.vercel.app/',

    siteName: 'Alpha Recargas',

    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Recargas',
      },
    ],

    locale: 'pt_BR',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Alpha Recargas',

    description:
      'Sistema profissional de recargas, atendimento e gerenciamento da Alpha Recargas.',

    images: ['/preview.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
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
