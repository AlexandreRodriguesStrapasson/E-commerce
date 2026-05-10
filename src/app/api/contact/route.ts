import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Contact from '@/lib/models/Contact'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json()

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 })
    }

    await connectDB()
    await Contact.create({ name, phone, message })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erro ao enviar mensagem.' }, { status: 500 })
  }
}
