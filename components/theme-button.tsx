"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme ?? "light");
  }, []);

  const changeTheme = () => {
    if (currentTheme === "light") {
      setTheme("dark");
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <span onClick={changeTheme} className="transition-all cursor-pointer">
        <Image
          width={0}
          height={0}
          sizes="100wv"
          alt="sun"
          src={"/assets/images/sun.png"}
          className="absolute h-7 w-7 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <Image
          src={"/assets/images/moon.png"}
          width={0}
          height={0}
          alt="moon"
          sizes="100wv"
          className="h-7 w-7 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <span className="sr-only">Toggle theme</span>
        {/* <Sun className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <Moon className="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <span className="sr-only">Toggle theme</span> */}
      </span>
    </>
  );
}
