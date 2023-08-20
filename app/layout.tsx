import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import clsx from 'clsx';
import Footer from '@/components/footer';
import { FC } from 'react';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface Props {
  children: React.ReactNode;
}
const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col h-screen'>
            <Navbar />
            <main className='container mx-auto px-12 flex-grow'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
