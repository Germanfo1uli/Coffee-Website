"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://ir.ozone.ru/s3/multimedia-u/6265355850.jpg"
                    className="h-full w-full object-cover scale-105"
                    alt="Roasters at work"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">О компании</span>
                    <h1 className="text-5xl md:text-8xl font-light text-white leading-tight uppercase tracking-tighter max-w-4xl">
                        Мы не просто продаем кофе. <br />
                        <span className="italic text-zinc-500">Мы ищем идеальный вкус</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}