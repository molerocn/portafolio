"use client";
import TerminalSimulator from "@/components/terminal";
import { repositories } from "@/lib/repositories";
import CardRepository from "@/components/card-repository";
import Lenguages from "@/components/languages";
import TopContainer from "@/components/top-container";
import "@/components/arrow.css";
import { useState } from "react";
import Image from "next/image";
import { ABOUT_ME, BASES_DE_DATOS, TECNOLOGIAS } from "@/lib/constants";

export default function Home() {
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
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
        } px-4 md:px- lg:px-20 xl:px-40 relative h-[250px]`}
      >
        <section
          className={` ${
            isTerminalMaximized && "!hidden"
          } hidden lg:block h-full w-full top-0 absolute text-2xl -z-10`}
        >
          <div className="absolute left-0 flex h-full items-start 3xl:ml-80 2xl:ml-60 xl:ml-28 lg:ml-14">
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
          <div className="absolute right-0 flex h-full items-start 2xl:mr-60 3xl:mr-80 xl:mr-28 lg:mr-14">
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
      <section
        className={`py-10 px-4 md:px-16 lg:px-20 xl:px-40 grid ${
          isTerminalMaximized && "lg:grid-cols-3"
        }`}
      >
        <div
          className={`grid ${isTerminalMaximized && "col-span-2"} ${
            !isTerminalMaximized && "lg:grid-cols-2"
          }`}
        >
          <div className={`py-20 2xl:w-3/4 mx-auto flex items-center`}>
            <div>
              <h3 className="font-bold text-3xl mb-4">Sobre m&iacute;</h3>
              <p className="text-lg text-gray-300 xl:text-xl mb-8">
                {ABOUT_ME} Estas son algunas con las que eh trabajado:
              </p>
              <div className="flex flex-wrap gap-6">
                {TECNOLOGIAS.map((tecnologia, index) => (
                  <img
                    key={index}
                    className="h-12"
                    src={tecnologia}
                    alt={tecnologia}
                  />
                ))}
                <span className="flex items-center">
                  <p className="font-extralight text-3xl mr-2">express </p>
                  <img
                    className="h-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                    alt=""
                  />
                </span>
                {/* <span className="text-3xl font-bold">.</span>
              {BASES_DE_DATOS.map((db, index) => (
                <img key={index} src={db} alt="db" className="h-12" />
              ))} */}
              </div>
            </div>
          </div>
          {!isTerminalMaximized && (
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png"
                className="w-full h-auto max-w-[700px] dark:brightness-90"
                alt="backend"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
