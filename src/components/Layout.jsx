import React from "react";
import { LanguageChangerProvider } from "../utils/LanguageChanger";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <LanguageChangerProvider>
      <Header />
      {children}
      <Footer />
    </LanguageChangerProvider>
  );
};

export default Layout;
