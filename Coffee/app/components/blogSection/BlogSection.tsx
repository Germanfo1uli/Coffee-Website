"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const POSTS = [
    {
        id: 1,
        date: "24 Февраля, 2026",
        title: "Искусство домашнего пуровера: секреты пролива",
        description: "Разбираем, как температура воды и скорость вливания влияют на раскрытие ягодных нот в кенийских сортах.",
        image: "https://avatars.mds.yandex.net/i?id=1e9dfe5cad4b6cffa4da2c94c49fe6c4_l-8283357-images-thumbs&n=13"
    },
    {
        id: 2,
        date: "18 Февраля, 2026",
        title: "Почему мы выбираем только светлую обжарку?",
        description: "О том, как сохранить терруар зерна и не превратить благородный кофе в угольный привкус.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800"
    },
    {
        id: 3,
        date: "10 Февраля, 2026",
        title: "Путешествие в регион Гуджи: репортаж с ферм",
        description: "Наш главный обжарщик делится впечатлениями от поездки в Эфиопию и выбора нового лота.",
        image: "https://avatars.mds.yandex.net/i?id=5ccf5684f01a8cea5d009e4cad5b2e6b_l-3727509-images-thumbs&n=13"
    }
];

export default function BlogSection() {
    return (
        <section className="py-32 px-10 bg-background">
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-16 flex items-end justify-between border-b border-white/5 pb-10">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">Журнал</span>
                        <h2 className="text-4xl font-light text-white md:text-5xl uppercase tracking-tighter">Свежие <span className="italic text-accent">мысли</span></h2>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-accent transition-colors">
                        Читать все статьи <ArrowUpRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {POSTS.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative mb-8 aspect-[16/10] overflow-hidden bg-zinc-900">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="space-y-4">
                                <time className="text-[9px] font-bold tracking-[0.2em] text-accent uppercase">
                                    {post.date}
                                </time>
                                <h3 className="text-xl font-light leading-tight text-white group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-[12px] leading-relaxed text-zinc-500 line-clamp-2 uppercase tracking-wide font-medium">
                                    {post.description}
                                </p>
                                <div className="pt-4 overflow-hidden">
                                    <div className="h-[1px] w-full bg-white/5 relative">
                                        <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}