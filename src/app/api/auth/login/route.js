import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Simulasi database dengan akun statis
const users = [
  { email: 'arria@contoh.com', password: 'arria123' },
  { email: 'alfy@contoh.com', password: 'alfy123' },
];

export async function POST(req) {
  const { email, password } = await req.json();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return NextResponse.json({ token, message: 'Login successful' });
}