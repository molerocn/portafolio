"use client";
import NameAnimation from "./name-animation";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Color {
  first_color: boolean;
  second_color: boolean;
  third_color: boolean;
}

const TopContainer = () => {
  const [activeColors, setActiveColors] = useState<Color>({
    first_color: false,
    second_color: false,
    third_color: false,
  });

  useEffect(() => {
    setInterval(() => {
      setActiveColors((prev) => ({
        first_color: true,
        second_color: false,
        third_color: false,
      }));
    }, 6000);

    setTimeout(() => {
      setInterval(() => {
        setActiveColors((prev) => ({
          second_color: true,
          first_color: false,
          third_color: false,
        }));
      }, 6000);
    }, 2000);

    setTimeout(() => {
      setInterval(() => {
        setActiveColors((prev) => ({
          third_color: true,
          first_color: false,
          second_color: false,
        }));
      }, 6000);
    }, 4000);
  }, []);
  return (
    <div className="grid lg:grid-cols-2 relative min-h-screen px-4 md:px-16 lg:px-20 xl:px-40">
      <div className="h-screen flex items-center">
        <div className="space-y-6">
          <div className="max-w-screen-md space-y-4">
            <NameAnimation activeColors={activeColors} />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tempor commodo laboris nisi exercitation eiusmod minim
              exercitation proident enim pariatur.
            </p>
          </div>
          <Button
            className={`font-bold
            transition-shadow duration-1000
              ${activeColors.first_color && "shadow-[0px_0px_20px_3px_#3b82f6]"}
              ${
                activeColors.second_color && "shadow-[0px_0px_20px_3px_#6366f1]"
              }
              ${activeColors.third_color && "shadow-[0px_0px_20px_3px_#eab308]"}
              
              `}
            variant={"default"}
            size={"lg"}
          >
            <Link target="_blank" href="/assets/curriculum.pdf">
              Descarga mi CV
            </Link>
          </Button>
          <div className="flex flex-wrap space-x-8">
            <Link target="_blank" href={"https://github.com/juancamr"}>
              @github/juancamr
            </Link>
            <Link target="_blank" href={"https://linkedin.com/in/juancamr"}>
              @linkedin/juancamr
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:relative">
        <div
          className="
              hidden xl:block
              absolute top-28
              h-[10rem] w-[10rem]
            lg:h-[30rem] lg:w-[30rem]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-950 dark:via-transparent dark:to-transparent -z-10
            "
        ></div>
        <div
          className="
              absolute bottom-0
              right-0
            h-[40rem] w-[40rem]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent dark:from-blue-900 dark:via-transparent dark:to-transparent
            "
        ></div>
      </div>
    </div>
  );
};

export default TopContainer;
