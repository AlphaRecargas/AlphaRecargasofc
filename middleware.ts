import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * URL de destino do QR Code dinâmico
 * 
 * Para mudar o destino, edite apenas esta linha.
 * O QR Code físico nunca precisará ser trocado.
 */
const DESTINATION_URL = "https://v0-alpha-recargas-whatsapp.vercel.app/"

export function middleware(request: NextRequest) {
  // Redireciona /qr para a URL de destino configurada
  if (request.nextUrl.pathname === "/qr") {
    return NextResponse.redirect(DESTINATION_URL, { status: 307 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/qr",
}
