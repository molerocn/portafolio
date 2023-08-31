interface Repository {
  name: string;
  description: string;
  stars: number;
  language: programmingLanguage;
  deployed?: string;
  repository: string;
  updatedAt: string;
}

const GITHUB = "https://github.com/juancamr";

export const repositories: Repository[] = [
  {
    name: "freelancer-server",
    description:
      "The server for the freelancer app includes the API and the database using mongodb",
    stars: 0,
    language: "Typescript",
    updatedAt: "julio 2023",
    repository: "aoesntu",
  },
  {
    name: "tiims-website",
    description: "The website for TIIMS",
    stars: 4,
    language: "Javascript",
    deployed: "https://tiims.com.pe",
    repository: `${GITHUB}/tiims-website`,
    updatedAt: "agosto 2023",
  },
  {
    name: "pyhasher",
    description: "sntaoehsutnoa",
    stars: 5,
    language: "Python",
    repository: `${GITHUB}/pyhasher`,
    updatedAt: "Mayo 2023",
  },
  {
    name: "restaurante",
    description: "sntaoehsutnoa",
    stars: 0,
    language: "php",
    repository: `${GITHUB}/restaurante`,
    updatedAt: "Enero 2023",
  },
  {
    name: "nsaoehusaot",
    description: "sntaoehsutnoa",
    stars: 0,
    language: "Java",
    repository: `${GITHUB}/nsaoehusaot`,
    updatedAt: "saeuaot",
  },
];
