import Image from 'next/image'

interface LogoAlphaProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LogoAlpha({ className = '', size = 'md' }: LogoAlphaProps) {
  const sizes = {
    sm: { width: 100, height: 100 },
    md: { width: 140, height: 140 },
    lg: { width: 180, height: 180 },
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo-alpha.png"
        alt="Alpha Recargas - Rapido, Seguro, Sempre com voce"
        width={sizes[size].width}
        height={sizes[size].height}
        className="object-contain"
        priority
      />
    </div>
  )
}
