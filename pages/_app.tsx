import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
    <Script  
      strategy="lazyOnload"
      async src="https://www.googletagmanager.com/gtag/js?id=G-08KF99X4ZE"></Script>
      <Script strategy="lazyOnload">
      {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-08KF99X4ZE', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics mode={'production'}/>
    </SessionProvider>
    </>
  );
}

export default MyApp;
