import type { AppProps } from 'next/app';
import "./globals.css";

function RedirectApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default RedirectApp;