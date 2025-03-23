import '../fsd/app/style/global.scss';
import { AppProviders } from '@/fsd/app/providers';
import React from "react";


export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <AppProviders>
                    <>
                        { children }
                    </>
                </AppProviders>
            </body>
        </html>
    );
}
