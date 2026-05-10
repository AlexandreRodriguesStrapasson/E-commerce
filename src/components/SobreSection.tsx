'use client'

import { motion } from 'framer-motion'

const values = [
  { emoji: '🌾', label: 'Ingredientes Selecionados', desc: 'Trabalhamos apenas com matérias-primas de qualidade, escolhidas com rigor.' },
  { emoji: '🤲', label: 'Feito à Mão', desc: 'Cada peça é preparada artesanalmente, com atenção a cada detalhe.' },
  { emoji: '✨', label: 'Para Toda Ocasião', desc: 'Casamentos, aniversários, confraternizações ou um mimo pessoal.' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 70, damping: 18 } },
}

export function SobreSection() {
  return (
    <section id="sobre" className="py-32 px-6 bg-choco-950 relative overflow-hidden">

      {/* Blob decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-600 text-[10px] tracking-[0.5em] uppercase font-display">
              Nossa história
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream-100 mb-6">
            Sobre a <span className="text-gradient-gold">Confeitaria Auri</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-choco-200 text-lg leading-relaxed mb-6">
              A Confeitaria Auri nasceu do sonho de transformar momentos simples em memórias afetivas.
              Fundada com a missão de levar arte e sabor à mesa de cada família, nossa confeitaria
              une técnica apurada à criatividade.
            </p>
            <p className="font-body text-choco-300 leading-relaxed mb-6">
              Cada receita é desenvolvida com cuidado, equilibrando sabores tradicionais com toques
              contemporâneos. Do bolo de aniversário à caixa de trufas de presente, tratamos cada
              encomenda como única.
            </p>
            <p className="font-body text-choco-300 leading-relaxed">
              Trabalhamos com encomendas personalizadas e pronta-entrega, atendendo toda a cidade
              com o compromisso de qualidade que nos define.
            </p>
          </motion.div>

          <motion.div
            className="glass p-10 flex flex-col gap-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center mb-2">
              <span className="font-script text-5xl text-cream-200">Auri</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: '5+', label: 'Anos de experiência' },
                { num: '2k+', label: 'Pedidos entregues' },
                { num: '100%', label: 'Feito artesanalmente' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl text-gold-400 mb-1">{num}</p>
                  <p className="text-[10px] uppercase tracking-widest text-choco-300 font-display">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {values.map(({ emoji, label, desc }) => (
            <motion.div key={label} variants={itemVariants} className="glass p-8 text-center">
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-display text-lg text-cream-100 mb-3">{label}</h3>
              <p className="text-sm text-choco-300 font-body leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
