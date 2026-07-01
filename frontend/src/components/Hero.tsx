import Button from "./UI/Button";
import { ArrowRight } from "lucide-react";




export default function Hero() {
    return (
        <section className="w-full h-screen flex flex-col gap-9 items-center justify-center font-agrandir text-white  " >


            <h1 className="text-5xl md:text-7xl lg:text-[130px] text-center  " >Microphone <br /> Media</h1>

            <Button  >
                <ArrowRight size={30} />
                Get started
                <ArrowRight size={30} />
            </Button>
        </section>
    )
}