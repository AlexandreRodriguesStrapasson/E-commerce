'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from './Logo'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 70, damping: 18 },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-gradient">

      {/* Blobs decorativos animados */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-gold-200/25 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-choco-200/20 blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-gold-300/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Padrão de pontos sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #5c2a12 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Conteúdo */}
      <motion.div
        className="relative text-center px-6 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Logo grande */}
        <motion.div variants={item} className="mb-10">
          <Logo size="lg" className="mx-auto" />
        </motion.div>

        {/* Divisor com tagline */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="text-gold-600 text-xs tracking-[0.5em] uppercase font-display">
            Artisan Pâtisserie
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-choco-900 leading-tight mb-6"
        >
          Arte em cada detalhe,
          <br />
          <span className="text-gradient-gold">sabor em cada momento</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={item}
          className="font-body text-lg md:text-xl text-choco-600 max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Bolos e doces artesanais criados com ingredientes selecionados para
          tornar cada ocasião verdadeiramente inesquecível.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/products" className="btn-primary">
              Ver Cardápio
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/register" className="btn-outline-gold">
              Criar Conta
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-600/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase font-display">
          Explorar
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3,6 9,12 15,6" />
        </svg>
      </motion.div>
    </section>
  )
}
