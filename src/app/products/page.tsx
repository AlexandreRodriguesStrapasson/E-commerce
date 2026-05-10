'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const CATEGORIES = ['Todos', 'Bolos', 'Tortas', 'Doces', 'Cupcakes', 'Pudins']

const CATEGORY_EMOJI: Record<string, string> = {
  Bolos: '🎂',
  Tortas: '🍰',
  Doces: '🍫',
  Cupcakes: '🧁',
  Pudins: '🍮',
}

interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  emoji: string
  featured: boolean
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 18 },
  },
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState('')

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data)
        else setError('Erro ao carregar produtos.')
      })
      .catch(() => setError('Erro ao conectar com o servidor.'))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchCat = activeCategory === 'Todos' || p.category === activeCategory
        const q = search.toLowerCase()
        const matchSearch =
          !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
        return matchCat && matchSearch
      }),
    [products, activeCategory, search]
  )

  function handlePedir(name: string) {
    setToast(name)
    setTimeout(() => setToast(''), 3500)
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-warm-gradient pt-28 pb-24 px-6 relative overflow-hidden">

        {/* Blobs decorativos */}
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-choco-700/20 blur-3xl pointer-events-none" />

        {/* Padrão de pontos */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #7d3d1e 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              key="toast"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 text-sm text-cream-100 font-body shadow-gold flex items-center gap-3"
            >
              <span className="text-gold-400">✓</span>
              <span>
                <strong className="text-gold-400">{toast}</strong> adicionado!{' '}
                <a href="/#contato" className="underline underline-offset-2 text-gold-500 hover:text-gold-400">
                  Finalizar pedido
                </a>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto relative">

          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-gold-600 text-[10px] tracking-[0.5em] uppercase font-display">
                Nosso Cardápio
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-cream-100 mb-4">
              Feito com <span className="text-gradient-gold">amor e cuidado</span>
            </h1>
            <p className="text-choco-200 font-body max-w-xl mx-auto">
              Cada produto é preparado artesanalmente com ingredientes selecionados para surpreender seu paladar.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full glass px-5 py-3.5 pr-12 text-sm text-cream-100 placeholder:text-choco-500 focus:outline-none focus:border-gold-500 transition-colors duration-200 font-body"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-choco-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="7" cy="7" r="5" />
                  <line x1="11" y1="11" x2="14" y2="14" />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* Category pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-display tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-choco-950 shadow-gold'
                    : 'glass text-choco-200 hover:text-gold-400'
                }`}
              >
                {CATEGORY_EMOJI[cat] && (
                  <span className="mr-1.5">{CATEGORY_EMOJI[cat]}</span>
                )}
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Loading skeleton */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="glass h-80 animate-pulse opacity-40" />
              ))}
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="text-center py-20">
              <p className="text-choco-300 font-body mb-6">{error}</p>
              <Link
                href="/api/seed"
                className="text-sm text-gold-500 underline underline-offset-2 font-display tracking-wide"
              >
                Popular catálogo (apenas em desenvolvimento)
              </Link>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🍰</div>
              <p className="text-choco-300 font-body">Nenhum produto encontrado.</p>
              {products.length === 0 && (
                <Link
                  href="/api/seed"
                  className="mt-4 inline-block text-sm text-gold-500 underline underline-offset-2 font-display"
                >
                  Popular catálogo (apenas em desenvolvimento)
                </Link>
              )}
            </div>
          )}

          {/* Grid */}
          {!loading && !error && filtered.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((product) => (
                <ProductCard key={product._id} product={product} onPedir={handlePedir} />
              ))}
            </motion.div>
          )}
        </div>
      </main>
    </>
  )
}

function ProductCard({
  product,
  onPedir,
}: {
  product: Product
  onPedir: (name: string) => void
}) {
  return (
    <motion.article
      variants={cardVariants}
      className="glass flex flex-col overflow-hidden group"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Emoji area */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #200d03 0%, #3d1a08 100%)' }}
      >
        {product.featured && (
          <span className="absolute top-3 right-3 text-[9px] font-display tracking-[0.3em] uppercase text-gold-400 border border-gold-500/40 px-2 py-0.5">
            Destaque
          </span>
        )}
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
          {product.emoji}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-[9px] tracking-[0.3em] uppercase text-gold-600 font-display mb-1.5">
          {product.category}
        </span>
        <h3 className="font-display text-lg text-cream-100 mb-2 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-choco-200 font-body leading-relaxed flex-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-choco-700/50">
          <span className="font-display text-xl text-gold-400">
            {formatPrice(product.price)}
          </span>
          <motion.button
            onClick={() => onPedir(product.name)}
            className="px-4 py-2 text-[0.7rem] font-display tracking-wider uppercase bg-gold-500 text-choco-950 shadow-gold hover:bg-gold-400 transition-colors duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Pedir Agora
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
