import React from "react";

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={"text-xl text-zinc-950 md:text-2xl dark:text-white font-semibold"}>
      {children}
    </h1>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
      <h1 className={"text-sm text-zinc-950 md:text-base dark:text-white font-semibold"}>
        {children}
      </h1>
  );
}
