"use client"; 

import { Provider } from "react-redux";
import { store } from "./store";
import { NavMenu } from "../widgets/navMenu/NavMenu";
import { usePathname } from "next/navigation";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showNavMenu = pathname !== "/" && pathname !== "/login";

  return (
    <Provider store={store}>
      <>
        {children}
        {showNavMenu && <NavMenu />}
      </>
    </Provider>
  );
};
