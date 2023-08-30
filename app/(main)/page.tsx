import GetInTouchForm from "@/components/get-in-touch";
import { Button } from "@/components/ui/button";
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
      {/* <section className="py-20">
        <div className="rounded-3xl border border-gray-200 grid grid-cols-2">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/4649464/media/76bd131b4aa3447eb9f9d0887972c066.gif"
            alt=""
            className="h-full object-cover rounded-l-3xl"
          />
          <div className="p-10">
            <h3 className="text-3xl font-bold mb-4">Cont&aacute;ctame</h3>
            <GetInTouchForm />
          </div>
        </div>
      </section> */}
    </main>
  );
}
