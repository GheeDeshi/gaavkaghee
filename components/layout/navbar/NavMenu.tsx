"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Products",
    to: "/products",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "FAQ's",
    to: "/faqs",
  },
];

const NavMenu = () => {
    const patname = usePathname()
  return (
    <div className="w-full h-14 hidden md:flex items-center gap-6 md:px-8 px-4 border-b border-b-slate-200">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.to}
            className={`${patname === link.to ? "text-green-400" : "text-gray-800 hover:text-gray-900"} font-medium`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavMenu;
