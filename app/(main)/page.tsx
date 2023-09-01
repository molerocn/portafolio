import TerminalSimulator from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { repositories } from "@/lib/repositories";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import CardRepository from "@/components/card-repository";
import Lenguages from "@/components/Lenguages";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div className="grid lg:grid-cols-2 relative min-h-screen px-4 md:px-16 lg:px-20 xl:px-40">
          <div className="space-y-4 h-screen flex items-center">
            <div className="space-y-4">
              <div className="max-w-screen-md space-y-4">
                <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-green-600 py-4">
                  Juan Carlos Molero
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Tempor commodo laboris nisi exercitation eiusmod minim
                  exercitation proident enim pariatur.
                </p>
              </div>
              <Button className="font-bold" variant={"blue"} size={"lg"}>
                <Link target="_blank" href="/assets/curriculum.pdf">
                  Descarga mi CV
                </Link>
              </Button>
              <div className="flex space-x-8">
                <Link target="_blank" href={"https://github.com/juancamr"}>
                  @github/juancamr
                </Link>
                <Link target="_blank" href={"https://linkedin.com/in/juancamr"}>
                  @linkedin/juancamr
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:relative">
            <div
              className="
              hidden xl:block
              absolute top-28
              h-[10rem] w-[10rem]
            lg:h-[30rem] lg:w-[30rem]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-950 dark:via-transparent dark:to-transparent -z-10
            "
            ></div>
            <div
              className="
              absolute bottom-0
              right-0
            h-[40rem] w-[40rem]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent dark:from-blue-900 dark:via-transparent dark:to-transparent
            "
            ></div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-screen items-center hidden lg:flex">
          <TerminalSimulator />
        </div>
      </section>
      <section className="py-20 px-4 md:px-16 lg:px-20 xl:px-40 grid lg:grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-3xl font-bold mb-6">Mis Proyectos</h2>
          {/* <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6"> */}
          <div className="grid lg:grid-cols-2 gap-6">
            {repositories.map((repository, index) => (
              <CardRepository
                key={index}
                name={repository.name}
                description={repository.description}
                stars={repository.stars}
                language={repository.language}
                updatedAt={repository.updatedAt}
                deployed={repository.deployed}
                repository={repository.repository}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 grid grid-cols-3 px-4 md:px-16 lg:px-20 xl:px-40">
        <div className="col-span-2">
          <h2 className="text-lg lg:text-3xl font-bold text-center mb-6">
            Im actually
          </h2>
          <Lenguages />
        </div>
      </section>
    </main>
  );
}
