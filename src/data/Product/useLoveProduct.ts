import { create } from "zustand";

interface LoveStore {
    ProductID: number,
    count: number,
    increase: () => void,
    decrease: () => void,
}

const useLoveProduct = create<LoveStore>(set => ({
    count: 0,
    ProductID: 0,
    increase: () => set(() => ({ count: 1 })),
    decrease: () => set(() => ({ count: 0 }))
}))

export default useLoveProduct