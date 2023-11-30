import { NextResponse } from "next/server"
import data from '@/data.json'
// console.log("🚀 ~ file: route.ts:3 ~ data:", data)

export async function GET(request: Request, context: any) {
  const { params } = context
  console.log("🚀 ~ file: route.ts:7 ~ GET ~ params:", params)
  
  const user = data.filter((user: any) => user.id === Number(params.userId))
  console.log("🚀 ~ file: route.ts:9 ~ GET ~ user:", user)
 
  return NextResponse.json({user})
}