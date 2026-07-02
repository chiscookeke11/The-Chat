import Image from "next/image";
import Button from "./UI/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"




export default function Hero() {


    return (
        <section className="w-full h-screen flex flex-col gap-9 items-center justify-center
         font-agrandir text-white  relative  overflow-hidden " >


            <motion.h1
                initial={{
                    opacity: 0,
                    x: 30
                }}

                animate={{
                    opacity: 1,
                    x: 0
                }}

                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}


                className="text-5xl md:text-7xl lg:text-[150px] text-center z-20  " >The Chat</motion.h1>

            <motion.div
                className="z-50"

                initial={{
                    opacity: 0,
                    x: 30
                }}

                animate={{
                    opacity: 1,
                    x: 0
                }}

                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
            >
                <Button>
                    <ArrowRight size={30} />
                    Get started
                    <ArrowRight size={30} />
                </Button>
            </motion.div>


            {/* the images  */}
            <motion.div

                initial={{
                    opacity: 0,
                    x: -100
                }}

                animate={{
                    opacity: 1,
                    x: 0
                }}

                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
                className="
    absolute
    top-[59%]
    -translate-y-1/2
    -right-[16%]
    md:right-[-10%]
    lg:right-[10%]
    xl:right-[12%]

    w-[260px]
    sm:w-[330px]
    md:w-[430px]
    lg:w-[540px]
    xl:w-[600px]

    aspect-[6/7]
  " >


                <div


                    className=" w-full h-full " >
                    <Image
                        src={"/Hero-images/left.webp"}
                        alt="image"
                        width={1000}
                        height={1000}
                        className=" h-auto  absolute z-10 "
                    />


                    <Image
                        src={"/Hero-images/right.webp"}
                        alt="image"
                        width={1000}
                        height={1000}
                        className=" h-auto  absolute z-10"
                    />
                </div>



            </motion.div>


        </section >
    )
}