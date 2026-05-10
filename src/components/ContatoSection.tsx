'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ContatoSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setSuccess(true)
      setForm({ name: '', phone: '', message: '' })
    } else {
      const data = await res.json()
      setError(data.error || 'Erro ao enviar mensagem.')
    }
    setLoading(false)
  }

  const inputClass =
    'bg-transparent border-b border-choco-700 py-3 text-sm text-cream-100 placeholder:text-choco-600 focus:outline-none focus:border-gold-500 transition-colors duration-200 w-full font-body'

  const labelClass = 'text-[10px] tracking-[0.35em] uppercase text-gold-600 font-display'

  return (
    <section id="contato" className="py-32 px-6 bg-warm-gradient relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-600 text-[10px] tracking-[0.5em] uppercase font-display">
              Fale Conosco
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream-100 mb-4">
            Faça seu <span className="text-gradient-gold">pedido</span>
          </h2>
          <p className="text-choco-200 font-body max-w-md mx-auto">
            Conte-nos o que você deseja e entraremos em contato para confirmar os detalhes da sua encomenda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Informações */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { emoji: '📍', label: 'Localização', value: 'São Paulo, SP — Brasil' },
              { emoji: '⏰', label: 'Atendimento', value: 'Seg–Sex: 9h–18h\nSáb: 9h–14h' },
              { emoji: '📦', label: 'Encomendas', value: 'Mínimo 3 dias úteis de antecedência' },
            ].map(({ emoji, label, value }) => (
              <div key={label} className="flex gap-4">
                <span className="text-2xl mt-0.5">{emoji}</span>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-display mb-1">{label}</p>
                  <p className="text-sm text-choco-200 font-body whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Formulário */}
          <motion.div
            className="md:col-span-3 glass px-8 py-10"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center gap-4"
                >
                  <span className="text-5xl">✨</span>
                  <h3 className="font-display text-2xl text-cream-100">Pedido enviado!</h3>
                  <p className="text-sm text-choco-200 font-body max-w-xs">
                    Recebemos sua mensagem e entraremos em contato em breve para confirmar sua encomenda.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-xs text-gold-500 underline underline-offset-2 font-display tracking-wide"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="text-sm text-cream-200 bg-choco-800/50 border border-choco-700 px-4 py-3 text-center font-body"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Nome</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Telefone / WhatsApp</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Mensagem / Pedido</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Descreva o que deseja encomendar, data, quantidade..."
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-center"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.97 }}
                  >
                    {loading ? 'Enviando...' : 'Enviar Pedido'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
