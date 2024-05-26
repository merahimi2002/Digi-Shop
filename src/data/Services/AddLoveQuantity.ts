export const IncreaseLoveQuantity = (id: number) => {
  const NewlocalQuantity = 1;
  localStorage.setItem(id.toString(), NewlocalQuantity.toString());
  // for rerender when updated
  return NewlocalQuantity;
};
export const DecreaseLoveQuantity = (id: number) => {
  const NewlocalQuantity = 0;
  localStorage.setItem(id.toString(), NewlocalQuantity.toString());
  // for rerender when updated
  return NewlocalQuantity;
};
