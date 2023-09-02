"use client";
import { useEffect, useState } from "react";
interface Color {
  first_color: boolean;
  second_color: boolean;
  third_color: boolean;
}
const NameAnimation = () => {
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
    <div className="text-7xl font-bold">
      <span
        className={`
        ${
          activeColors.first_color
            ? " bg-gradient-to-r from-blue-400 via-blue-500 to-green-600"
            : "bg-white"
        }
           transition-colors duration-500 text-transparent bg-clip-text       
        `}
      >
        Juan{" "}
      </span>
      <span
        className={`
        ${
          activeColors.second_color &&
          "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-rose-600"
        }
           transition-colors duration-500         
        `}
      >
        Carlos{" "}
      </span>
      <span
        className={`
        ${
          activeColors.third_color &&
          "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-yellow-600"
        }
           transition-colors duration-500         
        `}
      >
        Molero
      </span>
    </div>
  );
};

export default NameAnimation;
