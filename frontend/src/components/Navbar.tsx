"use client";

import Image from "next/image";
import Link from "next/link";
import { navbar_data } from "../../data/navbar_data";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const [hidden, setHidden] = useState(false);
    const [showMenu, setShowMenu] = useState(false)


    // this hides the navbar on scroll
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // if scrolling down  hide
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setHidden(true);
            }
            // if scrolling up or at top → show
            else {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // This hides the scrollbar if the mobile menu is open
    useEffect(() => {
        document.body.style.overflowY = showMenu ? "auto" : "hidden"
    }, [showMenu])




    return (
        <nav
            ref={navRef}
            className={`
                w-full flex items-center justify-between gap-10 px-[6%] lg:px-[7%] py-3
                fixed top-0 left-0 bg-[#000000]
                transition-transform duration-300 ease-in-out
                ${hidden ? "-translate-y-full" : "translate-y-0"}
            `}
        >
            <Link href={"/"} className="z-20">
                <Image
                    src={"/logo/logo.png"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className={`w-30 md:w-42.5 transition-all duration-300 ease-in-out ${showMenu ? "invert" : ""}`}
                />
            </Link>

            <ul className="w-fit items-center gap-15 font-agrandir hidden md:flex">
                {navbar_data.map((link, i) => (
                    <li
                        key={i}
                        className="text-2xl lg:text-[32px] tracking-wide text-white hover:text-[#b3a8ff] transition-all duration-300"
                    >
                        <Link href={link.path}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Menu button */}
            <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex flex-col gap-2 md:hidden z-10 ">
                <span className={`w-9 h-0.75
                    ${showMenu ? "bg-[#000000]" : "bg-white"}
                    block transform transition-all duration-200 ease-in-out
                    ${showMenu ? "rotate-45 translate-y-1.5 " : " rotate-0 translate-y-0 "}`} />


                <span className={`w-9 h-0.75
                      ${showMenu ? "bg-[#000000]" : "bg-white"}
                    block transform transition-all duration-200 ease-in-out
                    ${showMenu ? "-rotate-45 -translate-y-1.5" : "rotate-0 translate-y-0"} `} />
            </button>





            {/* mobile menu  */}
            <div className={`
                w-full  fixed bg-[#b3a8ff] top-0 left-0 z-0 transition-all duration-400 ease-in-out
                pt-[40%] px-[8%] pb-[5%] overflow-hidden
${showMenu ? "h-screen opacity-100 " : "h-10 opacity-0"}
                `} >


                <ul className=" w-full flex flex-col items-start gap-6 " >
                    {navbar_data.map((link, i) => (
                        <li
                            key={i}

                            onClick={() => {
                                setShowMenu(false)
                            }}

                            className={`
                                font-agrandir text-[28px] text-[#000000] transition-all duration-200 ease-in-out
${showMenu ? " opacity-100 " : " opacity-0"}
                                `}
                        >
                            <Link href={link.path}> {link.label} </Link>
                        </li>
                    ))}
                </ul>

            </div>




        </nav>
    );
}