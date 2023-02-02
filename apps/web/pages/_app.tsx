import '~/styles/globals.css';
// include styles from the ui package

import type { AppProps } from 'next/app';
import { ThemeProvider } from '~/components/theme-provider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
