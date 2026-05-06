type LogoSize = 'sm' | 'md' | 'lg'

const sizes = {
  sm: { eyebrow: 'text-[9px] tracking-[0.35em]', script: 'text-2xl', divider: 'w-5' },
  md: { eyebrow: 'text-[10px] tracking-[0.4em]', script: 'text-4xl', divider: 'w-7' },
  lg: { eyebrow: 'text-sm tracking-[0.5em]',     script: 'text-6xl', divider: 'w-12' },
}

export function Logo({
  size = 'md',
  className = '',
}: {
  size?: LogoSize
  className?: string
}) {
  const s = sizes[size]

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <span className={`font-display uppercase text-gold-600 ${s.eyebrow}`}>
        Confeitaria
      </span>

      <span className={`font-script text-cream-100 leading-none ${s.script}`}>
        Auri
      </span>

      <div className="flex items-center gap-2 mt-1">
        <div className={`h-px ${s.divider} bg-gradient-to-r from-transparent to-gold-500`} />
        <svg width="5" height="5" viewBox="0 0 5 5" className="text-gold-500 shrink-0">
          <polygon points="2.5,0 5,2.5 2.5,5 0,2.5" fill="currentColor" />
        </svg>
        <div className={`h-px ${s.divider} bg-gradient-to-l from-transparent to-gold-500`} />
      </div>
    </div>
  )
}
