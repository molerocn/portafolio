import TerminalSimulator from "@/components/terminal";
import { repositories } from "@/lib/repositories";
import CardRepository from "@/components/card-repository";
import Lenguages from "@/components/Lenguages";
import TopContainer from "@/components/top-container";
import "@/components/arrow.css";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen">
        <TopContainer />
        <div className="absolute right-0 top-0 h-screen items-center hidden lg:flex">
          <TerminalSimulator />
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
        className="py-20 px-4 md:px-16 lg:px-20 xl:px-40 grid lg:grid-cols-3"
      >
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
      <section className="py-20 grid lg:grid-cols-3 px-4 md:px-16 lg:px-20 xl:px-40">
        <div className="lg:col-span-2">
          <h2 className="text-lg lg:text-3xl font-bold text-center mb-6">
            Im actually
          </h2>
          <Lenguages />
        </div>
      </section>
    </main>
  );
}
