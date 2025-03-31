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
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    </head>
    <body>
    <AppProviders>
      { children }
    </AppProviders>
    </body>
    </html>
  );
}
