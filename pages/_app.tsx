// pages/_app.tsx
import '@/styles/fonts.css';
import '@/styles/site.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
