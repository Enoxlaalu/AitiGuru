import type { AuthResponse } from '@/types';

const BASE = 'https://dummyjson.com/auth/login';

export async function login(username: string, password: string): Promise<AuthResponse> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, expiresInMins: 60 }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { message?: string };
    throw new Error(err.message ?? 'Неверный логин или пароль');
  }

  return res.json() as Promise<AuthResponse>;
}
