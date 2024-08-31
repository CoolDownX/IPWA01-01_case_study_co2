import Image from "next/image";

interface country {
  name: string;
  iso_code: string;
}

export default function Flag({ name, iso_code }: country) {
  return (
    <div className={"relative aspect-[5/4] w-5"}>
      <Image
        src={`https://flagcdn.com/40x30/${iso_code}.png`}
        alt={name}
        fill={true}
      ></Image>
    </div>
  );
}
