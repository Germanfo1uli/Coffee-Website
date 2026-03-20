"use client";

import { Product } from "./types";

const PRODUCTS: Product[] = [
    { id: 1, name: "Ethiopia Yirgacheffe", price: "1 450", rating: 5, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Brazil Cerrado", price: "1 200", rating: 4, image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Colombia Supremo", price: "1350", rating: 5, image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "Kenya AA Single Origin", price: "1 800", rating: 5, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, name: "Costa Rica Tarrazu", price: "1 550", rating: 4, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, name: "Panama Geisha", price: "5 900", rating: 5, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop" },
    { id: 7, name: "Jamaica Blue Mountain", price: "7 500", rating: 5, image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, name: "Hawaii Kona", price: "4 800", rating: 5, image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1000&auto=format&fit=crop" },
    { id: 9, name: "Tanzania Peaberry", price: "2 100", rating: 4, image: "https://i.pinimg.com/originals/42/cd/3b/42cd3b6d79b72b1d9352c034829ec572.jpg" },
    { id: 10, name: "Guatemala Antigua", price: "1 650", rating: 4, image: "https://static.ticimax.cloud/7620/Uploads/UrunResimleri/buyuk/guatemala-antigua-200-gr-ec1-9d.jpg" },
];

export function useBestSellers() {
    return {
        products: PRODUCTS
    };
}