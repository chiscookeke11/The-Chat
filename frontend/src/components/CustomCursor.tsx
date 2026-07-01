"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            currentX = mouseX;
            currentY = mouseY;

            cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div className="custom-cursor " ref={cursorRef} />;
}