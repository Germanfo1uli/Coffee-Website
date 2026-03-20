"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "../hooks/useCart";

interface PromoProps {
    id: number;
    name: string;
    price: string;
    notes: string;
    image: string;
}

export default function ArticleProductPromo({ id, name, price, notes, image }: PromoProps) {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({
            id,
            name,
            price: parseInt(price.replace(/\s/g, "")),
            image,
        });
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden border border-accent/20 bg-accent/5 p-8 my-16 group"
        >
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/3 aspect-square overflow-hidden border border-white/5">
                    <img
                        src={image}
                        className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        alt={name}
                    />
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-accent text-accent" />)}
                        </div>
                        <span className="text-[9px] text-accent font-black uppercase tracking-widest">Выбор бариста</span>
                    </div>

                    <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Попробуйте в этой статье:</span>
                        <h4 className="text-2xl font-light text-white uppercase tracking-tighter mt-1">{name}</h4>
                        <p className="text-[10px] text-accent uppercase tracking-widest font-bold mt-2">{notes}</p>
                    </div>

                    <div className="flex items-center gap-8 pt-4">
                        <span className="text-2xl font-light text-white italic">
                            {price} <span className="text-[10px] not-italic text-zinc-500">₽</span>
                        </span>

                        <button
                            onClick={handleAddToCart}
                            className="flex items-center gap-3 bg-accent px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-white active:scale-95"
                        >
                            <ShoppingBag size={14} /> В корзину
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
        </motion.div>
    );
}