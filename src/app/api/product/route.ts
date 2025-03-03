import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  console.log(res, req);
  const result = await prisma.product.findMany({ include: { images: true } });

  return NextResponse.json({ data: result });
}
