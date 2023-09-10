"use client";

import Link from "next/link";
import { ModeToggle } from "./theme-button";
import { SendMailDialog } from "./send-mail-dialog";
import { useEffect } from "react";
import ContactDialog from "./contact-dialog";
import { Button } from "@nextui-org/button";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    window.onscroll = function () {
      if (window.scrollY > 100) {
        navbar?.classList.add("opacity-0");
        // navbar?.classList.add("shadow-md");
        // navbar?.classList.remove("py-8");
        // navbar?.classList.add("py-4");
      } else {
        navbar?.classList.remove("opacity-0");
      }
    };
  }, []);
  return (
    <header
      id="navbar"
      className="py-8 px-4 md:px-16 lg:px-20 xl:px-40 fixed w-screen  transition-all z-50"
    >
      <nav className="w-full flex">
        <Link href={"/"} className="text-2xl xl:text-3xl font-bold mr-auto">
          {"{ JM }"}
        </Link>
        <div className="flex items-center space-x-6">
          {/* <div className="hidden lg:block">
                <LanguageButton />
              </div> */}
          <ModeToggle />
          <ContactDialog>
            <button className="rounded-lg shadow border border-gray-200 px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-medium">
              Contacto
            </button>
          </ContactDialog>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
