export const IncreaseProductQuantity = (Name: string) => {
  let localQuantity = localStorage.getItem(Name);
  const NewlocalQuantity = Number(localQuantity) + 1;
  localStorage.setItem(Name, NewlocalQuantity.toString());
  // for rerender when updated
  return NewlocalQuantity;
};
export const DecreaseProductQuantity = (Name: string) => {
  let localQuantity = localStorage.getItem(Name);
  const NewlocalQuantity = Number(localQuantity) - 1;
  localStorage.setItem(Name, NewlocalQuantity.toString());
  // for rerender when updated
  return NewlocalQuantity;
};
export const DeleteProductQuantity = (Name: string) => {
  const NewlocalQuantity = 0;
  localStorage.setItem(Name, NewlocalQuantity.toString());
  // for rerender when updated
  return NewlocalQuantity;
};
