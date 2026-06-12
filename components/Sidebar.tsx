'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, LayoutGroup } from 'framer-motion';
import { LayoutDashboard, ArrowLeftRight, Tag, TrendingUp, Calendar1Icon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const NAV = [
  { href: '/dashboard',     label: 'Dashboard',    icon: LayoutDashboard, color: '#A78BFA', glow: 'rgba(167,139,250,0.5)' },
  { href: '/gastos',        label: 'Gastos',        icon: ArrowLeftRight,  color: '#38BDF8', glow: 'rgba(56,189,248,0.5)'  },
  { href: '/ingresos',      label: 'Ingresos',      icon: TrendingUp,      color: '#34D399', glow: 'rgba(52,211,153,0.5)'  },
  { href: '/categorias',    label: 'Categorías',    icon: Tag,             color: '#FBBF24', glow: 'rgba(251,191,36,0.5)'  },
  { href: '/recordatorios', label: 'Recordatorios', icon: Calendar1Icon,   color: '#F87171', glow: 'rgba(248,113,113,0.5)' },
];

export default function Sidebar() {
  const path = usePathname() || '/';
  const { theme } = useTheme();
  const LIGHT_THEMES = ['light', 'blue', 'daylight', 'frost', 'powder'] as const;
  const isLight = LIGHT_THEMES.includes(theme as typeof LIGHT_THEMES[number]);

  const inactiveColor  = isLight ? '#0D0E1C'            : '#FFFFFF';
  const inactiveFilter = isLight ? 'none'               : 'drop-shadow(0 0 5px rgba(255,255,255,0.4))';
  const hoverBg        = isLight ? 'rgba(0,0,0,0.10)'   : 'rgba(255,255,255,0.10)';

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <LayoutGroup id="mac-dock">
        <div className="pointer-events-auto flex items-center gap-2">
          {NAV.map((item) => {
            const active = path === item.href || path.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link key={item.href} href={item.href} className="group relative">

                {/* Tooltip */}
                <div
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)] opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 whitespace-nowrap rounded-lg px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    background: 'color-mix(in oklab, var(--color-elevated) 95%, transparent)',
                    border: '1px solid var(--color-line-2)',
                    color: 'var(--color-text)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    zIndex: 20,
                  }}
                >
                  {item.label}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full"
                    style={{
                      width: 0, height: 0,
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderTop: '4px solid var(--color-elevated)',
                    }}
                  />
                </div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.18 }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 24 }}
                  className="relative flex items-center justify-center rounded-2xl"
                  style={{ width: 48, height: 48 }}
                >
                  {/* Active bg chip — layoutId handles page transition */}
                  {active && (
                    <motion.div
                      layoutId="dock-chip"
                      className="absolute inset-0 rounded-2xl"
                      style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}

                  {/* Pulse layer — separate so layoutId isn't disrupted */}
                  {active && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        background: [`${item.color}08`, `${item.color}28`, `${item.color}08`],
                        boxShadow: [`0 0 0px ${item.glow}`, `0 0 14px ${item.glow}`, `0 0 0px ${item.glow}`],
                      }}
                      transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}

                  {/* Hover bg (inactive) */}
                  {!active && (
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      style={{ background: hoverBg }}
                    />
                  )}

                  {/* Icon — pulses scale + color + glow when active */}
                  <motion.div
                    animate={active ? {
                      scale:  [1, 1.13, 1],
                      color:  [item.color, item.color + '70', item.color],
                      filter: [
                        `drop-shadow(0 0 3px ${item.glow})`,
                        `drop-shadow(0 0 13px ${item.glow})`,
                        `drop-shadow(0 0 3px ${item.glow})`,
                      ],
                    } : {
                      scale:  1,
                      color:  inactiveColor,
                      filter: inactiveFilter,
                    }}
                    transition={active
                      ? { duration: 1.3, repeat: Infinity, ease: 'easeInOut' }
                      : { duration: 0.15 }
                    }
                    style={{ color: active ? item.color : inactiveColor, filter: active ? undefined : inactiveFilter }}
                    className="relative z-10"
                  >
                    <Icon
                      style={{ width: 22, height: 22 }}
                      strokeWidth={active ? 2.2 : 1.75}
                    />
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}
