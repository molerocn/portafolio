"use client";
import TerminalSimulator from "@/components/terminal";
import { repositories } from "@/lib/repositories";
import CardRepository from "@/components/card-repository";
import Lenguages from "@/components/languages";
import TopContainer from "@/components/top-container";
import "@/components/arrow.css";
import { useState } from "react";
import { ABOUT_ME, BASES_DE_DATOS, TECNOLOGIAS } from "@/lib/constants";
import { Tooltip, divider } from "@nextui-org/react";
import GetInTouchForm from "@/components/get-in-touch";

export default function Home() {
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
  return (
    <main className="space-y-10 lg:space-y-20">
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
        } px-4 md:px- lg:px-20 xl:px-40 relative h-[250px] py-10`}
      >
        <section
          className={` ${
            isTerminalMaximized && "!hidden"
          } hidden lg:block h-full w-full top-0 absolute text-2xl -z-10`}
        >
          <div className="absolute left-0 flex h-full items-start 3xl:ml-80 2xl:ml-60 xl:ml-28 lg:ml-14 mt-10">
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
          <div className="absolute right-0 flex h-full items-start 2xl:mr-60 3xl:mr-80 xl:mr-28 lg:mr-14 mt-10">
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
        className={` px-4 md:px-16 lg:px-20 xl:px-40 grid ${
          isTerminalMaximized && "lg:grid-cols-3"
        }`}
      >
        <div
          className={`grid ${isTerminalMaximized && "col-span-2"} ${
            !isTerminalMaximized && "lg:grid-cols-2 gap-10"
          }`}
        >
          <div className={`py-20 2xl:w-3/4 mx-auto flex items-center`}>
            <div>
              <h3 className="font-bold text-3xl mb-4">Sobre m&iacute;</h3>
              <p className="text-lg text-gray-500 dark:text-slate-400 xl:text-xl mb-8">
                {ABOUT_ME} Estas son algunas con las que eh trabajado:
              </p>
              <div className="flex flex-wrap gap-6">
                {TECNOLOGIAS.map(({ name, image }, index) => (
                  <Tooltip color={"default"} key={index} content={name}>
                    <img className="h-12" src={image} alt={name} />
                  </Tooltip>
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
                src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966"
                className="w-full h-auto max-w-[500px] dark:brightness-90 rounded-xl"
                alt="backend"
              />
            </div>
          )}
        </div>
      </section>
      <section
        className={` px-4 md:px-16 lg:px-28 2xl:px-[300px] 3xl:px-[500px] grid ${
          isTerminalMaximized && "lg:grid-cols-3"
        }`}
      >
        <div
          className={`grid ${isTerminalMaximized && "col-span-2"} ${
            !isTerminalMaximized && "lg:grid-cols-2 gap-20 h-[600px]"
          }`}
        >
          <div className="inline-flex justify-center lg:pt-20">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl p-6 lg:p-10 w-full h-auto">
              <h1 className="text-3xl mb-6 font-bold">Contacto</h1>
              <GetInTouchForm />
              <p className="mt-4 text-gray-500">
                Recuerda que tambien puedes llamar a mi n&uacute;mero personal{" "}
                <span className="text-blue-500">
                  <a href="tel:+51986327221">986327221</a>
                </span>
                .
              </p>
            </div>
          </div>
          {!isTerminalMaximized && (
            <div className="justify-center pb-20 hidden lg:flex relative">
              <div
                className="
              absolute bottom-0
              right-0
            h-[40rem] w-[40rem]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent dark:from-blue-900 dark:via-transparent dark:to-transparent
            "
              ></div>
              <div className="bg-blue-600 dark:border dark:border-gray-900 text-white p-10 rounded-3xl shadow-2xl flex items-center w-full h-full z-20">
                <div>
                  <h1 className="font-extralight text-6xl uppercase mb-4">
                    Muchas <span className="font-bold">Gracias.</span>
                  </h1>
                  <p className="text-white opacity-30 font-bold text-2xl mb-10">
                    Por visitar mi portafolio.
                  </p>
                  <p className="text-xl">Estaremos en contacto pronto!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
