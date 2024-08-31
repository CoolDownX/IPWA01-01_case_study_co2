import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CO2 Viewer",
  description:
    "A simple Web-Application to view some static CO2 Emissions Data",
};

const navigation: string[] = ["Contact", "Impressum"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "min-w-screen h-full min-h-screen w-full bg-zinc-50",
        )}
      >
        <header
          className={
            "fixed flex h-14 w-full items-center justify-center bg-white drop-shadow-md"
          }
        >
          <div className={"flex h-full w-full max-w-7xl"}>
            <div className={"flex h-full w-1/3 items-center justify-start"}>
              <h1 className={"text-lg font-bold"}>CO2 Viewer</h1>
              <div className={"relative h-10 w-10"}>
                <Image
                  alt={"Logo Leaf"}
                  src={"/logo_leaf.png"}
                  className={"rotate-45"}
                  fill={true}
                />
              </div>
            </div>
            <div
              className={"flex h-full w-1/3 items-center justify-center"}
            ></div>
            <div
              className={"flex h-full w-1/3 items-center justify-end gap-10"}
            >
              {navigation.map((entry, index) => {
                return (
                  <h2 key={index} className={"text-sm font-semibold"}>
                    {entry}
                  </h2>
                );
              })}
            </div>
          </div>
        </header>
        {children}
        <footer className={"min-w-screen flex bg-zinc-100 min-h-20"}></footer>
      </body>
    </html>
  );
}
