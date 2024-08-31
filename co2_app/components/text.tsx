import React from "react";

export function Text({ children }: { children: React.ReactNode }) {
  return (
    <p className={"text-xs text-zinc-600 md:text-sm dark:text-zinc-200"}>
      {children}
    </p>
  );
}
