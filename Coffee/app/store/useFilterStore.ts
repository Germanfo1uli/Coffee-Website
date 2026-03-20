import { create } from 'zustand';

type Flavor = 'ягоды' | 'шоколад' | 'орехи' | 'цветы' | 'цитрус' | 'карамель' | 'фрукты' | 'пряности';

interface FilterState {
    activeFlavor: Flavor;
    setActiveFlavor: (flavor: Flavor) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    activeFlavor: 'ягоды',
    setActiveFlavor: (flavor) => set({ activeFlavor: flavor }),
}));