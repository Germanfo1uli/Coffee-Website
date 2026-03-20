"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../hooks/useCart";

interface ProductProps {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
    const { addItem } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {

        e.preventDefault();
        e.stopPropagation();

        addItem({
            id: product.id,
            name: product.name,
            price: parseInt(product.price.replace(/\s/g, "")),
            image: product.image,
        });
    };

    return (
        <Link href={`/product/${product.id}`} className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-glass p-4 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(196,140,90,0.07)]">

                <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[9px] font-black uppercase tracking-widest text-black">
                        Best Seller
                    </div>
                </div>

                <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={12}
                                className={`${i < product.rating ? "fill-accent text-accent" : "text-zinc-700"}`}
                            />
                        ))}
                    </div>

                    <h3 className="text-sm font-medium tracking-wider text-white uppercase group-hover:text-accent transition-colors">
                        {product.name}
                    </h3>

                    <div className="flex items-center justify-between pt-4">
                        <span className="text-lg font-light text-white italic">
                            {product.price} <span className="text-[10px] not-italic text-zinc-500">₽</span>
                        </span>

                        <button
                            onClick={handleAddToCart}
                            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-accent transition-all hover:bg-accent hover:text-black active:scale-90"
                        >
                            <ShoppingCart size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}