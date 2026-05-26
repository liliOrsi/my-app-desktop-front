import { getSession } from 'next-auth/react';

export async function authFetch(url: string, init?: RequestInit): Promise<Response> {
  const session = await getSession();
  const token = (session as any)?.accessToken as string | undefined;

  return fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init?.headers,
    },
  });
}
