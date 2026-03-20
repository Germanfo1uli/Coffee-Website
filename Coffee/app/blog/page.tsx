"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Footer from "@/app/components/footer/Footer";

const POSTS = [
    {
        id: "1",
        title: "Пуровер против Аэропресса: что выбрать новичку?",
        date: "28 Февраля, 2026",
        category: "Обзоры",
        excerpt: "Разбираем два самых популярных способа ручного заваривания. Почему Аэропресс идеален для путешествий, а пуровер — для раскрытия терруара зерна.",
        image: "https://img.freepik.com/free-photo/adult-harvesting-coffee_23-2151711704.jpg?semt=ais_hybrid&w=740",
    },
    {
        id: "2",
        title: "Искусство домашней обжарки",
        date: "25 Февраля, 2026",
        category: "Лайфхаки",
        excerpt: "Можно ли добиться профессионального профиля обжарки на обычной сковороде? Спойлер: это сложно, но возможно.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    },
    {
        id: "3",
        title: "Почему Эфиопия всегда пахнет цветами?",
        date: "22 Февраля, 2026",
        category: "Рецепты",
        excerpt: "История происхождения кофейных деревьев и влияние высоты произрастания на формирование кислотности.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800",
    },
    {
        id: "4",
        title: "Гайд по воде для кофе",
        date: "18 Февраля, 2026",
        category: "Основы",
        excerpt: "Забытый ингредиент: как минерализация воды меняет вкус вашей чашки от «пусто» до «изумительно».",
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800",
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-10">
            <div className="max-w-[1400px] mx-auto">
                <header className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-xs font-bold uppercase tracking-[0.4em] block mb-4"
                    >
                        Культура и знания
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-light text-white uppercase tracking-tighter"
                    >
                        Журнал <span className="italic text-zinc-500 text-4xl md:text-6xl pl-4">CoffeeSoul</span>
                    </motion.h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={idx === 0 ? "md:col-span-2" : ""}
                        >
                            <Link href={`/blog/${post.id}`} className="group block relative overflow-hidden bg-black aspect-video md:aspect-auto h-full min-h-[400px]">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                <div className="absolute top-6 left-6 z-20">
                                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10">
                                        <Tag size={10} className="text-accent" />
                                        <span className="text-[9px] font-black uppercase tracking-widest text-white">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="flex items-center gap-2 text-[10px] text-accent uppercase tracking-widest font-medium">
                                            <Calendar size={12} /> {post.date}
                                        </span>
                                        <div className="h-px w-8 bg-accent/30" />
                                    </div>

                                    <h2 className={`${idx === 0 ? 'text-3xl md:text-5xl' : 'text-2xl'} font-light text-white mb-4 uppercase tracking-tight leading-tight max-w-2xl group-hover:text-accent transition-colors`}>
                                        {post.title}
                                    </h2>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                                        <div className="overflow-hidden">
                                            <p className="text-[11px] text-zinc-300 uppercase tracking-wider leading-relaxed line-clamp-2 max-w-xl mb-6">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                                                Читать статью <ArrowRight size={14} className="text-accent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-30"/>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer/>
        </main>
    );
}