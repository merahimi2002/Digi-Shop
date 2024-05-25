import { create } from "zustand";

interface LoveStore {
  LoveID: number;
  QuantityLove: number;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

const AddLoveQuantity = create<LoveStore>((set) => ({
  LoveID: 0,
  QuantityLove: 0,
  increase: (id) =>
    set(() => ({
      LoveID: id,
      QuantityLove: 1,
    })),
  decrease: (id) =>
    set(() => ({
      LoveID: id,
      QuantityLove: 0,
    })),
}));

export default AddLoveQuantity;
