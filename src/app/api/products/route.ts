import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/lib/models/Product'

export const dynamic = 'force-static'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    const filter: Record<string, unknown> = { available: true }
    if (category && category !== 'todos') filter.category = category
    if (search) filter.name = { $regex: search, $options: 'i' }

    const products = await Product.find(filter)
      .sort({ featured: -1, createdAt: -1 })
      .lean()

    return NextResponse.json(products)
  } catch {
    return NextResponse.json([])
  }
}
