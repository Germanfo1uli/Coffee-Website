"use client";

import { motion } from "framer-motion";

const TIMELINE = [
    { year: "2015", title: "Первая поездка", desc: "Экспедиция в Колумбию, где мы влюбились в фермерский кофе." },
    { year: "2018", title: "Своя обжарка", desc: "Установка первого ростера Giesen и старт производства." },
    { year: "2021", title: "Масштабирование", desc: "Прямые контракты с фермерами Эфиопии и Бразилии." },
    { year: "2024", title: "Лаборатория", desc: "Открытие Q-grader центра для контроля качества каждой партии." },
];

export default function JourneySection() {
    return (
        <section className="py-32 bg-zinc-950 relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                    <div>
                        <h2 className="text-3xl font-light text-white uppercase tracking-widest mb-8">Наш путь</h2>
                        <p className="text-zinc-400 leading-relaxed text-lg font-light">
                            Все началось с одной чашки эспрессо в Боготе, которая перевернула наше представление о кофе.
                            Мы поняли, что кофе — это не просто кофеин, это терруар, труд фермера и магия обжарки.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8 lg:justify-end">
                        <div className="border-l border-accent/30 pl-6">
                            <div className="text-4xl text-white font-light italic">500+</div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Тонн обжарено</div>
                        </div>
                        <div className="border-l border-accent/30 pl-6">
                            <div className="text-4xl text-white font-light italic">12</div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Стран партнеров</div>
                        </div>
                    </div>
                </div>

                <div className="relative pt-20">
                    <div className="absolute top-[88px] left-0 w-full h-px bg-white/5" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {TIMELINE.map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="group"
                            >
                                <div className="w-4 h-4 rounded-full bg-accent mb-12 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(196,140,90,0.5)]" />
                                <h3 className="text-3xl font-light text-white mb-4 italic">{item.year}</h3>
                                <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{item.title}</h4>
                                <p className="text-sm text-zinc-500 leading-relaxed uppercase tracking-wide">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}