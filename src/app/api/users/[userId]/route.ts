import { NextResponse } from "next/server"
import data from '@/data.json'
// console.log("🚀 ~ file: route.ts:3 ~ data:", data)

export async function GET(request: Request, context: any) {
  const { params } = context
  
  const user = data.filter((user: any) => user.id === Number(params.userId))
 
  return NextResponse.json({user})
}