"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useHero } from "./useHero";

export default function Hero() {
    const { containerRef, motionStyles } = useHero();

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-20"
        >
            <motion.div
                initial={{ scale: 1.25, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    scale: motionStyles.scaleImage,
                    filter: motionStyles.blurImage
                }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0a]" />
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />
                <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                    alt="Specialty Coffee"
                    className="h-full w-full object-cover opacity-60 grayscale-[0.2]"
                />
            </motion.div>

            <div className="absolute inset-0 z-[5] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <motion.div
                style={{ y: motionStyles.yText, opacity: motionStyles.opacityText }}
                className="relative z-20 flex w-full max-w-[1200px] flex-col items-center text-center"
            >
                <div className="mb-8 flex items-center gap-4 overflow-hidden">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-[1px] w-12 bg-accent/50"
                    />
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent"
                    >
                        <Star size={10} className="fill-accent" />
                        Est. 1992
                        <Star size={10} className="fill-accent" />
                    </motion.span>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-[1px] w-12 bg-accent/50"
                    />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative text-6xl font-extralight leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl"
                >
                    <span className="block">Вкус, который</span>
                    <span className="relative mt-2 block font-serif italic text-white/90">
                    </span>
                    <span className="block bg-gradient-to-b from-accent to-accent/60 bg-clip-text text-transparent">
                        завораживает
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mt-10 max-w-lg text-center text-xs font-medium uppercase leading-relaxed tracking-[0.15em] text-zinc-400"
                >
                    Редкие лоты specialty, обжаренные вручную <br className="hidden md:block" />
                    для истинных ценителей момента.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-14"
                >
                    <Link href="/catalog" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-md transition-all duration-500 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_40px_-10px_rgba(var(--accent-rgb),0.3)]">
                        <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors group-hover:text-accent">
                            Выбрать сорт
                        </span>
                        <ArrowRight size={14} className="relative z-10 text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
            >
                <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/30">
                    Листайте вниз
                </span>
                <div className="h-16 w-[1px] overflow-hidden bg-white/10">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-1/2 w-full bg-gradient-to-b from-transparent via-accent to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
}