"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { UserRound, UserRoundCog, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

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

const Menu = ({ open, onClose }: Props) => {
  const router = useRouter();

 const handleClose = () => {
    setTimeout(() => {
        onClose()
    }, 200)
 }
  return (
    <div className="fixed inset-0 z-50 bg-black/30">
      <div className="fixed left-0 top-0 bottom-0 h-screen w-72 bg-white rounded-r-lg">
        <X
          className="absolute right-4 top-4 cursor-pointer"
          size={20}
          onClick={onClose}
        />

        <div className="flex flex-col gap-4 mt-8 px-4">
          {links.map((link, index) => (
            <Link
              onClick={handleClose}
              href={link.to}
              key={index}
              className="font-medium cursor-default"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-8 px-4 justify-center">
          <Button
            onClick={() => {
              router.push("/login");
              handleClose();
            }}
            variant="primary"
            className="rounded-full w-full"
          >
            <UserRound size={18} />
            <span className="ml-1">Login</span>
          </Button>

          <Button
            onClick={() => {
              router.push("/register");
              handleClose();
            }}
            variant="secondary"
            className="rounded-full w-full"
          >
            <UserRoundCog size={18} />
            <span className="ml-1">Register</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
