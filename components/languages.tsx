"use client";
import CrytoJs from "crypto-js";
import { useEffect, useState } from "react";
import { LENGUAGES } from "@/lib/constants";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

const Lenguages = () => {
  const [text, setText] = useState("");
  const [isLenguageDisplayed, setIsLenguageDisplayed] = useState(false);
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

  const startAnimation = (index = 0) => {
    if (index < LENGUAGES.length) {
      setIsLenguageDisplayed(false);
      encryptAnimation();
      const language = LENGUAGES[index];
      setTimeout(() => {
        setText(language);
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
    <div className={ubuntu.className}>
      <h2 className="text-3xl font-bold text-center mb-1">
        Hablando en c&oacute;digo
      </h2>
      <p className="text-center text-gray-400 mb-6">
        Estos son algunos de los lenguajes que domino
      </p>
      <p
        className={`text-center text-4xl sm:text-6xl uppercase  ${
          isLenguageDisplayed ? "font-bold text-blue-500" : "text-gray-500"
        }`}
      >
        {text.slice(0, 15)}
      </p>
    </div>
  );
};

export default Lenguages;
