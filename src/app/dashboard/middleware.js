import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(req) {
  const token = req.headers.get('authorization')?.split(' ')[1] || req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};