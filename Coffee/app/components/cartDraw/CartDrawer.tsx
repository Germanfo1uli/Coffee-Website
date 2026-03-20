"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../../hooks/useCart";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { items, updateQuantity, removeItem, totalPrice, count } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-[160] h-full w-full max-w-md border-l border-white/10 bg-background p-8 shadow-2xl"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="text-accent" size={20} />
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-white">Корзина ({count})</h2>
                                </div>
                                <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-8">
                                {items.length === 0 ? (
                                    <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Ваша корзина пуста</p>
                                        <button onClick={onClose} className="text-[10px] font-bold uppercase tracking-widest text-accent underline underline-offset-4">Начать покупки</button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex gap-4 border-b border-white/5 pb-6">
                                                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-900">
                                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                                </div>
                                                <div className="flex flex-1 flex-col justify-between py-1">
                                                    <div className="flex justify-between">
                                                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-white">{item.name}</h3>
                                                        <button onClick={() => removeItem(item.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                                            <button onClick={() => updateQuantity(item.id, -1)} className="text-zinc-400 hover:text-white"><Minus size={12} /></button>
                                                            <span className="text-[10px] font-bold text-white">{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.id, 1)} className="text-zinc-400 hover:text-white"><Plus size={12} /></button>
                                                        </div>
                                                        <span className="text-xs font-light text-white italic">{item.price * item.quantity} ₽</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {items.length > 0 && (
                                <div className="border-t border-white/5 pt-8 space-y-6">
                                    <div className="flex items-end justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Итого</span>
                                        <span className="text-2xl font-light text-white italic">{totalPrice} ₽</span>
                                    </div>
                                    <button className="w-full bg-accent py-5 text-[10px] font-black uppercase tracking-[0.4em] text-black transition-transform active:scale-[0.98]">
                                        Оформить заказ
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}