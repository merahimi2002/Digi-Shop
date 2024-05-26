import { create } from "zustand";

interface LoveStore {
  LoveID: number;
  QuantityLove: number;
  increaseLoveQuantity: (id: number) => void;
  decreaseLoveQuantity: (id: number) => void;
}

const AddLoveQuantity = create<LoveStore>((set) => ({
  LoveID: 0,
  QuantityLove: 0,
  increaseLoveQuantity: (id) =>
    set(() => ({
      LoveID: id,
      QuantityLove: 1,
    })),
  decreaseLoveQuantity: (id) =>
    set(() => ({
      LoveID: id,
      QuantityLove: 0,
    })),
}));

export default AddLoveQuantity;
