import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

// Railway corre Next.js en localhost:8080 internamente, por lo que trustHost
// detecta el host incorrecto. AUTH_URL lo fuerza al dominio público.
if (!process.env.AUTH_URL && process.env.NEXT_PUBLIC_WEB_URL) {
  process.env.AUTH_URL = process.env.NEXT_PUBLIC_WEB_URL;
}

const config: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const res = await fetch(`${API}/auth/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) return null;

          const data = await res.json();
          return {
            id: data.user.id,
            name: `${data.user.firstName} ${data.user.lastName}`,
            email: data.user.email,
            role: data.user.role,
            status: data.user.status,
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            expiresAt: data.expires_at,
          };
        } catch {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      // Session update (e.g. status re-check from pending page)
      if (trigger === 'update' && session?.status) {
        token.status = session.status;
        return token;
      }

      // Credentials login
      if (user) {
        token.id           = user.id;
        token.role         = user.role;
        token.status       = user.status;
        token.accessToken  = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiresAt    = user.expiresAt;
      }

      // Google login: exchange id_token with our backend
      if (account?.provider === 'google' && account.id_token) {
        try {
          const res = await fetch(`${API}/auth/google/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id_token: account.id_token }),
          });

          if (res.ok) {
            const data = await res.json();
            token.id           = data.user.id;
            token.role         = data.user.role;
            token.status       = data.user.status;
            token.accessToken  = data.access_token;
            token.refreshToken = data.refresh_token;
            token.expiresAt    = data.expires_at;
          } else {
            const body = await res.text().catch(() => '');
            console.error('[Google auth] backend error:', res.status, body);
            token.error = 'GoogleAuthError';
          }
        } catch (e) {
          console.error('[Google auth] fetch failed:', e);
          token.error = 'GoogleAuthError';
        }
      }

      // Si el access token expiró, hacer refresh
      if (token.expiresAt && Date.now() > new Date(token.expiresAt as string).getTime()) {
        try {
          const res = await fetch(`${API}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token: token.refreshToken }),
          });

          if (res.ok) {
            const data = await res.json();
            token.accessToken = data.access_token;
            token.expiresAt   = new Date(Date.now() + 30 * 60 * 1000).toISOString();
            token.error       = undefined;
          } else {
            token.error = 'RefreshTokenError';
          }
        } catch {
          token.error = 'RefreshTokenError';
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id      = token.id as string;
      session.user.role    = token.role as string;
      session.user.status  = token.status as string;
      session.accessToken  = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.expiresAt    = token.expiresAt as string;
      session.error        = token.error as string | undefined;
      return session;
    },
  },

  pages: {
    signIn: '/login',
  },

  session: { strategy: 'jwt' },

  trustHost: true,
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
