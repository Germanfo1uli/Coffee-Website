"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import ArticleProductPromo from ".././ArticleProductPromo";
import Footer from "@/app/components/footer/Footer";

export default function BlogPostPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <div className="relative h-[70vh] w-full overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src="https://img.freepik.com/free-photo/adult-harvesting-coffee_23-2151711704.jpg?semt=ais_hybrid&w=740"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />

                <div className="absolute inset-0 flex items-center justify-center px-10">
                    <div className="max-w-4xl w-full text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <Link href="/blog" className="flex items-center gap-2 text-[10px] text-accent font-bold uppercase tracking-[0.4em] hover:text-white transition-colors mb-8">
                                <ArrowLeft size={14} /> Назад в журнал
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter leading-tight">
                                Пуровер против Аэропресса: <br /> что выбрать новичку?
                            </h1>
                            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                                <span className="flex items-center gap-2 text-[10px] text-zinc-400 uppercase tracking-widest">
                                    <User size={14} className="text-accent" /> Алекс Ростер
                                </span>
                                <span className="flex items-center gap-2 text-[10px] text-zinc-400 uppercase tracking-widest">
                                    <Calendar size={14} className="text-accent" /> 28 Февраля, 2026
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-10 -mt-20 relative z-10">
                <div className="bg-background/80 backdrop-blur-xl p-10 md:p-16 border border-white/5 space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-light text-white uppercase tracking-widest">Введение в альтернативу</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-wide">
                            Мир спешелти кофе открывает бесконечные возможности для экспериментов. Сегодня мы столкнем лбами двух титанов домашнего заваривания, которые кардинально отличаются по философии, но дают потрясающий результат в чашке.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h3 className="text-xl font-light text-accent uppercase tracking-widest">Hario V60: Чистота вкуса</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-wide">
                            Пуровер — это про элегантность. Вода медленно проходит сквозь слой молотого кофе, вымывая самые тонкие эфирные масла. Если вы любите чайное тело и яркую кислотность — это ваш выбор.
                        </p>
                    </section>

                    <ArticleProductPromo
                        id={1}
                        name="Ethiopia Yirgacheffe"
                        price="1 450"
                        notes="Жасмин, лемонграсс, персик"
                        image="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600"
                    />

                    <section className="space-y-6">
                        <h3 className="text-xl font-light text-accent uppercase tracking-widest">Aeropress: Мощь и универсальность</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-wide">
                            Аэропресс использует давление. Это делает напиток более плотным, напоминающим нечто среднее между фильтр-кофе и американо. Главный плюс — его невозможно сломать, и он прощает ошибки помола.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-4">
                            <span className="px-3 py-1 bg-white/5 text-[9px] text-zinc-400 uppercase tracking-widest">#brewguide</span>
                            <span className="px-3 py-1 bg-white/5 text-[9px] text-zinc-400 uppercase tracking-widest">#pourover</span>
                        </div>
                        <button className="text-zinc-500 hover:text-accent transition-colors">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>

                <div className="mt-24 space-y-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-center text-zinc-500">Похожие материалы</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group border border-white/5 bg-glass p-6 transition-all hover:border-accent/20 mb-8">
                            <div className="aspect-video overflow-hidden mb-6">
                                <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=400" className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0" />
                            </div>
                            <h5 className="text-white uppercase text-sm tracking-widest group-hover:text-accent transition-colors">Гайд по воде для кофе</h5>
                        </div>
                        <div className="group border border-white/5 bg-glass p-6 transition-all hover:border-accent/20 mb-8">
                            <div className="aspect-video overflow-hidden mb-6">
                                <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400" className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0" />
                            </div>
                            <h5 className="text-white uppercase text-sm tracking-widest group-hover:text-accent transition-colors">Почему Эфиопия всегда пахнет цветами?</h5>
                        </div>
                    </div>
                </div>
            </article>
            <Footer/>
        </main>
    );
}