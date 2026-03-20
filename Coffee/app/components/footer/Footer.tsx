"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Send, Coffee } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = [
    {
        title: "Магазин",
        links: [
            { name: "Каталог", href: "/catalog" },
            { name: "Хиты продаж", href: "/best-sellers" },
            { name: "Подписка на кофе", href: "/subscription" },
            { name: "Аксессуары", href: "/accessories" },
        ],
    },
    {
        title: "Компания",
        links: [
            { name: "Наша история", href: "/history" },
            { name: "Обжарка", href: "/roastery" },
            { name: "Блог", href: "/blog" },
            { name: "Контакты", href: "/contacts" },
        ],
    },
    {
        title: "Поддержка",
        links: [
            { name: "Доставка и оплата", href: "/shipping" },
            { name: "Возврат", href: "/returns" },
            { name: "FAQ", href: "/faq" },
            { name: "Политика конфиденциальности", href: "/privacy" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050505] pt-24 pb-12 px-10">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

                    {/* Лого и Соцсети */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/public" className="flex items-center gap-2 group">
                            <Coffee className="text-accent transition-transform group-hover:rotate-12" size={24} />
                            <span className="text-xl font-light tracking-[0.3em] uppercase text-white">
                                Coffee<span className="font-bold text-accent">Soul</span>
                            </span>
                        </Link>
                        <p className="max-w-xs text-[11px] leading-relaxed uppercase tracking-wider text-zinc-500">
                            Создаем культуру правильного кофе с 1992 года. Обжариваем вручную, верим в локальных фермеров и идеальный вкус.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-glass text-zinc-400 transition-all hover:border-accent hover:text-accent"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Ссылки */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
                        {FOOTER_LINKS.map((section) => (
                            <div key={section.title} className="space-y-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-[11px] uppercase tracking-widest text-zinc-500 transition-colors hover:text-accent"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Подписка */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                            Инсайды и скидки
                        </h4>
                        <p className="text-[11px] text-zinc-500 uppercase tracking-wider">
                            Подпишитесь, чтобы получать уведомления о новых лотах.
                        </p>
                        <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="ВАШ E-MAIL"
                                className="w-full border-b border-white/10 bg-transparent py-4 text-[10px] uppercase tracking-[0.2em] text-white outline-none transition-all focus:border-accent placeholder:text-zinc-700"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-accent">
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Нижняя часть */}
                <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                        © 2026 COFFEESOUL ROASTERS. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 cursor-help hover:text-zinc-400 transition-colors">
                            Made with soul
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 cursor-help hover:text-zinc-400 transition-colors">
                            Built in Next.js
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}