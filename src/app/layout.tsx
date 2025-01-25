import { BackToTop } from '@/components/backToTop';
import { Box, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata, Viewport } from 'next';
import { Quicksand } from 'next/font/google';
import theme from '../theme';
import Footer from './footer';
import './global.css';
import Header from './header';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

const quicksand = Quicksand({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const viewport: Viewport = {
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  title: {
    template: "%s | Slijeff's Realm",
    default: "Slijeff's Realm",
  },
  metadataBase: new URL(`${process.env.PRODUCTION_METADATA_BASE}`),
  icons: {
    icon: '/favicon.ico',
  },
  description: 'A personal website of Slijeff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="system">
            <CssBaseline />
            <Header />
            <Box
              width={{ xs: '90%', sm: '70%', lg: '40%' }}
              margin={'auto'}
              padding={2}
              overflow={'hidden'}
            >
              <InitColorSchemeScript attribute="class" />
              <main>{children}</main>
            </Box>
            <BackToTop />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
