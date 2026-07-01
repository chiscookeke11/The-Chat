import Image from "next/image";
import Link from "next/link";
import { navbar_data } from "../../data/navbar_data";




export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between gap-10 px-[3%] md:px-[7%] py-3 " >

            <Link href={"/"} >
                <Image src={"/logo/logo.png"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-25 md:w-42.5 "
                />
            </Link>

            <ul className="w-fit flex items-center gap-15 font-agrandir " >
                {navbar_data.map((link, i) => (
                    <li key={i} className=" text-2xl md:text-[32px] tracking-wide text-white hover:text-[#b3a8ff]  *:
                    transition-all ease-in-out duration-300
                    "  >
                        <Link href={link.path} >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    )
}