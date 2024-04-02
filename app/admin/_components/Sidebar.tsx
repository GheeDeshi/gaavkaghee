"use client";

import useSidebarStore from "@/store/sidebar-store";
import Logo from "@/components/layout/Logo";
import { sidebarLinks } from "@/constants";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return isMobile ? <MobileSidebar /> : <DeskTopSidebar />;
};

export default Sidebar;

const MobileSidebar = () => {
  const pathname = usePathname();
  const { open, onClose } = useSidebarStore();

  return (
    <div
      className={`fixed inset-0 h-screen  transition duration-300 shadow bg-black/10 z-50 ${open ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-[700px]"}`}
    >
      <div className="bg-white w-72 shadow h-screen overflow-y-auto scroll rounded-r-lg">
        <div className="h-14 border-b border-b-gray-100 flex items-center justify-between px-4">
          <Logo path="/admin" />
          <button>
            <X size={18} onClick={onClose} />
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-6 px-4">
          {sidebarLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`flex items-center gap-2 hover:bg-primary-foreground transition duration-300 h-11 px-2 rounded ${
                pathname === link.path ? "bg-primary-foreground" : ""
              }`}
            >
              <link.icon size={20} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const DeskTopSidebar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed top-0 botom-0 left-0 h-screen  w-72 shadow bg-white z-50 overflow-y-auto scroll`}
    >
      <div className="h-14 border-b border-b-gray-100 flex items-center px-4">
        <Logo path="/admin" />
      </div>
      <div className="flex flex-col gap-2 mt-6 px-4">
        {sidebarLinks.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`flex items-center gap-2 hover:bg-primary-foreground transition duration-300 h-11 px-2 rounded ${
              pathname === link.path ? "bg-primary-foreground" : ""
            }`}
          >
            <link.icon size={20} />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
