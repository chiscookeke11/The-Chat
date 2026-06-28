"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[1000vh] " >


      <Image src={"/logo/logo.png"} alt="logo" width={1000} height={1000} />
    </div>
  );
}
