"use client";

import { useCartStore } from "../store/useCartStore";
import { useState, useEffect } from "react";

export const useCart = () => {
    const cart = useCartStore();
    const [isHydrated, setIsHydrated] = useState(false);

    // Тема для Zustand пока тот подтянет данные из localStorage в браузер
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return {
        ...cart,

        items: isHydrated ? cart.items : [],
        totalPrice: isHydrated ? cart.getTotalPrice() : 0,
        count: isHydrated ? cart.getItemCount() : 0,
    };
};