"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type TeamMember = {
    name: string;
    role: string;
    bio: string;
    image: string;
};

interface Props {
    member: TeamMember | null;
    onClose: () => void;
}

export default function MemberModal({ member, onClose }: Props) {
    if (!member) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="bg-zinc-900 w-full max-w-4xl grid md:grid-cols-2 overflow-hidden border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="aspect-square md:aspect-auto">
                        <img src={member.image} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="p-12 flex flex-col justify-center relative">
                        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white">
                            <X size={24} />
                        </button>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">{member.role}</span>
                        <h3 className="text-4xl font-light text-white uppercase mb-8">{member.name}</h3>
                        <p className="text-zinc-400 font-light leading-loose text-lg mb-10">{member.bio}</p>
                        <div className="flex gap-4">
                            <div className="w-10 h-[1px] bg-accent self-center" />
                            <span className="text-[10px] text-white uppercase tracking-widest font-black">CoffeeSoul Roasters</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}