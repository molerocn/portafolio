"use client";
import TerminalSimulator from "@/components/terminal";
import { repositories } from "@/lib/repositories";
import CardRepository from "@/components/card-repository";
import Lenguages from "@/components/languages";
import TopContainer from "@/components/top-container";
import "@/components/arrow.css";
import { useState } from "react";

export default function Home() {
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(true);
  return (
    <main className="space-y-10">
      <section className="relative min-h-screen">
        <TopContainer isTerminalMaximized={isTerminalMaximized} />
        <div className="absolute right-0 top-0 h-screen items-center hidden lg:flex">
          <TerminalSimulator
            isTerminalMaximized={isTerminalMaximized}
            setIsTerminalMaximized={setIsTerminalMaximized}
          />
        </div>
        <a
          href="#proyectos"
          className="absolute bottom-0 left-0 w-full flex justify-center text-white"
        >
          <div className="mb-28">
            <div className="chevron dark:after:bg-white dark:before:bg-white after:bg-black before:bg-black"></div>
            <div className="chevron dark:after:bg-white dark:before:bg-white after:bg-black before:bg-black"></div>
            <div className="chevron dark:after:bg-white dark:before:bg-white after:bg-black before:bg-black"></div>
          </div>
        </a>
      </section>
      <section
        id="proyectos"
        className={`py-10 px-4 md:px-16 lg:px-20 xl:px-40 grid ${
          isTerminalMaximized && "lg:grid-cols-3"
        }`}
      >
        <div className={`${isTerminalMaximized && "col-span-2"}`}>
          <h2 className="text-3xl font-bold mb-6">Mis Proyectos</h2>
          {/* <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6"> */}
          <div
            className={`grid xl:grid-cols-2 ${
              !isTerminalMaximized && "2xl:grid-cols-3"
            }  gap-6`}
          >
            {repositories.map((repository, index) => (
              <CardRepository
                key={index}
                name={repository.name}
                description={repository.description}
                language={repository.language}
                deployed={repository.deployed}
                repository={repository.repository}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className={`grid ${
          isTerminalMaximized && "lg:grid-cols-3"
        } px-4 md:px- lg:px-20 xl:px-40 relative`}
      >
        <section
          className={` ${
            isTerminalMaximized && "!hidden"
          } hidden lg:block h-full w-full top-0 absolute text-2xl`}
        >
          <div className="absolute left-0 flex h-full items-start 3xl:ml-80 2xl:ml-60 xl:ml-40 lg:ml-14">
            <pre
              style={{
                fontFamily: "__Ubuntu_Mono_328342",
                whiteSpace: "pre-wrap",
              }}
            >
              {"if (brain != empty) {\n\t"}
              <span className="text-blue-500 dark:text-blue-400">
                keepCoding()
              </span>
              {";\n} else {\n\t"}
              <span className="text-blue-500 dark:text-blue-400">
                orderCoffee()
              </span>
              {";\n}"}
            </pre>
          </div>
          <div className="absolute right-0 flex h-full items-start 2xl:mr-60 3xl:mr-80 xl:mr-40 lg:mr-14">
            <pre
              style={{
                fontFamily: "__Ubuntu_Mono_328342",
                whiteSpace: "pre-wrap",
              }}
            >
              {"while not success: \n\t"}
              <span className="text-blue-500 dark:text-blue-400">
                try_again()
              </span>{" "}
              {"\n\tif dead:\n\t\t"}
              <span className="text-indigo-600 dark:text-indigo-500">
                return
              </span>
            </pre>
          </div>
        </section>

        <div className="lg:col-span-2">
          <Lenguages />
        </div>
      </section>
      <section id="footer" className="py-20">
        holamundo
      </section>
    </main>
  );
}
