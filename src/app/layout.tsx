import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Providers } from './components/Providers';
import { Header } from './components/Header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.locutor.work/'),
  title: 'Locutor',
  description: 'Saiba um pouco mais sobre mim.',
  openGraph: {
    images: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#101010]">
      <body
        className={
          inter.className + ' max-lg:pb-[4rem]'
        }
      >
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
