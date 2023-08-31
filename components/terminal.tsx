"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Ubuntu_Mono } from "next/font/google";
import { HoverCardContent, HoverCard, HoverCardTrigger } from "./ui/hover-card";

interface Command {
  type: "command" | "response";
  text: string;
}

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

const TerminalSimulator = () => {
  const comandosDisponibles = ["lenguajes", "about_me", "clear"];
  const [comandos, setComandos] = useState<Command[]>([]);
  const [command, setCommand] = useState("");

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
            text: `bash: ${command.split(" ")[0]}: command not found`,
          },
        ];
      });
    }
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

  return (
    <section className={`${ubuntu.className}`}>
      <div
        className="h-[500px] lg:w-[400px] xl:w-[500px]
       2xl:w-[600px] shadow transition-all rounded-l-2xl bg-white dark:bg-blue-950 overflow-y-auto relative border border-gray-200 dark:border-gray-800"
      >
        <div className="dark:bg-slate-800 bg-slate-200 w-full h-8 rounded-tl-xl absolute">
          <div className="flex items-center h-full space-x-3 px-4">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="h-full rounded-bl-xl p-4 dark:text-white">
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
          <form onSubmit={handleSubmit} className="flex items-center">
            <i className="fa-solid fa-chevron-right mr-2 text-[0.7rem] text-green-500"></i>
            <input
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              value={command}
              type="text"
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
