"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { NavMenu } from "../widgets/navMenu/NavMenu";
import { usePathname } from "next/navigation";
import { ConfigProvider } from 'antd';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showNavMenu = pathname !== "/" && pathname !== "/login";

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#84cc16',
          },
        }}
      >
      <div style={{height:"100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        {children}
        {showNavMenu && <NavMenu />}
      </div>
      </ConfigProvider>
    </Provider>
  );
};
