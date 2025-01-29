import '@/styles/globals.css';

import { Work_Sans } from 'next/font/google';
import { type Metadata } from 'next';
import dynamic from 'next/dynamic';

import { TRPCReactProvider } from '@/trpc/react';
import { ThemeProvider } from 'next-themes';
import { Provider as JotaiProvider } from 'jotai';
import ThemeButton from './_components/ui/ThemeButton';

const Message = dynamic(() => import('@/app/_components/ui/Message'), { ssr: false });

export const metadata: Metadata = {
  title: 'CineMate',
  description: 'Movies, together.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const worksans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600'], // Add specific weights if needed
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={worksans.className}>
      <body>
        <ThemeProvider attribute="class">
          <JotaiProvider>
            <TRPCReactProvider>
              <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
                <main role="main" className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                  {children}
                </main>
                <footer>
                  <ThemeButton />
                </footer>
                <Message />
              </div>
            </TRPCReactProvider>
          </JotaiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
