import Image from "next/image";
import Button from "./UI/Button";
import { ArrowRight } from "lucide-react";




export default function Hero() {
    return (
        <section className="w-full h-screen flex flex-col gap-9 items-center justify-center
         font-agrandir text-white  relative  overflow-hidden " >


            <h1 className="text-5xl md:text-7xl lg:text-[150px] text-center z-20  " >The Chat</h1>

            <Button  >
                <ArrowRight size={30} />
                Get started
                <ArrowRight size={30} />
            </Button>


            {/* the images  */}
            <div className="
    absolute
    top-1/2
    -translate-y-1/2
    -right-[16%]
    md:right-[-10%]
    lg:right-8
    xl:right-20

    w-[280px]
    sm:w-[360px]
    md:w-[450px]
    lg:w-[560px]
    xl:w-[620px]

    aspect-[6/7]
  " >


                <div className=" w-full h-full " >
                    <Image
                        src={"/hero-images/left.webp"}
                        alt="image"
                        width={1000}
                        height={1000}
                        className=" h-auto  absolute z-10 "
                    />


                    <Image
                        src={"/hero-images/right.webp"}
                        alt="image"
                        width={1000}
                        height={1000}
                        className=" h-auto  absolute z-10"
                    />
                </div>



            </div>


        </section>
    )
}