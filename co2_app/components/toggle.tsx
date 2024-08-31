import React, { useState } from "react";
import { SubHeading } from "@/components/heading";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

enum Toggle {
  NONE = 1,
  ASC = 2,
  DESC = 3,
}

export function ToggleButton({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState<Toggle>(1);

  return (
    <div
      onClick={() => {
        if (toggle >= Object.keys(Toggle).length) {
          setToggle(toggle + 1);
        }
      }}
    >
      <SubHeading>{children}</SubHeading>
      <ChevronDownIcon className={"h-5"} />
      <FunnelIcon className={"h-5"} />
    </div>
  );
}
