"use client";
import CrytopJs from "crypto-js";
import { useEffect, useState } from "react";

const Lenguages = () => {
  const [text, setText] = useState("");
  const words = ["stnaeou", "aesutaho"];

  const encryptAnimation = () => {
    for (let i = 0; i < words.length; i++) {
      setTimeout(() => {
        const encrypted = CrytopJs.SHA256(words[i]).toString();
        console.log(encrypted);
        setText(encrypted);
      }, 5000);
    }
  };

  useEffect(() => {
    encryptAnimation();
  });

  return <p className="text-center">{text.slice(0, 30)}</p>;
};

export default Lenguages;
