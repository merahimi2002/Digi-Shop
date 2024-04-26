import { create } from "zustand";

interface LoveStore {
    LoveQuantity: number,
    increase: () => void,
    decrease: () => void,
}

const useLoveProduct = create<LoveStore>(set => ({
    LoveQuantity: 0,
    increase: () => set(() => ({ LoveQuantity: 1 })),
    decrease: () => set(() => ({ LoveQuantity: 0 }))
}))

export default useLoveProduct