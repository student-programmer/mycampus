import '../fsd/app/style/global.scss';
import { AppProviders } from '@/fsd/app/providers';
import React from "react";
import Head from "next/head";


export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <head>
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PQHD2VW5');</script>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    </head>
    <body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQHD2VW5"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <AppProviders>
      { children }
    </AppProviders>
    </body>
    </html>
  );
}
