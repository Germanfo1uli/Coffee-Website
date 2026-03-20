"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, X, SlidersHorizontal, RotateCcw } from "lucide-react";
import { CatalogProductCard } from "./CatalogProductCard";
import Footer from "@/app/components/footer/Footer";

const ROAST_TYPES = [
    { id: "light", label: "Светлая", color: "bg-[#D9B991]" },
    { id: "medium", label: "Средняя", color: "bg-[#8B5E3C]" },
    { id: "dark", label: "Темная", color: "bg-[#3C2A21]" },
];

const COUNTRIES = ["Колумбия", "Эфиопия", "Кения", "Коста-Рика", "Бразилия", "Индонезия", "Гватемала", "Панама", "Гондурас"];

const FLAVOR_NOTES = [
    { id: "ягоды", label: "Ягоды", color: "#E91E63" },
    { id: "шоколад", label: "Шоколад", color: "#5D4037" },
    { id: "орехи", label: "Орехи", color: "#795548" },
    { id: "цитрусы", label: "Цитрусы", color: "#FF9800" },
    { id: "цветы", label: "Цветы", color: "#9C27B0" },
    { id: "карамель", label: "Карамель", color: "#FFC107" },
    { id: "пряности", label: "Пряности", color: "#607D8B" },
];

const PRODUCTS_MOCK = [
    { id: 1, name: "Эфиопия Гедэб", price: 1450, rating: 4.8, roast: "light", country: "Эфиопия", notes: ["ягоды", "цветы"], image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800" },
    { id: 2, name: "Бразилия Серрадо", price: 1200, rating: 4.5, roast: "medium", country: "Бразилия", notes: ["шоколад", "орехи"], image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800" },
    { id: 3, name: "Колумбия Супремо", price: 1350, rating: 4.9, roast: "dark", country: "Колумбия", notes: ["карамель", "шоколад"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800" },
    { id: 4, name: "Кения AA", price: 1800, rating: 5.0, roast: "light", country: "Кения", notes: ["ягоды", "цитрусы"], image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800" },
    { id: 5, name: "Коста-Рика Тарацзу", price: 1550, rating: 4.7, roast: "medium", country: "Коста-Рика", notes: ["цитрусы", "мёд"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800" },
    { id: 6, name: "Панама Гейша", price: 5900, rating: 5.0, roast: "light", country: "Панама", notes: ["цветы", "фрукты"], image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800" },
    { id: 7, name: "Гватемала Антигуа", price: 1650, rating: 4.6, roast: "medium", country: "Гватемала", notes: ["шоколад", "пряности"], image: "https://static.ticimax.cloud/7620/Uploads/UrunResimleri/buyuk/guatemala-antigua-200-gr-ec1-9d.jpg", secondImage: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800" },
    { id: 8, name: "Индонезия Суматра", price: 1400, rating: 4.4, roast: "dark", country: "Индонезия", notes: ["пряности", "земля"], image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800" },
    { id: 9, name: "Эфиопия Йиргачеффе", price: 1520, rating: 4.9, roast: "light", country: "Эфиопия", notes: ["цветы", "цитрусы"], image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800" },
    { id: 10, name: "Бразилия Моджиана", price: 1280, rating: 4.6, roast: "medium", country: "Бразилия", notes: ["орехи", "карамель"], image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800" },
    { id: 11, name: "Гондурас Сан Маркос", price: 1390, rating: 4.7, roast: "medium", country: "Гондурас", notes: ["орехи", "шоколад"], image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800" },
    { id: 12, name: "Колумбия Уила", price: 1480, rating: 4.8, roast: "light", country: "Колумбия", notes: ["ягоды", "карамель"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800" },
    { id: 13, name: "Кения Кириниага", price: 1950, rating: 4.9, roast: "light", country: "Кения", notes: ["ягоды", "цитрусы"], image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800" },
    { id: 14, name: "Панама Бокета", price: 2100, rating: 4.7, roast: "medium", country: "Панама", notes: ["фрукты", "цветы"], image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800" },
    { id: 15, name: "Гватемала Уэуэтенанго", price: 1620, rating: 4.6, roast: "medium", country: "Гватемала", notes: ["шоколад", "карамель"], image: "https://static.ticimax.cloud/7620/Uploads/UrunResimleri/buyuk/guatemala-antigua-200-gr-ec1-9d.jpg", secondImage: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800" },
    { id: 16, name: "Индонезия Сулавеси", price: 1580, rating: 4.5, roast: "dark", country: "Индонезия", notes: ["пряности", "шоколад"], image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800", secondImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800" },
];

export default function CatalogPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");

    const activeRoast = searchParams.get("roast");
    const activeCountries = searchParams.get("countries")?.split(",") || [];
    const activeNotes = searchParams.get("notes")?.split(",") || [];
    const sortBy = searchParams.get("sort") || "popular";

    const hasFilters = activeRoast || activeCountries.length > 0 || activeNotes.length > 0;

    const updateFilters = (key: string, value: string | string[] | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!value || (Array.isArray(value) && value.length === 0)) {
            params.delete(key);
        } else {
            params.set(key, Array.isArray(value) ? value.join(",") : value);
        }
        router.push(`/catalog?${params.toString()}`, { scroll: false });
    };

    const resetAllFilters = () => {
        setCountrySearch("");
        router.push("/catalog", { scroll: false });
    };

    const filteredProducts = useMemo(() => {
        return PRODUCTS_MOCK.filter(p => {
            if (activeRoast && p.roast !== activeRoast) return false;
            if (activeCountries.length > 0 && !activeCountries.includes(p.country)) return false;
            if (activeNotes.length > 0 && !activeNotes.some(n => p.notes.includes(n))) return false;
            return true;
        }).sort((a, b) => {
            if (sortBy === "price-asc") return a.price - b.price;
            if (sortBy === "price-desc") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            return 0;
        });
    }, [activeRoast, activeCountries, activeNotes, sortBy]);

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6 lg:px-10">
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    transition: background 0.3s ease;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: #C4A484;
                }
            `}</style>

            <div className="mx-auto max-w-[1400px]">
                <header className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-5xl font-light uppercase tracking-[0.2em] text-white md:text-7xl">
                            Каталог
                        </h1>
                        <div className="mt-4 flex items-center gap-6">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                                Результаты: {filteredProducts.length}
                            </p>
                            {hasFilters && (
                                <button
                                    onClick={resetAllFilters}
                                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent hover:text-white transition-colors"
                                >
                                    <RotateCcw size={10} />
                                    Сбросить всё
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`flex items-center gap-3 border px-6 py-4 transition-all ${isFilterOpen ? 'border-accent bg-accent text-black' : 'border-white/10 text-white hover:border-white/30'}`}
                        >
                            <SlidersHorizontal size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Фильтры</span>
                        </button>

                        <div className="relative group">
                            <select
                                value={sortBy}
                                onChange={(e) => updateFilters("sort", e.target.value)}
                                className="appearance-none bg-zinc-900 border border-white/10 px-8 py-4 pr-12 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-accent"
                            >
                                <option value="popular">По популярности</option>
                                <option value="price-asc">Сначала дешевые</option>
                                <option value="price-desc">Сначала дорогие</option>
                                <option value="rating">По рейтингу</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent pointer-events-none" />
                        </div>
                    </div>
                </header>

                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mb-12 border-b border-white/5"
                        >
                            <div className="flex flex-wrap justify-start gap-x-12 md:gap-x-20 gap-y-12 pb-12 px-4 md:px-8">
                                <div className="min-w-[140px]">
                                    <h4 className="mb-6 text-[11px] font-black uppercase tracking-[0.3em] text-accent">Обжарка</h4>
                                    <div className="space-y-3">
                                        {ROAST_TYPES.map(roast => (
                                            <button
                                                key={roast.id}
                                                onClick={() => updateFilters("roast", roast.id === activeRoast ? null : roast.id)}
                                                className="flex items-center gap-3 group w-full text-left"
                                            >
                                                <div className={`h-3.5 w-3.5 rounded-full border border-white/20 transition-all ${roast.color} ${activeRoast === roast.id ? 'scale-110 ring-2 ring-accent ring-offset-2 ring-offset-zinc-950' : 'opacity-40 group-hover:opacity-100'}`} />
                                                <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${activeRoast === roast.id ? 'text-white font-bold' : 'text-zinc-500'}`}>{roast.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="min-w-[180px] max-w-[240px]">
                                    <h4 className="mb-6 text-[11px] font-black uppercase tracking-[0.3em] text-accent">Страна</h4>
                                    <div className="relative mb-4">
                                        <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
                                        <input
                                            placeholder="ПОИСК..."
                                            className="w-full bg-zinc-900/50 border border-white/5 py-2 pl-9 pr-4 text-[10px] uppercase text-white outline-none focus:border-accent/30"
                                            value={countrySearch}
                                            onChange={(e) => setCountrySearch(e.target.value)}
                                        />
                                    </div>
                                    <div className="max-h-40 overflow-y-auto space-y-2 custom-scrollbar pr-2">
                                        {COUNTRIES.filter(c => c.toLowerCase().includes(countrySearch.toLowerCase())).map(country => (
                                            <button
                                                key={country}
                                                onClick={() => {
                                                    const next = activeCountries.includes(country)
                                                        ? activeCountries.filter(c => c !== country)
                                                        : [...activeCountries, country];
                                                    updateFilters("countries", next);
                                                }}
                                                className="flex items-center gap-3 group w-full text-left"
                                            >
                                                <div className={`h-4 w-4 border transition-all ${activeCountries.includes(country) ? 'bg-accent border-accent' : 'border-white/10 group-hover:border-white/30'}`} />
                                                <span className={`text-[11px] uppercase tracking-widest ${activeCountries.includes(country) ? 'text-white' : 'text-zinc-500'}`}>{country}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 min-w-[280px]">
                                    <h4 className="mb-6 text-[11px] font-black uppercase tracking-[0.3em] text-accent">Ноты вкуса</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {FLAVOR_NOTES.map(note => {
                                            const isActive = activeNotes.includes(note.id);
                                            return (
                                                <button
                                                    key={note.id}
                                                    onClick={() => {
                                                        const next = isActive
                                                            ? activeNotes.filter(n => n !== note.id)
                                                            : [...activeNotes, note.id];
                                                        updateFilters("notes", next);
                                                    }}
                                                    className={`flex items-center gap-2 border px-4 py-2 transition-all ${isActive ? 'border-accent text-white' : 'border-white/5 bg-white/5 text-zinc-500 hover:border-white/20'}`}
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: note.color }} />
                                                    <span className="text-[9px] font-bold uppercase tracking-widest">{note.label}</span>
                                                    {isActive && <X size={10} className="ml-1 text-accent" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <CatalogProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 border border-dashed border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-8">Ничего не найдено</p>
                        <button
                            onClick={resetAllFilters}
                            className="border border-accent px-10 py-4 text-[10px] font-black uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all"
                        >
                            Сбросить фильтры
                        </button>
                    </div>
                )}
            </div>
            <Footer/>
        </main>
    );
}