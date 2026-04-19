import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './global.css';

const sans = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const mono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.xvault.fi'),
  title: {
    default: 'xVault Docs',
    template: '%s | xVault Docs',
  },
  description:
    'Documentation for xVault, the Solana protocol for tokenized equity vaults, keeper automation, and VLT rewards.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans">
        <RootProvider theme={{ enabled: false }}>{children}</RootProvider>
      </body>
    </html>
  );
}
