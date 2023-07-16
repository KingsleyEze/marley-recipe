import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Providers } from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marley Recipe',
  description: 'Fresh recipe from nature',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ErrorBoundary>
        <Providers>
          <ThemeRegistry>
            <body className={inter.className}>{children}</body>
          </ThemeRegistry>
        </Providers>
      </ErrorBoundary>
    </html>
  );
}
