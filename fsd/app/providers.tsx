'use client';

import { ConfigProvider } from 'antd';

import React from 'react';

export const AppProviders = ({children}: { children: React.ReactNode }) => {

    return (
        <ConfigProvider
            theme={ {
                token: {
                    colorPrimary: '#84cc16',
                    colorBorder: '#111a14',
                },
                components: {
                    Input: {
                        errorActiveShadow: '#F43F5E',
                        activeShadow: '0 0 0 2px #84cc16',
                        paddingInline: 16,
                        paddingBlock: 16,
                        paddingInlineSM: 4,
                    },
                    Select: {
                        activeBorderColor: '#84cc16',
                        colorError: '#ff4d4f',
                        colorErrorHover: '#ff4d4f',
                    },
                },
            } }
        >
            { children }
        </ConfigProvider>
    );
};
