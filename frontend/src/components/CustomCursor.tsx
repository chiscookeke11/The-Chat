"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        );

        setEnabled(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setEnabled(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        if (!enabled) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [enabled]);

    if (!enabled) return null;

    return <div ref={cursorRef} className="custom-cursor" />;
}