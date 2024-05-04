const BaseUrl = (Url: string, Var: string) => {
  const Orgin = "https://fakestoreapi.com";
  const res = Orgin + "/" + Url + Var;
  return res;
};

export default BaseUrl;
