'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'
import { Logo } from './Logo'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/products', label: 'Cardápio' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { data: session, status } = useSession()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-choco-950/92 backdrop-blur-md shadow-warm border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Logo size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="font-display text-sm tracking-wide text-choco-200 hover:text-gold-400 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {status === 'loading' ? (
            <div className="w-20 h-8 bg-choco-800/50 animate-pulse" />
          ) : status === 'authenticated' ? (
            <>
              <span className="hidden md:block text-sm font-display tracking-wide text-choco-200">
                Olá, {session.user?.name?.split(' ')[0]}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="px-5 py-2.5 text-sm font-display tracking-wide text-choco-200 hover:text-gold-400 transition-colors"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden md:block px-4 py-2 text-sm font-display tracking-wide text-choco-200 hover:text-gold-400"
              >
                Entrar
              </Link>
              <Link
                href="/register"
                className="px-5 py-2.5 text-sm font-display tracking-wide bg-choco-800 text-cream-100 hover:bg-choco-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-px active:translate-y-0"
              >
                Criar Conta
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.header>
  )
}
