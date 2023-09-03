type programmingLanguage =
  | "Typescript"
  | "Java"
  | "php"
  | "Javascript"
  | "Python";

declare module "typed.js" {
  const Typed: any;
  export = Typed;
}
