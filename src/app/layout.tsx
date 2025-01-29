import '@/styles/globals.css';

import { Work_Sans } from 'next/font/google';
import { type Metadata } from 'next';
import dynamic from 'next/dynamic';

import { TRPCReactProvider } from '@/trpc/react';
import { ThemeProvider } from 'next-themes';
import { Provider as JotaiProvider } from 'jotai';
import ThemeButton from './_components/ui/ThemeButton';

const Message = dynamic(() => import('@/app/_components/ui/Message'));

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
              <div className="min-h-screen bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
                <main role="main" className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
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
