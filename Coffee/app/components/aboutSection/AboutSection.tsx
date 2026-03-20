"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="relative min-h-[80vh] w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://avatars.mds.yandex.net/i?id=6cedb5c9c1eb9ee746686d8261530498_l-10555242-images-thumbs&n=13"
                    alt="Roasting Process"
                    className="h-full w-full object-cover grayscale-[0.5] scale-110"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1400px] items-center px-10">
                <div className="max-w-2xl space-y-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.6em] text-accent">
                            Наше ремесло
                        </span>
                        <h2 className="text-5xl font-light leading-none text-white md:text-7xl">
                            От плантации<br />
                            <span className="italic text-accent text-4xl md:text-6xl -mt-2 md:-mt-4">
                                до вашей чашки
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm leading-relaxed tracking-[0.12em] text-zinc-200 uppercase"
                    >
                        Мы лично посещаем фермы в Эфиопии, Колумбии и Бразилии, чтобы отобрать
                        лучшие зерна. Каждая партия обжаривается вручную небольшими тиражами,
                        раскрывая уникальный профиль вкуса, заложенный самой природой.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-10"
                    >
                        <Link
                            href="/history"
                            className="group relative overflow-hidden border border-accent/40 bg-accent/5 px-12 py-6 transition-all hover:border-accent"
                        >
                            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.4em] text-white">
                                Наша история
                            </span>
                            <div className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
                        </Link>

                        <button className="flex items-center gap-5 group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-glass transition-all group-hover:border-accent group-hover:scale-110">
                                <Play size={16} className="fill-white text-white ml-1" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-300 group-hover:text-white transition-colors">
                                Смотреть процесс
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />
            <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-background to-transparent" />
        </section>
    );
}