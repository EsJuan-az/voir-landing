// /app/api/newsletter-form/route.ts

import { NextResponse } from "next/server"
import { z } from "zod"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DB_CNN,
})

const schema = z.object({
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  name: z.string().min(1, { message: 'El nombre es obligatorio' }),
  birthday: z.string().min(1, { message: 'La fecha de nacimiento es obligatoria' }),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, birthday } = schema.parse(body)

    await pool.query(
      `INSERT INTO newsletter_subscribers (name, email, birthday)
       VALUES ($1, $2, $3)`,
      [name, email, birthday || null]
    )

    return NextResponse.json({ message: "Subscription successful" }, { status: 200 })
  } catch (error) {
    console.error("Error saving subscriber:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 400 })
  }
}