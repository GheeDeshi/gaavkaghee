import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import ClientOnly from "@/components/layout/ClientOnly";
import AddBannerModal from "./_components/Banner/AddBannerModal";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClientOnly>
        <AddBannerModal />
      </ClientOnly>
      <div className="flex">
        <Sidebar />
        <div className="md:ml-auto md:w-[calc(100%_-_18rem)] w-full min-h-screen">
          <Header />
          <div className="p-4 bg-gray-50 h-[calc(100%_-_56px)]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
