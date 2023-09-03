"use client";

import Link from "next/link";
import { ModeToggle } from "./theme-button";
import { SendMailDialog } from "./send-mail-dialog";
import { useEffect } from "react";
import { Button } from "./ui/button";

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
      className="py-8 px-4 md:px-16 lg:px-20 xl:px-40 fixed w-screen dark:bg-slate-950 z-40 bg-white transition-all"
    >
      <nav className="w-full flex">
        <Link href={"/"} className="text-2xl xl:text-3xl font-bold mr-auto">
          {"{ JM }"}
        </Link>
        <div className="flex items-center space-x-4">
          {/* <div className="hidden lg:block">
                <LanguageButton />
              </div> */}
          <ModeToggle />
          <SendMailDialog>
            <Button variant={"default"}>Contacto</Button>
          </SendMailDialog>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
