"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        await new Promise(r => setTimeout(r, 1500));
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <section className="py-32 bg-zinc-950 border-t border-white/5 relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-light text-white uppercase tracking-tighter mb-4">Напишите нам</h2>
                            <p className="text-zinc-500 uppercase text-[11px] tracking-widest font-medium">Есть вопросы по опту или сотрудничеству?</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <input required type="text" placeholder="ВАШЕ ИМЯ" className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest text-white outline-none focus:border-accent transition-colors" />
                                <input required type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest text-white outline-none focus:border-accent transition-colors" />
                            </div>
                            <textarea required placeholder="СООБЩЕНИЕ" rows={4} className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest text-white outline-none focus:border-accent transition-colors resize-none" />
                            <button
                                disabled={status !== "idle"}
                                className="group flex items-center gap-4 bg-accent px-10 py-5 text-[11px] font-black uppercase tracking-[0.4em] text-black hover:bg-white transition-all disabled:opacity-50"
                            >
                                {status === "loading" ? "ОТПРАВКА..." : status === "success" ? "ОТПРАВЛЕНО" : "ОТПРАВИТЬ"}
                                <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-accent shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Локация</p>
                                    <p className="text-sm text-white font-light leading-relaxed">Москва, ул. Примерная, д. Кофейный, стр. 1</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-accent shrink-0">
                                    <Phone size={20} />
                                </div>
                                <a href="tel:+79991234567" className="block hover:text-accent transition-colors">
                                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Телефон</p>
                                    <p className="text-sm text-white font-light">+7 (999) 123-45-67</p>
                                </a>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-accent shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Режим работы</p>
                                    <p className="text-sm text-white font-light italic">Пн-Пт: 09:00 — 21:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-full min-h-[300px] bg-zinc-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-white/5">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A...&amp;source=constructor"
                                width="100%"
                                height="100%"
                                className="absolute inset-0"
                                title="map"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}