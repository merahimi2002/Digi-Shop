import { create } from "zustand";

interface LoveStore {
  LoveID: number;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

const useLoveProduct = create<LoveStore>((set) => ({
  LoveID: 0,
  increase: (id) =>
    set(() => ({
      LoveID: id,
    })),

  decrease: (id) =>
    set(() => ({
      LoveID: id,
    })),
}));

export default useLoveProduct;
