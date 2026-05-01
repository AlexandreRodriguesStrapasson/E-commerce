'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/Logo'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Erro ao criar conta.')
      setLoading(false)
      return
    }

    router.push('/login')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-warm-gradient relative overflow-hidden px-4 py-16">

      {/* Blobs decorativos */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gold-200/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-choco-200/20 blur-3xl pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Padrão de pontos */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #5c2a12 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Cartão */}
      <motion.div
        className="relative w-full max-w-md glass shadow-warm-lg px-10 py-12"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link href="/" className="block mb-10">
          <Logo className="mx-auto" />
        </Link>

        {/* Divisor */}
        <div className="divider-gold text-gold-600 text-[10px] tracking-[0.45em] uppercase font-display mb-8">
          Crie sua conta
        </div>

        {/* Erro */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-sm text-choco-700 bg-choco-50 border border-choco-200 px-4 py-3 mb-6 text-center font-body"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.35em] uppercase text-choco-400 font-display">
              Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
              className="bg-transparent border-b border-choco-200 py-2.5 text-sm text-choco-800 placeholder:text-choco-300 focus:outline-none focus:border-gold-500 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.35em] uppercase text-choco-400 font-display">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="bg-transparent border-b border-choco-200 py-2.5 text-sm text-choco-800 placeholder:text-choco-300 focus:outline-none focus:border-gold-500 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.35em] uppercase text-choco-400 font-display">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              className="bg-transparent border-b border-choco-200 py-2.5 text-sm text-choco-800 placeholder:text-choco-300 focus:outline-none focus:border-gold-500 transition-colors duration-200"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full text-center btn-primary mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
          >
            {loading ? 'Criando conta...' : 'Criar Conta'}
          </motion.button>
        </form>

        {/* Link para login */}
        <p className="text-xs text-center mt-8 text-choco-400 font-body">
          Já tem conta?{' '}
          <Link
            href="/login"
            className="text-gold-600 hover:text-gold-500 underline underline-offset-2 transition-colors"
          >
            Entrar
          </Link>
        </p>
      </motion.div>
    </main>
  )
}
