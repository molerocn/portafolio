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
    description:
      "Landing page de Tiims, empresa dedicada a la industria B2B y B2C",
    deployed: "https://tiims.com.pe",
  },
  {
    name: "client-provider",
    language: "Typescript",
    description:
      "Backend para una aplicación de freelancers usando express y MongoDB",
    repository: `${GITHUB}/client-provider`,
  },
  {
    name: "freelancer-server",
    language: "Java",
    description:
      "Backend para una aplicación de freelancers usando Spring y MySQL",
    repository: `${GITHUB}/freelancer-server`,
  },
  {
    name: "rabbit-chat",
    language: "Typescript",
    description: "Chat clone usando RabbitMQ, WebSockets y NodeJS",
    repository: `${GITHUB}/rabbit-chat`,
  },
  {
    name: "pyhasher",
    language: "Python",
    description:
      "Programa de encriptación en tiempo real diseñado para contraseñas seguras",
    repository: `${GITHUB}/pyhasher`,
  },
  {
    name: "website-restaurante",
    language: "php",
    description:
      "Landing page de un restaurante, sistema de reservas online y panel de administración",
    repository: `${GITHUB}/website-restaurante`,
  },
  {
    name: "registro-ventas",
    language: "Java",
    description:
      "Programa para administrar inventario y ventas de una tienda usando Swing y MySQL",
    repository: `${GITHUB}/registro-ventas`,
  },
];
