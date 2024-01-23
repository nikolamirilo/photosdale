import React from "react";
import { Navbar, Footer } from ".";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content" style={{ minHeight: "100vh" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
