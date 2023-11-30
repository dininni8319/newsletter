import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {products: 
      [
        {
          "name": "Mac Catalina",
          "quantity": 2,
          "address": "neumünsterstrasse 26",
          "phone": "000-000-000"
        }
      ]
    }
  )
}