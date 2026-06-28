"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[1000vh] " >
      <h1 className="font-agrandir " >Hello this is the chat podcast </h1>

      <Image src={"/logo/logo.png"} alt="logo" width={1000} height={1000} />
    </div>
  );
}
