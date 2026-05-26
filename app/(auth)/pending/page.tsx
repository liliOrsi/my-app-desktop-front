'use client';

import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Clock, Mail } from 'lucide-react';
import { BrandPanel } from '@/components/auth/BrandPanel';

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

export default function PendingPage() {
  const { data: session, update } = useSession();
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const token = (session as any)?.accessToken as string | undefined;
      if (!token) return;
      try {
        const res = await fetch(`${API}/auth/status`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const { status } = await res.json();
        if (status === 'ACTIVE') {
          await update({ status: 'ACTIVE' });
          router.push('/dashboard');
        }
      } catch {}
    };
    check();
  }, [session, update, router]);

  return (
    <>
      <BrandPanel />

      <div className="flex-1 flex items-center justify-center p-8 relative">
        {/* Glow de fondo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-full max-w-[360px] flex flex-col gap-8"
        >
          {/* Logo mobile */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="h-9 w-9 rounded-xl border-2 border-accent/30 bg-accent/10 overflow-hidden shadow-[0_0_20px_-4px_rgba(108,99,255,0.5)]">
              <img src="/logo-icon.png" alt="GastoFácil" className="h-full w-full object-cover" />
            </div>
            <span className="font-extrabold text-text tracking-tight">
              Gasto<span className="text-accent-soft">Fácil</span>
            </span>
          </div>

          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-accent-soft" />
            </div>
            <h2 className="text-2xl font-bold text-text tracking-tight">Solicitud en revisión</h2>
            <p className="text-text-dim text-sm mt-0.5">
              Tu cuenta está pendiente de aprobación por el administrador.
            </p>
          </div>

          {/* Info box */}
          <div className="flex flex-col gap-4">
            <div className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 flex items-start gap-3">
              <Mail className="w-4 h-4 text-accent-soft mt-0.5 flex-shrink-0" />
              <p className="text-xs text-text-dim leading-relaxed">
                Recibirás un correo cuando tu solicitud sea revisada. Si ya fuiste aprobado, cerrá sesión e ingresá de nuevo.
              </p>
            </div>

          </div>

          <button
            onClick={async () => { await signOut({ redirect: false }); router.push('/login'); }}
            className="text-xs text-text-dim/40 hover:text-text-dim transition-colors mx-auto"
          >
            Cerrar sesión
          </button>
        </motion.div>
      </div>
    </>
  );
}
