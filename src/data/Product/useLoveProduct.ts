import { create } from "zustand";

interface LoveStore {
    ProductID: number,
    LoveQuantity: number,
    increase: () => void,
    decrease: () => void,
}

const useLoveProduct = create<LoveStore>(set => ({
    LoveQuantity: 0,
    ProductID: 0,
    increase: () => set(() => ({ LoveQuantity: 1 })),
    decrease: () => set(() => ({ LoveQuantity: 0 }))
}))

export default useLoveProduct