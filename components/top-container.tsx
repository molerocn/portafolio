"use client";
import NameAnimation from "./name-animation";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialLink from "./social-link";
import { GITHUB_URL, LINKEDIN_PROFILE, LINKEDIN_URL } from "@/lib/constants";
import { Ubuntu_Mono } from "next/font/google";
interface Color {
  first_color: boolean;
  second_color: boolean;
  third_color: boolean;
}
const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

const TopContainer = ({
  isTerminalMaximized,
}: {
  isTerminalMaximized: boolean;
}) => {
  const [activeColors, setActiveColors] = useState<Color>({
    first_color: true,
    second_color: false,
    third_color: false,
  });

  useEffect(() => {
    setInterval(() => {
      setActiveColors({
        first_color: true,
        second_color: false,
        third_color: false,
      });
    }, 6000);

    setTimeout(() => {
      setInterval(() => {
        setActiveColors({
          second_color: true,
          first_color: false,
          third_color: false,
        });
      }, 6000);
    }, 2000);

    setTimeout(() => {
      setInterval(() => {
        setActiveColors({
          third_color: true,
          first_color: false,
          second_color: false,
        });
      }, 6000);
    }, 4000);
  }, []);
  return (
    <div className="grid lg:grid-cols-2 relative min-h-screen px-4 md:px-16 lg:px-20 xl:px-40">
      <div className="h-screen flex items-center">
        <div>
          <div className="space-y-6">
            <div className="max-w-screen-md space-y-4">
              <NameAnimation activeColors={activeColors} />
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Apasionado por el código limpio y el aprendizaje continuo en la
                búsqueda de la excelencia.
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
              <Link
                target="_blank"
                download={true}
                href="/assets/juan_carlos_molero.pdf"
              >
                Descargar CV
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap space-y-3 sm:space-y-0 mt-12">
            <SocialLink
              photo={"/assets/images/foto_linkedin.jfif"}
              link={LINKEDIN_URL}
              label="linkedin/@molerocn"
              description={
                "Apasionado por la tecnología y la innovación, comprometido con el crecimiento profesional."
              }
              type="linkedin"
            />
            <SocialLink
              photo={"/assets/images/foto_linkedin.jfif"}
              link={GITHUB_URL}
              label={"github/@molerocn"}
              description={
                "Bienvenido a mi rincón digital: mi colección de proyectos."
              }
              type="github"
            />
          </div>
        </div>
      </div>
      <div
        className={`hidden lg:flex items-center justify-end relative ${
          isTerminalMaximized && "!hidden"
        }`}
      >
        <div
          className="
              absolute top-1/2 -translate-y-1/2
              h-[10rem] w-[10rem]
            lg:h-[30rem] lg:w-[30rem]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-950 dark:via-transparent dark:to-transparent -z-10
            "
        ></div>
        {/* <div
          className="
              absolute bottom-0
              right-0
            h-[40rem] w-[40rem]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent dark:from-blue-900 dark:via-transparent dark:to-transparent
            "
        ></div> */}
        <p className={`${ubuntu.className} font-bold lg:text-2xl xl:text-3xl`}>
          {`"Ctrl + S`} <i className="fa-solid fa-arrow-right text-xl"></i>{" "}
          {`Ctrl +
          Success."`}
        </p>
      </div>
    </div>
  );
};

export default TopContainer;
