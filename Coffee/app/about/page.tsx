"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import MemberModal from "./components/MemberModal";
import Footer from "@/app/components/footer/Footer";

export default function AboutPage() {
    const [selectedMember, setSelectedMember] = useState<typeof TEAM[0] | null>(null);

    return (
        <main className="min-h-screen bg-background">
            <HeroSection />
            <JourneySection />
            <TeamSection onSelectMember={setSelectedMember} />
            <ContactSection />
            <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
            <Footer />
        </main>
    );
}