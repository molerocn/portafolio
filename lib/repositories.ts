interface Repository {
  name: string;
  language: programmingLanguage;
  deployed?: string;
  description: string;
  repository: string;
}

const GITHUB = "https://github.com/juancamr";

export const repositories: Repository[] = [
  {
    name: "tiims-website",
    language: "Javascript",
    repository: `${GITHUB}/tiims-website`,
    description: "Web page for TIIMS company",
    deployed: "https://tiims.com.pe",
  },
  {
    name: "client-provider",
    language: "Typescript",
    description: "Client provider ",
    repository: `${GITHUB}/client-provider`,
  },
  {
    name: "freelancer-server",
    language: "Java",
    description: "Freelancer server",
    repository: `${GITHUB}/freelancer-server`,
  },
  {
    name: "rabbit-chat",
    language: "Typescript",
    description: "Chat with RabbitMQ",
    repository: `${GITHUB}/rabbit-chat`,
  },
  {
    name: "pyhasher",
    language: "Python",
    description: "Hasher",
    repository: `${GITHUB}/rabbit-chat`,
  },
  {
    name: "website-restaurante",
    language: "php",
    description: "Chat with RabbitMQ",
    repository: `${GITHUB}/website-restaurante`,
  },
  {
    name: "registro-ventas",
    language: "Java",
    description: "Sales record",
    repository: `${GITHUB}/registro-ventas`,
  },
];
