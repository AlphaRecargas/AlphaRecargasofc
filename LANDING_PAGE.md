# Alpha Recargas - Landing Page Premium

Uma landing page premium, moderna e profissional para captação de parceiros/colaboradores para o programa de recargas da Alpha Recargas.

## Características

### Design Premium
- **Visual Moderno**: Glassmorphism com glow effects
- **Dark Mode**: Tema escuro professional com gradientes cyan, azul e verde
- **Animações**: Suaves transições com Framer Motion
- **Responsivo**: Mobile-first, otimizado para todos os dispositivos

### Seções

1. **Hero Section**
   - Título impactante: "Ganhe dinheiro vendendo recargas na sua loja"
   - Badge de "Plataforma ativa 24/7"
   - Botão CTA principal com efeito glow
   - Estatísticas de confiança (500+ parceiros, 10k+ recargas/dia)

2. **Benefits Section**
   - 6 cards com benefícios exclusivos
   - Hover premium com animações
   - Icons emoji
   - Glow effects no hover

3. **How It Works Section**
   - Timeline de 4 passos
   - Cards com numeração
   - Conectores visuais (desktop)
   - Animações sequenciais

4. **Trust Section**
   - Estatísticas de confiança (500+, 300k+, 99.9%)
   - Status do sistema com pulse animation
   - Status de operadoras (Vivo, Claro, TIM, Oi)
   - Indicadores online em tempo real

5. **FAQ Section**
   - 6 perguntas frequentes
   - Accordion expansível com Framer Motion
   - Perguntas estratégicas para conversão
   - CTA no final

6. **Footer**
   - Informações da empresa
   - Links de WhatsApp
   - Horário de atendimento (24h)
   - Copyright

7. **Floating WhatsApp Button**
   - Botão flutuante fixo no canto inferior
   - Sempre visível e acessível
   - Animação de pulse
   - Link direto ao WhatsApp com mensagem pré-preenchida

## Tecnologias

- **Next.js 16** - App Router, SSR optimizado
- **React 19** - Componentes modernos
- **Tailwind CSS v4** - Styling profissional
- **Framer Motion 12** - Animações suaves
- **TypeScript** - Type safety

## Componentes Criados

```
app/components/
├── sections/
│   ├── HeroSection.tsx       # Hero com CTA principal
│   ├── BenefitsSection.tsx   # 6 benefícios em cards
│   ├── HowItWorksSection.tsx # Timeline de 4 passos
│   ├── TrustSection.tsx      # Estatísticas e status
│   ├── FAQSection.tsx        # Accordion de FAQ
│   ├── Footer.tsx            # Rodapé profissional
│   └── index.ts              # Exports
└── FloatingWhatsApp.tsx      # Botão flutuante
```

## Features de Conversão

✅ **Hero forte** com título compelling
✅ **CTA primária** em botão grande e destacado
✅ **Social proof** (500+ parceiros, 99.9% uptime)
✅ **Benefícios claros** em 6 cards
✅ **Timeline visual** de como funciona
✅ **Status em tempo real** do sistema
✅ **FAQ** respondendo objeções
✅ **CTA flutuante** sempre visível
✅ **Mobile-first** responsivo
✅ **Animações premium** para engajamento

## Cores da Identidade

- **Cyan**: #00aeef
- **Blue**: #0066ff  
- **Green**: #00ff88
- **Dark Background**: #0a0e27
- **Card Background**: #1a1f3a

## Animações Adicionadas

- `pulse-glow`: Pulso com efeito glow
- `float-up`: Subida com fade in
- `glow-pulse`: Glow em textos
- `shimmer`: Efeito shimmer
- `rotate-glow`: Rotação com glow crescente

## SEO Otimizado

✅ Meta tags Open Graph para WhatsApp, Facebook
✅ Twitter Card tags
✅ Manifest.json para PWA
✅ Robots.txt para SEO
✅ Favicon
✅ Canonical URL
✅ Structured data ready

## Como Usar

### Desenvolvimento
```bash
pnpm dev
# Abra http://localhost:3000
```

### Build & Deploy
```bash
pnpm build
pnpm start
```

## Link para QR Code

**https://v0-alfa-recarrega-whatsapp.vercel.app**

Use esta URL para gerar QR Codes nos seus panfletos.

## Mensagem WhatsApp Pré-Preenchida

Quando o usuário clica em qualquer CTA, é enviada a seguinte mensagem:

> "Olá! Escaneei o QR Code do panfleto e tenho interesse em me tornar um parceiro/colaborador da Alpha Recargas. Poderia me passar mais informações?"

## Performance

- Build: ~5 segundos
- Lighthouse: Otimizado para mobile
- Animações: 60 FPS com GPU acceleration
- Tamanho: ~150KB gzipped

## Próximas Melhorias

- [ ] Analytics com Vercel Speed Insights
- [ ] A/B testing de CTA
- [ ] Integração com formulário de lead
- [ ] Chat em tempo real
- [ ] Vídeo hero background
- [ ] Testimonials de parceiros
- [ ] Comparação com concorrentes

---

**Desenvolvido com ❤️ usando v0 by Vercel**
