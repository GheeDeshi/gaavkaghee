import React from "react";
import Logo from "./Logo";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-50 grid md:grid-cols-3 gap-6 md:px-8 px-4 py-10">
      <div className="flex flex-col gap-10">
        <div>
          <Logo />

          <div className="mt-4">
            <h3 className="font-semibold">AR Ayurveda Private Limited</h3>
            <p>
              FF 14, Ujala Avenue, Sarkhej Road,Vishala, Ahmedabad Gujarat (
              INDIA ) {"-"} 380055
            </p>
            <h3 className="font-bold">+91 2345678987</h3>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <Phone className="text-orange-400" />
            <span className="text-lg font-bold">+91 2345678989</span>
          </div>
          <p className="text-sm mt-2">
            Monday {"-"} Saturday:{" "}
            <span className="font-semibold">09:30 AM - 6:30 PM</span>
          </p>

          <div className="w-full h-[1px] bg-slate-300 rounded my-3"></div>

          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span className="opacity-70 text-sm">contact@spices.com</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <h3 className="font-bold mb-4">Information</h3>

          <ul className="list-none">
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 hover:bg-slate-100"
              >
                About Us
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className="block py-2 px-4 hover:bg-slate-100"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-slate-100"
              >
                Privacy Policy
              </a>
            </li> */}
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 hover:bg-slate-100"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="block py-2 px-4 hover:bg-slate-100">
                FAQ`&#39;s
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">User Information</h3>

          <ul className="list-none">
            <li>
              <Link
                href="/profile"
                className="block py-2 px-4 hover:bg-slate-100"
              >
                Profile
              </Link>
            </li>

            <li>
              <Link
                href="/orders"
                className="block py-2 px-4 hover:bg-slate-100"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/address"
                className="block py-2 px-4 hover:bg-slate-100"
              >
                Address
              </Link>
            </li>
          </ul>
        </div>

        <div >
          <h3 className="font-bold mb-4">Terms</h3>

          <ul className="list-none">
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-slate-100">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-slate-100">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
