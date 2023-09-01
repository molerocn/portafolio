"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Ubuntu_Mono } from "next/font/google";
import { HoverCardContent, HoverCard, HoverCardTrigger } from "./ui/hover-card";

interface Command {
  type: "command" | "response";
  text: string;
}

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

const TerminalSimulator = () => {
  const comandosDisponibles = ["lenguajes", "about_me", "clear", "neofetch"];
  const [comandos, setComandos] = useState<Command[]>([]);
  const [command, setCommand] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

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
                text: "Estos son los lenguajes que domino:\nJavascript\nTypescript\nPython\nJava",
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
                text: "Soy un desarrollador de software con 6 meses de experiencia, me gusta aprender cosas nuevas y me considero una persona autodidacta, me gusta trabajar en equipo y soy muy responsable con mis tareas.",
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
  const [isMaximized, setIsMaximized] = useState(true);

  const minimizarTerminal = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    document.getElementById("command-input")?.focus();
  }, []);

  return (
    <section
      className={`${ubuntu.className} fixed top-0 right-0 h-screen flex items-center`}
    >
      <div
        ref={terminalRef}
        className={`${
          isMaximized
            ? "lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"
            : "2xl:w-[100px] xl:w-[100px] lg:w-[100px]"
        } h-[500px]  shadow-xl transition-all rounded-l-2xl bg-white dark:bg-blue-950 overflow-y-auto relative border border-gray-200 dark:border-gray-800`}
      >
        <div className="dark:bg-slate-800 bg-blue-950 w-full h-8 rounded-tl-xl absolute top-0">
          <div className="flex items-center h-full space-x-3 px-4">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div
              className="h-3 w-3 rounded-full bg-yellow-500 cursor-pointer"
              onClick={minimizarTerminal}
            ></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div
          className={`h-full rounded-bl-xl p-4 dark:text-white ${
            !isMaximized && "hidden"
          }`}
        >
          <HoverCard>
            <HoverCardTrigger className="cursor-pointer">
              <p className="text-base text-gray-400 mb-4 mt-8">
                Comandos disponibles
              </p>
            </HoverCardTrigger>
            <HoverCardContent>
              Ctrl + L - Ctrl + U
              <ul className="mt-2">
                {comandosDisponibles.map((command, index) => (
                  <li key={index} className="mb-2">
                    <CommandLine type="command" command={command} />
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
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
