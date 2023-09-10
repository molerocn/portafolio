"use client";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { Snippet } from "@nextui-org/react";
import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const footerContent: { title: string; links?: any[]; content?: any[] }[] = [
  {
    title: "Contacto",
    content: [
      {
        icon: "far fa-envelope",
        content: "jcmrojas29@gmail.com",
      },
      {
        icon: "fas fa-phone-alt",
        content: "+51 986 327 221",
      },
    ],
  },
  {
    title: "Redes Sociales",
    links: [
      {
        name: "Linkedin",
        icon: "fab fa-linkedin-in",
        href: LINKEDIN_URL,
      },
      {
        name: "Github",
        icon: "fab fa-github",
        href: GITHUB_URL,
      },
    ],
  },
];

const Footer = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  return (
    <footer className="py-16 pb-12 px-4 md:px-16 lg:w-[90%] xl:w-[70%] mx-auto mt-10 lg:mt-28">
      <div className="grid lg:grid-cols-3 lg:gap-0 gap-4 gap-y-12">
        <div className="text-3xl font-bold lg:text-center">{"{ JM }"}</div>
        <div className="grid md:grid-cols-2 md:col-span-2 gap-4 gap-y-12">
          {footerContent.map((section, index) => (
            <div key={index} className="flex lg:justify-center">
              <div>
                <h3 className="font-bold text-2xl mb-3">{section.title}</h3>
                <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-md">
                  {section.links
                    ? section.links.map((link, index) => (
                        <li key={index}>
                          <Link
                            target="_blank"
                            href={link.href}
                            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                          >
                            <i className={`${link.icon} mr-3`}></i>
                            {link.name}
                          </Link>
                        </li>
                      ))
                    : section.content?.map((content, index) => (
                        <li key={index} className="flex items-center">
                          <i className={`${content.icon} mr-3`}></i>
                          {content.content.startsWith("+51") ? (
                            <a href="tel:+51986327221">{content.content}</a>
                          ) : (
                            <span className="flex items-center">
                              {content.content}
                              {!isCopied ? (
                                <Copy
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      content.content
                                    );
                                    setIsCopied(true);
                                    setTimeout(() => {
                                      setIsCopied(false);
                                    }, 2000);
                                  }}
                                  className="cursor-pointer h-4 w-4 ml-4"
                                />
                              ) : (
                                <Check className="h-4 w-4 ml-4" />
                              )}
                            </span>
                          )}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
