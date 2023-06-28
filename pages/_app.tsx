import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      
    <SessionProvider session={session}>
      {/* <Script  
        strategy="lazyOnload"
        async src="https://www.googletagmanager.com/gtag/js?id=G-08KF99X4ZE"></Script>
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-08KF99X4ZE');
        `}
      </Script> */}
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-53TC9GP');`}}></Script>
      <Component {...pageProps} />
      <Analytics mode={'production'}/>
    </SessionProvider>
    </>
  );
}

export default MyApp;
