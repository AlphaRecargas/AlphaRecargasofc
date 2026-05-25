/**
 * Configuração do QR Code Dinâmico
 * 
 * Para mudar o destino do QR Code, basta alterar a URL abaixo.
 * O QR Code físico (impresso) nunca precisará ser trocado.
 */

export const QR_CONFIG = {
  // URL de destino atual - EDITE AQUI para mudar o redirecionamento
  destinationUrl: "https://v0-alfa-recarrega-whatsapp.vercel.app/",
  
  // URL do QR Code (não alterar - esta é a URL que vai no QR físico)
  qrUrl: "https://v0-alfa-recarrega-whatsapp.vercel.app/qr",
  
  // Configurações do QR Code
  qrOptions: {
    width: 1024,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
}
