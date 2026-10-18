import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Priyanka Sunil Kadam | Computer Engineer',
  description: 'Portfolio of a Computer Engineer focused on software engineering, full-stack development, and practical product problem solving.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Priyanka Sunil Kadam | Computer Engineer',
    description: 'Portfolio of a Computer Engineer focused on software engineering, full-stack development, and practical product problem solving.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050816] text-white">{children}</body>
    </html>
  );
}
