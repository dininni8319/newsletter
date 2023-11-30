import { NextResponse } from "next/server";

export async function  GET() {
  return NextResponse.json(
    {user: {
      "name": "John Doe",
      "age": 24,
      "address": "123 Fake St.",
      "phone": "555-555-5555"
    }}
  )
}

export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({data})
}

export async function PATCH() {
  return NextResponse.json(
    {message: "hello world"}
  )
}

export async function DELETE() {
  return NextResponse.json(
    {message: "hello world"}
  )
}