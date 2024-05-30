import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ProductStateProps {
  LoveQuantity: number;
  ProductQuantity: number;
}

type State = {
  ProductState: Record<number, ProductStateProps>;
};

type Actions = {
  IncreaseLoveQuantity: (ProductId: number) => void;
  DecreaseLoveQuantity: (ProductId: number) => void;
};

export const ProductQuantityStore = create<State & Actions>()(
  immer((set) => ({
    ProductState: [
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
      {
        LoveQuantity: 0,
        ProductQuantity: 0,
      },
    ],
    IncreaseLoveQuantity: (ProductId: number) =>
      set((state) => {
        state.ProductState[ProductId].LoveQuantity = 1;
      }),
    DecreaseLoveQuantity: (ProductId: number) =>
      set((state) => {
        state.ProductState[ProductId].LoveQuantity = 0;
      }),
  }))
);