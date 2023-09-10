import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import Link from "next/link";
import { Providers } from "@/providers";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Carlos",
  description: "Mi portafolio",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

const Footer = () => {
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
                            href={link.href}
                            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                          >
                            <i className={`${link.icon} mr-3`}></i>
                            {link.name}
                          </Link>
                        </li>
                      ))
                    : section.content?.map((content, index) => (
                        <li key={index}>
                          <i className={`${content.icon} mr-3`}></i>
                          {content.content}
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
