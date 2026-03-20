"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const TEAM = [
    { name: "Алексей Гордый", role: "Главный обжарщик", bio: "12 лет в индустрии. Знает, как раскрыть потенциал любого зерна.", image: "https://i.pinimg.com/originals/65/49/29/6549290368fae3a412bd977970a09730.jpg" },
    { name: "Мария Ветрова", role: "Трейдер", bio: "Лично посещает плантации и отбирает микролоты.", image: "https://img.freepik.com/free-photo/office-worker-standing-with-laptop_23-2147650994.jpg?semt=ais_hybrid" },
    { name: "Иван Кофеинов", role: "Шеф-бариста", bio: "Чемпион по латте-арту, ставит вкус во всех наших точках.", image: "https://avatars.mds.yandex.net/i?id=b59d751d8d5f1cb8e03092623c47a402_l-4782879-images-thumbs&n=13" },
];

type TeamMember = typeof TEAM[0];

interface Props {
    onSelectMember: (member: TeamMember) => void;
}

export default function TeamSection({ onSelectMember }: Props) {
    return (
        <section className="py-32 bg-background overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                <header className="flex justify-between items-end mb-16">
                    <h2 className="text-3xl font-light text-white uppercase tracking-widest">Команда</h2>
                    <div className="flex gap-4">
                        <button className="team-prev w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="team-next w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </header>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{ prevEl: '.team-prev', nextEl: '.team-next' }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    className="!overflow-visible"
                >
                    {TEAM.map((member) => (
                        <SwiperSlide key={member.name}>
                            <div
                                onClick={() => onSelectMember(member)}
                                className="group cursor-pointer relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                            >
                                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{member.role}</p>
                                    <h3 className="text-2xl font-light text-white uppercase">{member.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}