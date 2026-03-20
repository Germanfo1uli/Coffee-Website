"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const { scrollY } = useScroll();

    const headerBg = useTransform(
        scrollY,
        [0, 50],
        ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.85)"]
    );
    const headerBlur = useTransform(
        scrollY,
        [0, 50],
        ["blur(0px)", "blur(20px)"]
    );
    const headerBorder = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
    );

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return {
        state: {
            isScrolled,
            isSearchOpen,
            isCartOpen,
            isMobileMenuOpen,
            activeDropdown,
        },
        actions: {
            setIsSearchOpen,
            setIsCartOpen,
            setIsMobileMenuOpen,
            setActiveDropdown,
        },
        motion: {
            headerBg,
            headerBlur,
            headerBorder,
        }
    };
}