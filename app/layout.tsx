import type { Metadata } from 'next';
import './globals.css';
import { ConditionalAppShell } from '@/components/ConditionalAppShell';
import { SessionWrapper } from '@/components/SessionWrapper';
import { ThemeWrapper } from '@/components/ThemeProvider';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'GastoFácil',
  description: 'Control de gastos personal',
  icons: { icon: '/logo-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={cn("h-full", "font-sans", geist.variable)}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('gf-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();` }} />
      </head>
      <body className="flex flex-col h-screen overflow-hidden bg-bg text-text antialiased relative">
        <ThemeWrapper>
          <SessionWrapper>
            <ConditionalAppShell>{children}</ConditionalAppShell>
          </SessionWrapper>
        </ThemeWrapper>
      </body>
    </html>
  );
}
