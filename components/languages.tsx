"use client";
import CrytoJs from "crypto-js";
import { useEffect, useState } from "react";
import { GITHUB_URL, LENGUAGES } from "@/lib/constants";
import { Ubuntu_Mono } from "next/font/google";
import Image from "next/image";

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

const Lenguages = () => {
  const [text, setText] = useState("");
  const [isLenguageDisplayed, setIsLenguageDisplayed] = useState(false);
  const [proyects, setProyects] = useState<string[]>([]);
  const words = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
  ];

  const encryptAnimation = (index = 0) => {
    if (index < words.length) {
      const word = words[index];
      const encrypted = CrytoJs.SHA256(word).toString();
      setText(encrypted);

      setTimeout(() => {
        encryptAnimation(index + 1);
      }, 50);
    }
  };

  const updateProyects = (language: string) => {
    switch (language.toLowerCase()) {
      case "javascript":
        setProyects(["tiims-website"]);
        break;
      case "typescript":
        setProyects(["client-provider", "rabbit-chat"]);
        break;
      case "python":
        setProyects(["pyhasher"]);
        break;
      case "java":
        setProyects(["freelancer-server", "registro-ventas"]);
        break;
      case "php":
        setProyects(["website-restaurante"]);
    }
  };

  const startAnimation = (index = 0) => {
    if (index < LENGUAGES.length) {
      setIsLenguageDisplayed(false);
      encryptAnimation();
      const language = LENGUAGES[index];
      setTimeout(() => {
        setText(language);
        updateProyects(language);
        setIsLenguageDisplayed(true);
        setTimeout(() => {
          startAnimation(index + 1);
        }, 2000);
      }, 1000);
    } else startAnimation(0);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="flex w-full justify-center items-center z-40">
      <div>
        <h2 className="text-3xl font-bold text-center mb-1">
          Hablando en c&oacute;digo
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Estos son algunos de los lenguajes que domino
        </p>
        <p
          className={`text-center text-4xl sm:text-6xl mb-5 ${
            ubuntu.className
          } ${isLenguageDisplayed ? "font-bold" : "text-gray-500 uppercase"} ${
            text.toLowerCase() === "javascript" && "text-yellow-400"
          }
          ${text.toLocaleLowerCase() === "php" && "text-purple-400"}
        ${text.toLowerCase() === "typescript" && "text-blue-400"}
        ${text.toLowerCase() === "python" && "text-green-400"} ${
            text.toLowerCase() === "java" && "text-red-400"
          }`}
        >
          {text.slice(0, 15)}
        </p>
        {isLenguageDisplayed ? (
          <div className="flex gap-3 flex-wrap justify-center">
            {proyects.map((proyect, index) => (
              <a
                key={index}
                target="_blank"
                href={`${GITHUB_URL}/${proyect}`}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 px-4 py-2 flex space-x-2 items-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/assets/images/rocket.png"
                  className="h-5 w-5 mb-2"
                  alt=""
                />
                <p className="text-center">{proyect}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="h-12"></div>
        )}
      </div>
    </div>
  );
};

export default Lenguages;
