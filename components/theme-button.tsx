"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

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
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            D&iacute;a
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Noche
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            Sistema
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <Button onClick={changeTheme} variant={"ghost"}  size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
