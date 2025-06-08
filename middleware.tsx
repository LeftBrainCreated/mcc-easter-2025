// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware ran:', request.nextUrl.pathname);

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('https://missioncitychurch.com/events'));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Exact match for root
};
