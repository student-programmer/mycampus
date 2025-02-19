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
                    colorBorder: '#111a14'
                },
                components: {
                    Input: {
                        errorActiveShadow: '#F43F5E',
                        activeShadow: '0 0 0 2px #84cc16',
                        marginInlineEnd: "10px",
                        paddingInline: "16px",
                        paddingBlock: '16px',
                        paddingInlineSM: '4px',
                    }
                }
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
