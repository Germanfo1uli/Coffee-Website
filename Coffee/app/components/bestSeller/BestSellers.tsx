"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ProductCard } from "../cartDraw/ProductCard";
import { useBestSellers } from "./useBestSellers";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BestSellers() {
    const { products } = useBestSellers();

    return (
        <section className="py-32 px-10 bg-background">
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-16 flex items-end justify-between">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Выбор гурманов</span>
                        <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">
                            Хиты <span className="italic text-accent">продаж</span>
                        </h2>
                    </div>
                    <div className="hidden gap-4 lg:flex">
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="!pb-16"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #c48c5a !important;
                    opacity: 0.2;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 20px;
                    border-radius: 4px;
                    transition: all 0.3s;
                }
            `}</style>
        </section>
    );
}