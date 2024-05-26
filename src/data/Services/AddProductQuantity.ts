import { create } from "zustand";

interface ProductStore {
  ProductName: string;
  ProductQuantity: number;
  increase: (Name: string) => void;
  decrease: (Name: string) => void;
  delete: (Name: string) => void;
}

const AddProductQuantity = create<ProductStore>((set) => ({
  ProductName: "",
  ProductQuantity: 0,
  increase: (Name) =>
    set((store) => ({
      ProductName: Name,
      ProductQuantity: store.ProductQuantity + 1,
    })),
  decrease: (Name) =>
    set((store) => ({
      ProductName: Name,
      ProductQuantity: store.ProductQuantity - 1,
    })),
  delete: (Name) =>
    set(() => ({
      ProductName: Name,
      ProductQuantity: 0,
    })),
}));

export default AddProductQuantity;
