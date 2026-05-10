import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
import connectDB from '@/lib/mongodb'
import Product from '@/lib/models/Product'

const seedProducts = [
  {
    name: 'Bolo de Chocolate Belga',
    description:
      'Camadas úmidas de massa de cacau intenso com ganache cremosa e raspas de chocolate belga 70%.',
    price: 85,
    category: 'Bolos',
    emoji: '🎂',
    featured: true,
    available: true,
  },
  {
    name: 'Bolo Red Velvet',
    description:
      'Massa aveludada em vermelho profundo coberta com cream cheese suave e decoração delicada.',
    price: 90,
    category: 'Bolos',
    emoji: '🎂',
    featured: true,
    available: true,
  },
  {
    name: 'Bolo de Cenoura com Ganache',
    description:
      'Bolo de cenoura fofinho com calda generosa de chocolate amargo derretido na hora.',
    price: 72,
    category: 'Bolos',
    emoji: '🎂',
    featured: false,
    available: true,
  },
  {
    name: 'Torta de Morango',
    description:
      'Base crocante de massa sablée com creme de confeiteiro e morangos frescos selecionados.',
    price: 75,
    category: 'Tortas',
    emoji: '🍰',
    featured: false,
    available: true,
  },
  {
    name: 'Torta Mousse de Maracujá',
    description:
      'Mousse aerado de maracujá fresco sobre base de biscoito com calda azeda e adocicada.',
    price: 80,
    category: 'Tortas',
    emoji: '🍰',
    featured: true,
    available: true,
  },
  {
    name: 'Torta de Limão Siciliano',
    description:
      'Creme azedo de limão siciliano sobre base amanteigada, coberta com merengue tostado.',
    price: 78,
    category: 'Tortas',
    emoji: '🍰',
    featured: false,
    available: true,
  },
  {
    name: 'Brigadeiro Gourmet',
    description:
      'Caixa com 12 unidades de brigadeiro artesanal com chocolate belga e cacau em pó premium.',
    price: 45,
    category: 'Doces',
    emoji: '🍫',
    featured: false,
    available: true,
  },
  {
    name: 'Trufas de Chocolate',
    description:
      'Caixa com 9 trufas recheadas com ganache de chocolate amargo, avelã ou caramelo salgado.',
    price: 55,
    category: 'Doces',
    emoji: '🍫',
    featured: true,
    available: true,
  },
  {
    name: 'Beijinho de Coco',
    description:
      'Caixa com 12 unidades de beijinho tradicional com coco ralado fresco e cravo decorativo.',
    price: 38,
    category: 'Doces',
    emoji: '🍫',
    featured: false,
    available: true,
  },
  {
    name: 'Cupcake Red Velvet',
    description:
      'Caixa com 6 cupcakes red velvet com cobertura de cream cheese e pérolas comestíveis.',
    price: 48,
    category: 'Cupcakes',
    emoji: '🧁',
    featured: false,
    available: true,
  },
  {
    name: 'Cupcake de Limão Siciliano',
    description:
      'Caixa com 6 cupcakes de limão com cobertura de merengue e raspas de limão siciliano.',
    price: 42,
    category: 'Cupcakes',
    emoji: '🧁',
    featured: false,
    available: true,
  },
  {
    name: 'Cupcake de Nutella',
    description:
      'Caixa com 6 cupcakes recheados com Nutella e cobertura de chantilly de chocolate.',
    price: 52,
    category: 'Cupcakes',
    emoji: '🧁',
    featured: true,
    available: true,
  },
  {
    name: 'Pudim de Leite Condensado',
    description:
      'Pudim clássico com textura sedosa e calda de caramelo dourado, receita artesanal.',
    price: 35,
    category: 'Pudins',
    emoji: '🍮',
    featured: false,
    available: true,
  },
  {
    name: 'Pavê de Chocolate',
    description:
      'Camadas de biscoito champagne, creme de chocolate e chantilly. Serve até 10 pessoas.',
    price: 65,
    category: 'Pudins',
    emoji: '🍮',
    featured: false,
    available: true,
  },
]

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Não disponível em produção' }, { status: 403 })
  }

  await connectDB()
  await Product.deleteMany({})
  const created = await Product.insertMany(seedProducts)
  return NextResponse.json({ ok: true, count: created.length })
}
