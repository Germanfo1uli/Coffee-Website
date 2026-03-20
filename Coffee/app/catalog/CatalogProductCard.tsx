"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Plus, Check } from "lucide-react";
import { useCart } from "../hooks/useCart";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    rating: number;
    notes: string[];
    image: string;
    secondImage: string;
}

export function CatalogProductCard({ product }: { product: ProductProps }) {
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const [weight, setWeight] = useState(250);

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        addItem({ ...product, quantity: 1 });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="group relative flex flex-col bg-zinc-900/20 border border-white/5 p-4 transition-all duration-700 hover:border-accent/30">
            <div className="relative aspect-[4/5] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-0"
                />
                <img
                    src={product.secondImage}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
                    <Star size={10} className="fill-accent text-accent" />
                    <span className="text-[10px] font-bold text-white">{product.rating}</span>
                </div>
            </div>

            <div className="mt-6 flex flex-1 flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                    {product.notes.map(note => (
                        <span key={note} className="text-[8px] font-black uppercase tracking-widest text-accent/60">#{note}</span>
                    ))}
                </div>

                <h3 className="text-lg font-light uppercase tracking-widest text-white">{product.name}</h3>

                <div className="mt-4 flex items-center gap-4">
                    {[250, 500].map(w => (
                        <button
                            key={w}
                            onClick={() => setWeight(w)}
                            className={`text-[9px] font-bold uppercase tracking-tighter transition-colors ${weight === w ? 'text-white border-b border-accent' : 'text-zinc-600 hover:text-zinc-400'}`}
                        >
                            {w}г
                        </button>
                    ))}
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-zinc-600">Цена</span>
                        <span className="text-xl font-light text-white italic">{product.price} ₽</span>
                    </div>

                    <button
                        onClick={handleAdd}
                        className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 ${isAdded ? 'bg-green-500 border-green-500 text-black' : 'border-accent/30 bg-accent/5 text-accent hover:bg-accent hover:text-black'}`}
                    >
                        {isAdded ? <Check size={18} /> : <Plus size={18} />}
                    </button>
                </div>
            </div>
        </div>
    );
}