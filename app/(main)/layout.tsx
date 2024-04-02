import Navbar from "@/components/layout/navbar";
import NavMenu from "@/components/layout/navbar/NavMenu";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <NavMenu />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
