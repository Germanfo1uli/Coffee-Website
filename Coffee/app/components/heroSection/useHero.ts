"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useHero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
    const blurImage = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

    return {
        containerRef,
        motionStyles: {
            yText,
            opacityText,
            scaleImage,
            blurImage,
        },
    };
}