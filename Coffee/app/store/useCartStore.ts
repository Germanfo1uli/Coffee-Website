import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (product: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, delta: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === product.id);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({ items: [...currentItems, { ...product, quantity: 1 }] });
                }
            },

            removeItem: (id) => {
                set({ items: get().items.filter((item) => item.id !== id) });
            },

            updateQuantity: (id, delta) => {
                const updatedItems = get().items.map((item) => {
                    if (item.id === id) {
                        const newQty = Math.max(1, item.quantity + delta);
                        return { ...item, quantity: newQty };
                    }
                    return item;
                });
                set({ items: updatedItems });
            },

            clearCart: () => set({ items: [] }),

            getTotalPrice: () => {
                return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            },

            getItemCount: () => {
                return get().items.reduce((acc, item) => acc + item.quantity, 0);
            },
        }),
        {
            name: 'coffee-soul-cart', // Ключ в localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);