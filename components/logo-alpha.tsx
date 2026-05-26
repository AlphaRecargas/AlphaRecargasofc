interface LogoAlphaProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function LogoAlpha({ className = '', showText = true, size = 'md' }: LogoAlphaProps) {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl' },
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizes[size].icon} relative`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="20" fill="url(#logoGrad)" />
          <text
            x="50"
            y="68"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="55"
            fontWeight="bold"
            fill="white"
          >
            α
          </text>
        </svg>
      </div>
      
      {showText && (
        <span className={`font-bold ${sizes[size].text} text-white`}>
          Alpha <span className="text-emerald-400">Recargas</span>
        </span>
      )}
    </div>
  )
}
