import React from "react"

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}


export default function Button({ children, ...props }: buttonProps) {
    return (
        <button
            className="
  border-2 border-white
  py-4 md:py-6.5
  px-10
  rounded-[100px]
  text-xl md:text-3xl
  hover:bg-[#b3a8ff]
  hover:border-[#b3a8ff]
  hover:text-black
  transition-all duration-200 ease-in-out
  bg-transparent
  z-10
  flex items-center gap-3
"
            {...props}>
            {children}
        </button>
    )
}