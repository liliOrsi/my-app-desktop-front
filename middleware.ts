import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/login', '/register'];
const PENDING_ROUTE  = '/pending';
const DEFAULT_REDIRECT = '/dashboard';

export default auth((req) => {
  const { nextUrl } = req;
  const session = req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isPendingRoute = nextUrl.pathname === PENDING_ROUTE;

  // Si el refresh token falló, forzar re-login (solo desde rutas protegidas para evitar loop)
  if (session?.error === 'RefreshTokenError') {
    if (!isPublicRoute && !isPendingRoute) {
      return NextResponse.redirect(new URL('/login', nextUrl));
    }
    return NextResponse.next();
  }

  // Sin sesión en ruta protegida → login
  if (!session && !isPublicRoute && !isPendingRoute) {
    const loginUrl = new URL('/login', nextUrl);
    loginUrl.searchParams.set('callbackUrl', nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Usuario PENDING: solo puede ver /pending
  if (session?.user?.status === 'PENDING' && !isPendingRoute) {
    return NextResponse.redirect(new URL(PENDING_ROUTE, nextUrl));
  }

  // Con sesión activa (sin error, no PENDING) en ruta pública → dashboard
  if (session && !session.error && isPublicRoute && session.user?.status !== 'PENDING') {
    return NextResponse.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo-icon\\.png|.*\\.[a-zA-Z0-9]+$).*)'],
};
