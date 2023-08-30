import GetInTouchForm from "@/components/get-in-touch";
import { Button } from "@/components/ui/button";
import { repositories } from "@/lib/repositories";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 md:px-16 lg:px-20 xl:px-40">
      <section className="min-h-screen">
        <div className="grid lg:grid-cols-2 relative">
          <div className="space-y-4 h-screen flex items-center">
            <div>
              <div className="max-w-screen-md space-y-4 mb-4">
                <h1 className="text-7xl font-bold">Juan Carlos Molero</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Hola mi nombre es Juan Carlos Molero, bienvenido a mi
                  portafolio.
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Link target="_blank" href={"https://github.com/juancamr"}>
                    <Github />
                  </Link>
                </Button>
                <Button variant="outline">
                  <Linkedin />
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:relative">
            <div
              className="
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
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent dark:from-blue-900 dark:via-transparent dark:to-transparent
            "
            ></div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-4">Mis Proyectos</h2>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          {repositories.map((repository, index) => (
            <CardRepository
              key={index}
              name={repository.name}
              description={repository.description}
              stars={repository.stars}
              language={repository.language}
              updatedAt={repository.updatedAt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

const CardRepository = (props: {
  name: string;
  description: string;
  stars: number;
  language: programmingLanguage;
  updatedAt: string;
}) => {
  const { name, description, stars, language, updatedAt } = props;
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-500 p-4 h-full">
      <div className="flex space-x-4 mb-4">
        <div className="mr-auto">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-500 leading-5 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-gray-500 dark:text-slate-400 flex-wrap">
        <div className="space-x-2 flex items-center">
          <div>
            <div
              className={`rounded-full p-2 border
        ${language === "Typescript" ? "border-blue-500" : ""}
        ${language === "Javascript" ? "border-yellow-500" : ""}
        ${language === "Java" ? "border-orange-500" : ""}
        ${language === "php" ? "border-indigo-500 " : ""}
        ${language === "Python" ? "border-blue-500" : ""}
        `}
            ></div>
          </div>
          <p>{language}</p>
        </div>
        <div className="flex items-center ">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {stars}
        </div>
        <p>Actualizado {updatedAt}</p>
      </div>
    </div>
  );
};
