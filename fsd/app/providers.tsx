"use client";

import { NavMenu } from "../widgets/navMenu/NavMenu";
import { usePathname } from "next/navigation";
import { ConfigProvider } from 'antd';
import React from "react";

export const AppProviders = ({children}: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const showNavMenu = pathname !== "/" && pathname !== "/login";

    return (
        <ConfigProvider
            theme={ {
                token: {
                    colorPrimary: '#84cc16',
                },
            } }
        >
            <div style={ {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            } }>
                { children }
                { showNavMenu && <NavMenu/> }
            </div>
        </ConfigProvider>
    );
};
