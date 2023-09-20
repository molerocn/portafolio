"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Ubuntu_Mono } from "next/font/google";
import { HoverCardContent, HoverCard, HoverCardTrigger } from "./ui/hover-card";
import { ABOUT_ME, GITHUB_URL, LANGUAGES, LINKEDIN_URL } from "@/lib/constants";
import Typed from "typed.js";
import Link from "next/link";
import { SendMailDialog } from "./send-mail-dialog";
import { Mail, MoveDown } from "lucide-react";
import { ModeToggle } from "./theme-button";
import ContactDialog from "./contact-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

interface Command {
  type: "command" | "response";
  text: string;
}

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

const TerminalSimulator = ({
  isTerminalMaximized,
  setIsTerminalMaximized,
}: {
  isTerminalMaximized: boolean;
  setIsTerminalMaximized: Function;
}) => {
  const comandosDisponibles = ["lenguajes", "about_me", "clear", "neofetch"];
  const [comandos, setComandos] = useState<Command[]>([]);
  const [command, setCommand] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const typedCommand = useRef<HTMLInputElement>(null);

  let lenguagesResponse = "Estos son los lenguajes que domino:";
  LANGUAGES.forEach((lenguage) => {
    lenguagesResponse += `\n${lenguage.name}`;
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCommand(value.toLowerCase());
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setComandos(function (prev) {
      return [
        ...prev,
        {
          type: "command",
          text: command,
        },
      ];
    });
    if (comandosDisponibles.includes(command)) {
      switch (command) {
        case "lenguajes":
          setComandos(function (prev) {
            return [
              ...prev,
              {
                type: "response",
                text: lenguagesResponse,
              },
            ];
          });
          break;
        case "about_me":
          setComandos(function (prev) {
            return [
              ...prev,
              {
                type: "response",
                text: ABOUT_ME,
              },
            ];
          });
          break;
        case "neofetch":
          setComandos(function (prev) {
            return [
              ...prev,
              {
                type: "response",
                text: `
                888888 888b     d888 
                  "88b 8888b   d8888 
                    888 88888b.d88888 
                    888 888Y88888P888 
                    888 888 Y888P 888 
                    888 888  Y8P  888 
                    88P 888   "   888 
                    888 888       888 
                  .d88P               
                .d88P"                
                888P"                  

                `,
              },
            ];
          });
          break;
        case "clear":
          setComandos([]);
          break;
      }
    } else {
      setComandos(function (prev) {
        return [
          ...prev,
          {
            type: "response",
            text: `jash: ${command.split(" ")[0]}: command not found`,
          },
        ];
      });
    }
    setTimeout(() => {
      if (terminalRef.current) {
        console.log("terasoe");
        terminalRef.current.scrollTo({
          top: terminalRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
    setCommand("");
  };

  //function to empty comandos array when the user press ctrl + l
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.key === "l") {
      setComandos([]);
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "u") {
      setCommand("");
      event.preventDefault();
    }
  };

  const minimizarTerminal = () => {
    setIsTerminalMaximized(!isTerminalMaximized);
  };

  useEffect(() => {
    document.getElementById("command-input")?.focus();
    // const typed = new Typed(typedCommand.current, {
    //   strings: comandosDisponibles,
    //   typeSpeed: 50,
    //   backSpeed: 50,
    //   loop: true,
    //   attr: "placeholder",
    //   bindInputFocusEvents: true,
    //   backDelay: 1000,
    // });
    // return () => {
    //   typed.destroy();
    // };
  }, []);

  return (
    <section
      className={`${ubuntu.className} fixed top-0 right-0 h-screen flex items-center z-40`}
    >
      <div>
        {/* <p className="text-gray-400">
          Intenta escribiendo <span ref={typedCommand}></span>
        </p> */}
        <div
          ref={terminalRef}
          onClick={() => document.getElementById("command-input")?.focus()}
          className={`${
            isTerminalMaximized
              ? "lg:w-[350px] xl:w-[450px] 3xl:w-[600px]"
              : "2xl:w-[70px] xl:w-[70px] lg:w-[55px]"
          } lg:h-[400px] xl:h-[500px]  shadow-2xl transition-all rounded-l-2xl bg-slate-50 dark:bg-gray-800 overflow-y-auto relative border border-gray-200 dark:border-gray-800`}
        >
          <section className={`${!isTerminalMaximized && "hidden"}`}>
            <div className={`w-full h-8 rounded-tl-xl absolute top-0`}>
              <div className="flex items-center h-full space-x-3 px-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div
                  className="h-3 w-3 rounded-full bg-yellow-500 cursor-pointer"
                  onClick={minimizarTerminal}
                ></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                {isTerminalMaximized && (
                  <i
                    className={`fa-solid fa-angles-right text-gray-400 dark:text-gray-500 cursor-pointer`}
                    onClick={minimizarTerminal}
                  ></i>
                )}
              </div>
            </div>
            <div className={`h-full rounded-bl-xl p-4 dark:text-white `}>
              <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                  <p className="text-base text-blue-400 dark:text-indigo-300 font-medium mb-4 mt-8 cursor-pointer">
                    Comandos disponibles
                  </p>
                </PopoverTrigger>
                <PopoverContent>
                  <div
                    className={`${ubuntu.className} p-4 rounded-lg border border-gray-200 shadow-lg bg-white dark:bg-gray-700 dark:border-gray-700`}
                  >
                    Ctrl + L - Ctrl + U
                    <ul className="mt-2">
                      {comandosDisponibles.map((command, index) => (
                        <li key={index} className="mb-2">
                          <CommandLine type="command" command={command} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </PopoverContent>
              </Popover>
              <div className="space-y-1 mb-1">
                {comandos.map((command, index) => (
                  <CommandLine
                    key={index}
                    type={command.type}
                    command={command.text}
                  />
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex items-center pb-3">
                <i className="fa-solid fa-chevron-right mr-2 text-[0.7rem] text-green-500"></i>
                <input
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                  value={command}
                  id="command-input"
                  type="text"
                  autoComplete="off"
                  className="bg-transparent dark:text-white border-transparent focus:border-transparent focus:ring-transparent w-full outline-none"
                />
              </form>
            </div>
          </section>
          <section
            className={`${isTerminalMaximized && "hidden"} h-full relative`}
          >
            <div
              className={`w-full py-4 rounded-tl-xl flex justify-center absolute top-0`}
            >
              <i
                onClick={minimizarTerminal}
                className="fa-solid fa-angles-left cursor-pointer
              text-gray-800 dark:text-slate-50
                "
              ></i>
            </div>
            <div
              className={`${
                isTerminalMaximized && "hidden"
              } flex items-center justify-center h-full`}
            >
              <div className="space-y-4">
                <div className="text-center">
                  <Link
                    style={{ fontFamily: "__Montserrat_cabfd8" }}
                    href={LINKEDIN_URL}
                    target="_blank"
                    className="font-bold text-3xl  text-center"
                  >
                    in
                  </Link>
                </div>
                <div>
                  <Link href={GITHUB_URL} target="_blank">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="github-logo"
                      className="w-10 bg-slate-50
                      
                      rounded-full border border-white dark:border-slate-50"
                    />
                  </Link>
                </div>
                <div className="flex justify-center">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

function CommandLine({
  command,
  type,
}: {
  command: string;
  type: "command" | "response";
}) {
  return (
    <div className="flex items-center">
      {type === "command" && (
        <i className="fa-solid fa-chevron-right mr-2 text-[0.7rem] text-green-500"></i>
      )}
      <pre
        style={{ fontFamily: "__Ubuntu_Mono_328342", whiteSpace: "pre-wrap" }}
      >
        {command}
      </pre>
    </div>
  );
}

export default TerminalSimulator;
