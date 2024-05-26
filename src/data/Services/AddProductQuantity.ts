import { create } from "zustand";

interface ProductStore {
  ProductName: string;
  ProductQuantity: number;
  increaseProductQuantity: (Name: string) => void;
  decreaseProductQuantity: (Name: string) => void;
  deleteProductQuantity: (Name: string) => void;
}

const AddProductQuantity = create<ProductStore>((set) => ({
  ProductName: "",
  ProductQuantity: 0,
  increaseProductQuantity: (Name) =>
    set((store) => ({
      ProductName: Name,
      ProductQuantity: store.ProductQuantity + 1,
    })),
  decreaseProductQuantity: (Name) =>
    set((store) => ({
      ProductName: Name,
      ProductQuantity: store.ProductQuantity - 1,
    })),
  deleteProductQuantity: (Name) =>
    set(() => ({
      ProductName: Name,
      ProductQuantity: 0,
    })),
}));



export default AddProductQuantity;
