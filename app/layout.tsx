import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

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
    content: ["jcmrojas29@gmail.com", "+51 986 327 221"],
  },
  {
    title: "Redes Sociales",
    links: [
      {
        name: "Linkedin",
        href: LINKEDIN_URL,
      },
      {
        name: "Github",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <footer className="py-16 px-4 lg:w-3/4 xl:w-1/2 mx-auto ">
            <div className="grid lg:grid-cols-3 lg:gap-0 gap-4 gap-y-8">
              <div className="text-2xl xl:text-3xl font-bold lg:text-center">
                {"{ JM }"}
              </div>
              {footerContent.map((section, index) => (
                <div key={index} className="flex lg:justify-center">
                  <div>
                    <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      {section.links
                        ? section.links.map((link, index) => (
                            <li key={index}>
                              <a href={link.href}>{link.name}</a>
                            </li>
                          ))
                        : section.content?.map((content, index) => (
                            <li key={index}>{content}</li>
                          ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
