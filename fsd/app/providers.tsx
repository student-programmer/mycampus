"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavMenu } from "../widgets/navMenu/NavMenu";


//сделать так чтобы navMenu не было в Login

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <>
      {children}
      <NavMenu /> 
    </>
  </Provider>
);
