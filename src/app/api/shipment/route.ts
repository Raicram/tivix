import { Rebrickable } from '@/types/types'
import { NextResponse } from 'next/server'

 
export async function POST(request: Request) {
    const data: Rebrickable.ShippingFormData = await request.json();

    if(!data) return NextResponse.json({ "message": "failure" })
    
    return NextResponse.json({ "message": "success"})
}