'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sparkles, LogOut, ChevronDown, Palette } from 'lucide-react';
import { useChatOpen } from './ChatProvider';
import { cn } from '@/lib/utils';
import { useSession, signOut } from 'next-auth/react';
import { useTheme, type Theme } from './ThemeProvider';

/* ── Download URLs ─────────────────────────────────────────── */
const WINDOWS_URL = 'https://github.com/garageMitre/my-app-front-desktop/releases/download/v0.1.1/gastofacil.exe';
const MAC_URL     = 'https://github.com/garageMitre/my-app-front-desktop/releases/download/v0.1.1/GastoFacil-0.1.1.dmg';

function getDownloadInfo() {
  if (typeof window === 'undefined') return { url: WINDOWS_URL, label: 'Windows' };
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes('mac os')) return { url: MAC_URL, label: 'Mac' };
  return { url: WINDOWS_URL, label: 'Windows' };
}

function useDownloadInfo() {
  const [info, setInfo] = useState({ url: WINDOWS_URL, label: 'Windows' });
  useEffect(() => { setInfo(getDownloadInfo()); }, []);
  return info;
}

/* ── USD rate ──────────────────────────────────────────────── */
function useOfficialUsdRate() {
  const [rate, setRate] = useState<number | null>(null);
  useEffect(() => {
    async function fetch_() {
      try {
        const res  = await fetch('https://dolarapi.com/v1/dolares/oficial');
        const data = await res.json();
        setRate(data.venta);
      } catch {}
    }
    fetch_();
    const id = setInterval(fetch_, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);
  return rate;
}

/* ── Page titles ───────────────────────────────────────────── */
const PAGE_TITLES: Record<string, { eyebrow: string; title: string }> = {
  '/dashboard':     { eyebrow: 'Resumen',       title: 'Dashboard'      },
  '/gastos':        { eyebrow: 'Movimientos',   title: 'Gastos'         },
  '/ingresos':      { eyebrow: 'Movimientos',   title: 'Ingresos'       },
  '/categorias':    { eyebrow: 'Configuración', title: 'Categorías'     },
  '/importar':      { eyebrow: 'Importar',      title: 'Datos'          },
  '/recordatorios': { eyebrow: 'Agenda',        title: 'Recordatorios'  },
};

/* ── Theme definitions ─────────────────────────────────────── */
const THEMES: { id: Theme; label: string; desc: string; bg: string; surface: string; dot: string }[] = [
  { id: 'cobalt',   label: 'Cobalt',   desc: 'Slate-blue oscuro · cobalto',   bg: '#131720', surface: '#1B202C', dot: '#3B82F6' },
  { id: 'steel',    label: 'Steel',    desc: 'Slate frío · azure profundo',    bg: '#161B25', surface: '#1F2632', dot: '#2563EB' },
  { id: 'glacier',  label: 'Glacier',  desc: 'Slate claro · sky blue',        bg: '#1A1F2A', surface: '#232A38', dot: '#0EA5E9' },
  { id: 'daylight', label: 'Daylight', desc: 'Blanco limpio · azul clásico',  bg: '#FAFBFD', surface: '#FFFFFF', dot: '#3B82F6' },
  { id: 'frost',    label: 'Frost',    desc: 'Gris-azul frío · azure',        bg: '#EEF2F9', surface: '#F7F9FC', dot: '#2563EB' },
  { id: 'powder',   label: 'Powder',   desc: 'Azul pálido suave · navy',      bg: '#E5ECF6', surface: '#F0F4FB', dot: '#1E40AF' },
];

/* ── Hover tooltip (React state-based, no CSS class needed) ── */
function HoverTooltip({
  children,
  content,
  alignRight = false,
}: {
  children: React.ReactNode;
  content: string;
  alignRight?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function onEnter() {
    timer.current = setTimeout(() => setVisible(true), 250);
  }
  function onLeave() {
    clearTimeout(timer.current);
    setVisible(false);
  }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.span
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.12 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              ...(alignRight ? { right: 0 } : { left: '50%', transform: 'translateX(-50%)' }),
              whiteSpace: 'nowrap',
              padding: '5px 10px',
              borderRadius: '8px',
              background: 'var(--color-card)',
              border: '1px solid var(--color-line-2)',
              color: 'var(--color-text-soft)',
              fontSize: '11px',
              fontWeight: 500,
              boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
              pointerEvents: 'none',
              zIndex: 45,
            }}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Avatar accent ring (inline — always compiled by browser) ─ */
const avatarRingStyle: React.CSSProperties = {
  position: 'absolute',
  inset: '-2px',
  borderRadius: '10px',
  pointerEvents: 'none',
  background: 'conic-gradient(from 140deg, var(--color-accent), var(--color-accent-soft), color-mix(in oklab, var(--color-accent) 30%, transparent), var(--color-accent))',
  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
  mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
  WebkitMaskComposite: 'xor',
  maskComposite: 'exclude',
  padding: '1.5px',
  opacity: 0.85,
};

/* ── User menu ─────────────────────────────────────────────── */
function UserMenu() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [showNewDot, setShowNewDot] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const downloadInfo = useDownloadInfo();
  const router = useRouter();

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  useEffect(() => {
    try {
      if (!localStorage.getItem('gf-new-seen-v1')) setShowNewDot(true);
    } catch {}
  }, []);

  if (!session?.user) return null;

  const name      = session.user.name ?? 'Usuario';
  const email     = session.user.email ?? '';
  const initials  = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const firstName = name.split(' ')[0];
  const currentTheme = THEMES.find(t => t.id === theme) ?? THEMES[0];

  function handleToggle() {
    setOpen(o => !o);
    setHovered(false);
    if (showNewDot) {
      setShowNewDot(false);
      try { localStorage.setItem('gf-new-seen-v1', '1'); } catch {}
    }
  }

  function onEnter() {
    hoverTimer.current = setTimeout(() => setHovered(true), 250);
  }
  function onLeave() {
    clearTimeout(hoverTimer.current);
    setHovered(false);
  }

  return (
    <div ref={ref} style={{ position: 'relative' }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        onClick={handleToggle}
        className={cn(
          'flex items-center gap-2 h-8 pl-1 pr-2.5 rounded-xl border transition-all',
          open
            ? 'border-accent/30 bg-accent/[0.08] text-text'
            : 'border-line bg-white/[0.03] text-text-soft hover:bg-white/[0.05] hover:border-line-2',
        )}
      >
        {/* Avatar with accent ring + new-feature dot */}
        <div style={{ position: 'relative', width: 24, height: 24, borderRadius: 8, flexShrink: 0, display: 'grid', placeItems: 'center', background: 'var(--color-accent-soft, #8B83FF)1a', border: '1px solid' }}
          className="bg-accent/15 border-accent/25"
        >
          <span className="text-[10px] font-bold text-accent-soft leading-none" style={{ position: 'relative', zIndex: 1 }}>
            {initials}
          </span>
          <span style={avatarRingStyle} aria-hidden="true" />
          {showNewDot && (
            <span aria-hidden="true" style={{
              position: 'absolute', top: -3, right: -3,
              width: 8, height: 8, borderRadius: '99px',
              background: 'var(--color-accent)',
              boxShadow: '0 0 0 2px var(--color-bg)',
              zIndex: 2,
              animation: 'avatar-dot-pulse 1.8s ease-out infinite',
            }} />
          )}
        </div>
        <span className="text-xs font-medium hidden md:block max-w-[90px] truncate">
          {firstName}
        </span>
        <ChevronDown className={cn('w-3 h-3 text-text-dim transition-transform duration-200', open && 'rotate-180')} />
      </button>

      {/* Hover tooltip — only when not open */}
      <AnimatePresence>
        {hovered && !open && (
          <motion.span
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.12 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              whiteSpace: 'nowrap',
              padding: '5px 10px',
              borderRadius: '8px',
              background: 'var(--color-card)',
              border: '1px solid var(--color-line-2)',
              color: 'var(--color-text-soft)',
              fontSize: '11px',
              fontWeight: 500,
              boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
              pointerEvents: 'none',
              zIndex: 45,
            }}
          >
            Personalizá los colores · sesión
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-line bg-[var(--color-card)] shadow-2xl shadow-black/60 overflow-hidden z-50"
          >
            {/* User info */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-line">
              <div style={{ position: 'relative', width: 32, height: 32, borderRadius: 12, flexShrink: 0, display: 'grid', placeItems: 'center' }}
                className="bg-accent/15 border border-accent/25"
              >
                <span className="text-sm font-bold text-accent-soft" style={{ position: 'relative', zIndex: 1 }}>{initials}</span>
                <span style={{ ...avatarRingStyle, borderRadius: '12px' }} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-text truncate">{name}</p>
                <p className="text-[10px] text-text-dim truncate mt-0.5">{email}</p>
              </div>
            </div>

            {/* Theme picker */}
            <div className="px-3 py-2.5 border-b border-line">
              <div className="flex items-center gap-1.5 px-1 mb-2">
                <Palette className="w-3 h-3 text-text-dim" />
                <span className="text-[9px] font-semibold text-text-dim uppercase tracking-widest">Tema</span>
              </div>
              {/* Current theme label */}
              <div className="px-1 pb-2 mb-2 border-b border-dashed border-line">
                <p className="text-[9px] font-bold uppercase tracking-widest text-text-dim">Seleccionado</p>
                <p className="text-[13px] font-bold text-text leading-tight mt-0.5">{currentTheme.label}</p>
                <p className="text-[10px] text-text-muted">{currentTheme.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    title={t.label}
                    className={cn(
                      'flex flex-col items-center gap-1 p-1.5 rounded-xl border transition-all',
                      theme === t.id
                        ? 'border-accent/50 bg-accent/[0.08]'
                        : 'border-line hover:border-line-2 hover:bg-white/[0.04]',
                    )}
                  >
                    <div
                      className="w-full h-5 rounded-md overflow-hidden flex gap-px p-0.5"
                      style={{ background: t.bg }}
                    >
                      <div className="flex-1 rounded-sm" style={{ background: t.surface }} />
                      <div className="w-1 self-end h-2 rounded-sm" style={{ background: t.dot }} />
                    </div>
                    <span className={cn(
                      'text-[9px] font-medium leading-none',
                      theme === t.id ? 'text-accent-soft' : 'text-text-dim',
                    )}>
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Download */}
            <a
              href={downloadInfo.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-text-soft hover:text-text hover:bg-white/[0.04] transition-colors border-b border-line"
            >
              <Download className="w-3.5 h-3.5 text-text-dim" />
              <span>Descargar para {downloadInfo.label}</span>
            </a>

            {/* Sign out */}
            <button
              onClick={async () => { await signOut({ redirect: false }); router.push('/login'); }}
              className="w-full flex items-center gap-2.5 px-4 py-3 text-xs text-text-soft hover:text-danger hover:bg-danger/[0.07] transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Cerrar sesión
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── TopBar ────────────────────────────────────────────────── */
export default function TopBar() {
  const path             = usePathname() || '/dashboard';
  const meta             = PAGE_TITLES[path] ?? { eyebrow: 'App', title: 'GastoFácil' };
  const { open, toggle } = useChatOpen();
  const usdRate          = useOfficialUsdRate();
  const [aiHover, setAiHover] = useState(false);

  return (
    <header
      className="flex-shrink-0 h-14 flex items-center px-5 gap-3 border-b border-line relative z-30"
      style={{ background: 'var(--topbar-bg)', backdropFilter: 'blur(20px)' }}
    >
      {/* hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-3 group shrink-0">
        <div className="relative h-9 w-9 overflow-hidden rounded-xl border-2 border-accent/30 bg-accent/10 shadow-[0_0_18px_-6px_rgba(108,99,255,0.6)]">
          <img src="/logo-icon.png" alt="GastoFácil" className="h-full w-full object-cover" />
        </div>
        <div className="leading-none hidden sm:block">
          <p className="text-text font-extrabold text-[15px] tracking-tight">
            Gasto<span className="text-accent-soft">Fácil</span>
          </p>
        </div>
      </Link>

      {/* divider */}
      <div className="w-px h-5 bg-line shrink-0" />

      {/* Breadcrumb */}
      <motion.div
        key={path}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.22 }}
        className="flex items-center gap-1.5 min-w-0"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-dim font-semibold shrink-0">
          {meta.eyebrow}
        </span>
        <span className="text-text-dim/50 text-xs">/</span>
        <span className="text-text-soft text-sm font-semibold truncate">{meta.title}</span>
      </motion.div>

      <div className="flex-1" />

      {/* USD rate pill */}
      {usdRate !== null && (
        <HoverTooltip content="Dólar oficial · venta (dolarapi)">
          <UsdPill rate={usdRate} />
        </HoverTooltip>
      )}

      {/* AI chat toggle pill */}
      <HoverTooltip content="Asistente IA">
        <AiPill open={open} onToggle={toggle} />
      </HoverTooltip>

      {/* User menu (includes theme picker + download) */}
      <UserMenu />
    </header>
  );
}

/* ── USD Pill ──────────────────────────────────────────────── */
function UsdPill({ rate }: { rate: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        height: 32,
        padding: '0 10px',
        borderRadius: 12,
        border: `1px solid color-mix(in oklab, var(--color-success) ${hov ? 45 : 25}%, transparent)`,
        background: 'linear-gradient(135deg, color-mix(in oklab, var(--color-success) 12%, transparent), color-mix(in oklab, var(--color-success) 4%, transparent))',
        fontSize: 12,
        cursor: 'default',
        transition: 'border-color .15s, box-shadow .15s, transform .15s',
        transform: hov ? 'translateY(-1px)' : 'none',
        boxShadow: hov ? '0 0 18px -4px color-mix(in oklab, var(--color-success) 35%, transparent)' : 'none',
        userSelect: 'none',
      }}
    >
      <span style={{
        width: 6, height: 6, borderRadius: '99px', flexShrink: 0,
        background: 'var(--color-success)',
        boxShadow: '0 0 6px var(--color-success)',
        animation: 'usd-pulse 2s ease-in-out infinite',
      }} />
      <span style={{ color: 'var(--color-success)', fontWeight: 700, letterSpacing: '0.06em' }}>USD</span>
      <span className="num" style={{ color: 'var(--color-text)', fontWeight: 700 }}>
        ${rate.toLocaleString('es-AR')}
      </span>
    </div>
  );
}

/* ── AI Pill ───────────────────────────────────────────────── */
function AiPill({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const [hov, setHov] = useState(false);

  const borderAlpha  = open ? 40  : hov ? 50 : 25;
  const bgAlpha      = open ? 15  : 18;
  const bgAlpha2     = open ? 8   : 6;

  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={open ? 'Cerrar asistente' : 'Abrir asistente'}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 32,
        padding: '0 12px 0 10px',
        borderRadius: 12,
        border: `1px solid color-mix(in oklab, var(--color-accent) ${borderAlpha}%, transparent)`,
        background: `linear-gradient(135deg, color-mix(in oklab, var(--color-accent) ${bgAlpha}%, transparent), color-mix(in oklab, var(--color-accent) ${bgAlpha2}%, transparent))`,
        color: hov ? 'var(--color-text)' : 'var(--color-accent-soft)',
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'border-color .15s, color .15s, box-shadow .15s, transform .15s',
        transform: hov ? 'translateY(-1px)' : 'none',
        boxShadow: open || hov ? '0 0 18px -4px var(--color-accent-glow)' : 'none',
      }}
    >
      {/* shine sweep */}
      <span aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(120deg, transparent 0%, color-mix(in oklab, var(--color-accent) 28%, transparent) 50%, transparent 100%)',
        animation: 'ai-shine 4.5s ease-in-out infinite',
      }} />
      <Sparkles style={{ width: 14, height: 14, position: 'relative', zIndex: 1 }} />
      <span style={{ position: 'relative', zIndex: 1 }}>IA</span>
    </button>
  );
}
