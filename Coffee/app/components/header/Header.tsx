"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ShoppingBag, Coffee, X, ChevronDown, Menu } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import CartDrawer from "../cartDraw/CartDrawer";
import { useHeader } from "./useHeader";
import { NavItem } from "./types";

const navItems: NavItem[] = [
    {
        name: "Каталог",
        href: "/catalog",
        subItems: ["По обжарке", "По стране", "По вкусам"]
    },
    { name: "Блог", href: "/blog" },
    { name: "О нас", href: "/about" },
];

export default function Header() {
    const { count } = useCart();
    const { state, actions, motion: motionStyles } = useHeader();

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    backgroundColor: motionStyles.headerBg,
                    backdropFilter: motionStyles.headerBlur,
                    borderBottomColor: motionStyles.headerBorder
                }}
                className={`fixed top-0 z-[100] w-full border-b transition-[padding] duration-500 ease-out ${
                    state.isScrolled ? "py-4" : "py-8"
                }`}
            >
                <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
                    <Link href="/" className="group relative z-[110] flex items-center gap-4">
                        <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-glass transition-colors group-hover:border-accent/40">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-t border-accent/40 rounded-full"
                            />
                            <Coffee size={20} className="text-accent group-hover:scale-110 transition-transform md:size-[22px]" />
                        </div>
                        <div className="flex flex-col text-white uppercase tracking-[0.3em] md:tracking-[0.4em] font-light text-lg md:text-xl">
                            <span>Coffee<span className="font-black text-accent">Soul</span></span>
                        </div>
                    </Link>

                    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
                        <AnimatePresence mode="wait">
                            {!state.isSearchOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-12"
                                >
                                    {navItems.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative group"
                                            onMouseEnter={() => actions.setActiveDropdown(item.name)}
                                            onMouseLeave={() => actions.setActiveDropdown(null)}
                                        >
                                            <Link
                                                href={item.href}
                                                className="group relative flex items-center gap-1 py-2"
                                            >
                                                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-400 group-hover:text-white transition-all">
                                                    {item.name}
                                                </span>
                                                {item.subItems && <ChevronDown size={10} className="text-accent/50 group-hover:rotate-180 transition-transform" />}
                                                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                                            </Link>

                                            {item.subItems && (
                                                <AnimatePresence>
                                                    {state.activeDropdown === item.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            className="absolute left-0 top-full w-48 pt-4"
                                                        >
                                                            <div className="overflow-hidden rounded-sm border border-white/5 bg-zinc-950/95 p-2 backdrop-blur-3xl shadow-2xl shadow-black/50">
                                                                {item.subItems.map((sub) => (
                                                                    <Link
                                                                        key={sub}
                                                                        href={`${item.href}?filter=${sub.toLowerCase()}`}
                                                                        className="block px-4 py-3 text-[10px] uppercase tracking-widest text-zinc-500 hover:bg-accent/10 hover:text-accent transition-colors"
                                                                    >
                                                                        {sub}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>

                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="relative hidden lg:flex items-center justify-end">
                            <AnimatePresence>
                                {state.isSearchOpen && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "clamp(250px, 35vw, 450px)", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        className="absolute right-0 flex items-center pr-14"
                                    >
                                        <input
                                            autoFocus
                                            placeholder="ПОИСК..."
                                            className="w-full border-b border-accent/40 bg-transparent py-2 text-[12px] tracking-[0.3em] text-white focus:outline-none placeholder:text-zinc-700"
                                        />
                                        <button onClick={() => actions.setIsSearchOpen(false)} className="absolute right-16 text-zinc-500 hover:text-white transition-colors"><X size={16} /></button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <motion.button
                                layout
                                onClick={() => actions.setIsSearchOpen(!state.isSearchOpen)}
                                className={`relative z-20 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border transition-all ${
                                    state.isSearchOpen ? "border-accent bg-accent text-black" : "border-white/10 bg-glass text-zinc-400 hover:border-accent/40"
                                }`}
                            >
                                <Search size={18} />
                            </motion.button>
                        </div>

                        <motion.button
                            onClick={() => actions.setIsCartOpen(true)}
                            className="group relative z-[110]"
                        >
                            <div className="relative flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-white/10 bg-glass group-hover:border-accent/50 transition-all">
                                <ShoppingBag size={18} className="text-zinc-400 group-hover:text-white" />
                            </div>
                            <AnimatePresence>
                                {count > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-black text-black ring-4 ring-background"
                                    >
                                        {count}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <button
                            onClick={() => actions.setIsMobileMenuOpen(!state.isMobileMenuOpen)}
                            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-glass text-white lg:hidden active:scale-95 transition-transform"
                        >
                            <AnimatePresence mode="wait">
                                {state.isMobileMenuOpen ? (
                                    <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {state.isMobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[-1] bg-black/60 backdrop-blur-md lg:hidden"
                                onClick={() => actions.setIsMobileMenuOpen(false)}
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 h-screen w-[85%] max-w-sm bg-zinc-950 border-l border-white/5 pt-32 pb-12 px-8 flex flex-col lg:hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                                    <div className="absolute top-[20%] left-[-10%] w-[120%] h-[1px] bg-accent rotate-12" />
                                    <div className="absolute top-[40%] left-[-10%] w-[120%] h-[1px] bg-accent -rotate-12" />
                                </div>

                                <div className="flex flex-col gap-10 relative z-10">
                                    {navItems.map((item, idx) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + idx * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => actions.setIsMobileMenuOpen(false)}
                                                className="group flex items-baseline gap-4"
                                            >
                                                <span className="text-zinc-800 font-black text-2xl italic group-hover:text-accent/20 transition-colors">0{idx + 1}</span>
                                                <h3 className="text-4xl font-light uppercase tracking-tighter text-white group-hover:text-accent transition-colors">
                                                    {item.name}
                                                </h3>
                                            </Link>

                                            {item.subItems && (
                                                <div className="mt-6 ml-12 flex flex-col gap-4 border-l border-accent/20 pl-6">
                                                    {item.subItems.map(sub => (
                                                        <Link
                                                            key={sub}
                                                            href={item.href}
                                                            onClick={() => actions.setIsMobileMenuOpen(false)}
                                                            className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
                                                        >
                                                            {sub}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-auto space-y-8 relative z-10"
                                >
                                    <div className="space-y-4">
                                        <p className="text-[10px] uppercase tracking-widest text-zinc-600">Найти в каталоге</p>
                                        <div className="relative">
                                            <input
                                                className="w-full bg-transparent border-b border-white/10 pb-4 text-sm text-white outline-none focus:border-accent transition-colors placeholder:text-zinc-800"
                                                placeholder="ЧТО ИЩЕМ?"
                                            />
                                            <Search className="absolute right-0 top-0 text-accent/50" size={18} />
                                        </div>
                                    </div>

                                    <div className="flex gap-6 pt-4">
                                        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/30 transition-all cursor-pointer">
                                            <span className="text-[10px] font-bold">IG</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/30 transition-all cursor-pointer">
                                            <span className="text-[10px] font-bold">TG</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.header>

            <CartDrawer isOpen={state.isCartOpen} onClose={() => actions.setIsCartOpen(false)} />
        </>
    );
}