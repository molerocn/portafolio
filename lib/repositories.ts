interface Repository {
  name: string;
  description: string;
  stars: number;
  language: programmingLanguage;
  updatedAt: string;
}

export const repositories: Repository[] = [
  {
    name: "freelancer-server",
    description:
      "The server for the freelancer app includes the API and the database using mongodb",
    stars: 0,
    language: "Typescript",
    updatedAt: "julio 2023",
  },
  {
    name: "tiims-website",
    description: "The website for TIIMS",
    stars: 4,
    language: "Javascript",
    updatedAt: "agosto 2023",
  },
  {
    name: "pyhasher",
    description: "sntaoehsutnoa",
    stars: 5,
    language: "Python",
    updatedAt: "Mayo 2023",
  },
  {
    name: "restaurante",
    description: "sntaoehsutnoa",
    stars: 0,
    language: "php",
    updatedAt: "Enero 2023",
  },
  {
    name: "nsaoehusaot",
    description: "sntaoehsutnoa",
    stars: 0,
    language: "Java",
    updatedAt: "saeuaot",
  },
];
