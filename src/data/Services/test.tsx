import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  LoveQuantity: number;
  ProductQuantity: number;
}

type State = {
  ProductState: Record<number, ProductProps>;
};

type Actions = {
  setProduct: (Pro: ProductProps[]) => void;
  Increase: (ProductId: number) => void;
};

export const ProductStore = create<State & Actions>()(
  immer((set) => ({
    ProductState: {},
    setProduct: (Pro: ProductProps[]) =>
      set((state) => {
        state.ProductState = Pro;
      }),
    Increase: (ProductId: number) =>
      set((state) => {
        state.ProductState[ProductId].LoveQuantity = 5;
      }),
  }))
);
