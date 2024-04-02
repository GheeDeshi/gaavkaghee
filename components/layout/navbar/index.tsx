"use client";

import React, { useCallback, useState } from "react";
import Logo from "../Logo";
import Searchbar from "../Searchbar";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "@/components/ui/button";
import {
  Home,
  Menu as MenuIcon,
  Search,
  ShoppingCart,
  UserRound,
  UserRoundCog,
} from "lucide-react";
import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Menu from "./Menu";

const Navbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const debouncedSearch = useDebounce(setSearchTerm);

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);


  return (
    <>
      <header className="w-full md:px-8 px-4 h-16 border-b border-slate-200 z-50 bg-white flex items-center justify-between md:gap-6 gap-4">
        <Button size="icon" className="md:hidden lock">
          <Search size={22} />
        </Button>
        <Logo />
        <div className="md:block hidden max-w-xl w-full">
          <Searchbar value={searchTerm} setValue={setSearchTerm} />
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => router.push("/cart")}
            size="icon"
            className="relative"
          >
            <ShoppingCart size={24} />
            <span className="bg-red-600 text-white w-4 h-4 rounded-full absolute right-0 top-1 flex items-center justify-center text-[10px]">
              0
            </span>
          </Button>
          <div className="md:flex items-center gap-3 hidden">
            <Button
              onClick={() => router.push("/login")}
              variant="primary"
              className="rounded-full"
            >
              <UserRound size={18} />
              <span className="ml-1">Login</span>
            </Button>

            <Button
              onClick={() => router.push("/register")}
              variant="secondary"
              className="rounded-full"
            >
              <UserRoundCog size={18} />
              <span className="ml-1">Register</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 w-full h-14 border-t border-t-slate-200 md:hidden  flex items-center px-4">
        <div className="flex items-center justify-between w-full z-50 bg-white">
          <Button onClick={toggleOpen} size="icon" className="flex flex-col text-green-400">
            <MenuIcon />
            <span className="text-xs font-normal">Menu</span>
          </Button>
          <Button
            onClick={() => router.push("/")}
            size="icon"
            className="flex flex-col text-green-400"
          >
            <Home />
            <span className="text-xs font-normal">Home</span>
          </Button>

          <Button
            onClick={() => router.push("/products")}
            size="icon"
            className="flex flex-col text-green-400"
          >
            <BsHandbag size="24" />
            <span className="text-xs font-normal">Products</span>
          </Button>
          <Button
            onClick={() => router.push("/profile")}
            size="icon"
            className="flex flex-col text-green-400"
          >
            <UserRound />
            <span className="text-xs font-normal">Account</span>
          </Button>
        </div>
      </div>

      {open && <Menu open={open} onClose={toggleOpen} />}
    </>
  );
};

export default Navbar;
