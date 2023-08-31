import {
  ChevronDownIcon,
  Github,
  PlusIcon,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CardRepository = (props: {
  name: string;
  description: string;
  stars: number;
  language: programmingLanguage;
  updatedAt: string;
  deployed?: string;
  repository: string;
}) => {
  const {
    name,
    description,
    stars,
    language,
    updatedAt,
    repository,
    deployed,
  } = props;
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 h-full">
      <div className="flex space-x-4 mb-4">
        <div className="mr-auto">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-500 leading-5 dark:text-slate-400">
            {description}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="px-2 shadow-none ">
              Options
              <ChevronDownIcon className="h-4 w-4 text-secondary-foreground ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            alignOffset={-5}
            className="w-[200px]"
            forceMount
          >
            <DropdownMenuLabel>Lista de opciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={repository} className="flex">
                <Github className="mr-2 h-5 w-5" /> Github
              </Link>
            </DropdownMenuItem>
            {deployed && (
              <DropdownMenuItem>
                <Link href={deployed} className="flex">
                  <LinkIcon className="mr-2 h-5 w-5" /> Deployed
                </Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center space-x-4 text-gray-500 dark:text-slate-400 flex-wrap">
        <div className="space-x-2 flex items-center">
          <div>
            <div
              className={`rounded-full p-[0.4rem] border
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

export default CardRepository;
