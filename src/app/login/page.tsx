'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/Logo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const loading = false

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('Em desenvolvimento.')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-warm-gradient relative overflow-hidden px-4 py-16">

      {/* Blobs decorativos */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-choco-700/30 blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Padrão de pontos */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7d3d1e 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Cartão */}
      <motion.div
        className="relative w-full max-w-md glass shadow-gold-lg px-10 py-12"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link href="/" className="block mb-10">
          <Logo className="mx-auto" />
        </Link>

        {/* Divisor */}
        <div className="divider-gold text-gold-500 text-[10px] tracking-[0.45em] uppercase font-display mb-8">
          Bem-vindo de volta
        </div>

        {/* Erro */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-sm text-cream-200 bg-choco-800/50 border border-choco-700 px-4 py-3 mb-6 text-center font-body"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.35em] uppercase text-gold-600 font-display">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="bg-transparent border-b border-choco-700 py-2.5 text-sm text-cream-100 placeholder:text-choco-600 focus:outline-none focus:border-gold-500 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.35em] uppercase text-gold-600 font-display">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-transparent border-b border-choco-700 py-2.5 text-sm text-cream-100 placeholder:text-choco-600 focus:outline-none focus:border-gold-500 transition-colors duration-200"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full text-center btn-primary mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </motion.button>
        </form>

        {/* Link para cadastro */}
        <p className="text-xs text-center mt-8 text-choco-300 font-body">
          Não tem conta?{' '}
          <Link
            href="/register"
            className="text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors"
          >
            Criar conta
          </Link>
        </p>
      </motion.div>
    </main>
  )
}
