import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
  {
    variants: {
      variant: {
        // 🔥 BOTÃO PRINCIPAL (PADRÃO DO SITE)
        default:
          'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105',

        // ❗ PERIGO
        destructive:
          'bg-red-500 text-white hover:bg-red-600',

        // 🔲 OUTLINE
        outline:
          'border border-white/20 bg-white/5 text-white hover:bg-white/10',

        // ⚪ SECUNDÁRIO
        secondary:
          'bg-white/10 text-white hover:bg-white/20',

        // 👻 GHOST
        ghost:
          'hover:bg-white/10 text-white',

        // 🔗 LINK
        link:
          'text-cyan-400 underline-offset-4 hover:underline',
      },

      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
