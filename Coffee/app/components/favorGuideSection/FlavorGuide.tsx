"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFilterStore } from "../../store/useFilterStore";
import { Coffee, Wind, Zap, Sun, Citrus, Candy, Apple, Flame } from "lucide-react";
import { Flavor } from "./flavor";

const FLAVORS = [
    { id: 'ягоды' as Flavor, label: 'Ягоды', icon: Zap, desc: 'Яркая кислотность и сладость' },
    { id: 'шоколад' as Flavor, label: 'Шоколад', icon: Coffee, desc: 'Плотное тело и горчинка' },
    { id: 'орехи' as Flavor, label: 'Орехи', icon: Sun, desc: 'Сбалансированный мягкий вкус' },
    { id: 'цветы' as Flavor, label: 'Цветы', icon: Wind, desc: 'Легкий чайный профиль' },
    { id: 'цитрус' as Flavor, label: 'Цитрус', icon: Citrus, desc: 'Свежесть и бодрящая кислотность' },
    { id: 'карамель' as Flavor, label: 'Карамель', icon: Candy, desc: 'Сладость и кремовая нежность' },
    { id: 'фрукты' as Flavor, label: 'Фрукты', icon: Apple, desc: 'Сочные тропические и садовые ноты' },
    { id: 'пряности' as Flavor, label: 'Пряности', icon: Flame, desc: 'Теплые и ароматные акценты' },
];

const COFFEE_DATA: Record<Flavor, { name: string; notes: string; image: string }[]> = {
    ягоды: [
        { name: "Ethiopia Guji", notes: "Клубника, жасмин", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop" },
        { name: "Kenya AA", notes: "Смородина, шиповник", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop" },
        { name: "Ethiopia Yirgacheffe", notes: "Черника, малина", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" },
    ],
    шоколад: [
        { name: "Brazil Mogiana", notes: "Фундук, молочный шоколад", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1000&auto=format&fit=crop" },
        { name: "Guatemala Huehuetenango", notes: "Какао, карамель", image: "https://static.ticimax.cloud/7620/Uploads/UrunResimleri/buyuk/guatemala-antigua-200-gr-ec1-9d.jpg" },
        { name: "Colombia Supremo", notes: "Темный шоколад, орех", image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000&auto=format&fit=crop" },
    ],
    орехи: [
        { name: "Honduras San Marcos", notes: "Грецкий орех, нуга", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400" },
        { name: "Brazil Cerrado", notes: "Миндаль, фундук", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=400&auto=format&fit=crop" },
        { name: "Guatemala Antigua", notes: "Миндаль, пралине", image: "https://static.ticimax.cloud/7620/Uploads/UrunResimleri/buyuk/guatemala-antigua-200-gr-ec1-9d.jpg" },
    ],
    цветы: [
        { name: "Panama Geisha", notes: "Бергамот, лемонграсс", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400" },
        { name: "Ethiopia Yirgacheffe", notes: "Жасмин, чай", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop" },
    ],
    цитрус: [
        { name: "Kenya AA Single Origin", notes: "Грейпфрут, лимон", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop" },
        { name: "Costa Rica Tarrazu", notes: "Апельсин, мандарин", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" },
    ],
    карамель: [
        { name: "Brazil Mogiana", notes: "Карамель, сливочный крем", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1000&auto=format&fit=crop" },
        { name: "Colombia Supremo", notes: "Карамель, коричневый сахар", image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=400&auto=format&fit=crop" },
    ],
    фрукты: [
        { name: "Panama Geisha", notes: "Персик, абрикос", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400" },
        { name: "Ethiopia Guji", notes: "Манго, ананас", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400" },
    ],
    пряности: [
        { name: "Guatemala Antigua", notes: "Корица, гвоздика", image: "https://static.ticimax.cloud/7620/Uploads/UrunResimleri/buyuk/guatemala-antigua-200-gr-ec1-9d.jpg" },
        { name: "Honduras San Marcos", notes: "Мускатный орех, перец", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop" },
    ],
};

export default function FlavorGuide() {
    const { activeFlavor, setActiveFlavor } = useFilterStore();

    return (
        <section className="py-32 px-10 bg-[#080808]">
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-20 text-center space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">Навигатор вкуса</span>
                    <h2 className="text-4xl font-light text-white md:text-6xl italic">Найдите свой идеальный профиль</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {FLAVORS.map((flavor) => {
                        const Icon = flavor.icon;
                        const isActive = activeFlavor === flavor.id;
                        return (
                            <button
                                key={flavor.id}
                                onClick={() => setActiveFlavor(flavor.id)}
                                className={`relative group flex flex-col items-center p-8 border transition-all duration-500 ${
                                    isActive ? 'border-accent bg-accent/5' : 'border-white/5 bg-glass hover:border-white/20'
                                }`}
                            >
                                <Icon className={`mb-4 transition-colors ${isActive ? 'text-accent' : 'text-zinc-600 group-hover:text-white'}`} size={24} />
                                <span className="text-xs font-bold uppercase tracking-widest text-white mb-2">{flavor.label}</span>
                                <span className="text-[9px] text-zinc-500 uppercase tracking-tighter text-center">{flavor.desc}</span>
                                {isActive && (
                                    <motion.div layoutId="active-bg" className="absolute inset-0 border border-accent" />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {COFFEE_DATA[activeFlavor]?.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5"
                            >
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <h3 className="text-xl font-light text-white mb-2 uppercase tracking-widest">{item.name}</h3>
                                    <p className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">{item.notes}</p>
                                    <div className="mt-6 h-[1px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}