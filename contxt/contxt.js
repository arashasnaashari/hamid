import React from "react";

export default React.createContext({
  date: null,
  name: null,
  nameId: null,
  state1: null,
  setState1: (s) => {},
  state2: null,
  setState2: (s) => {},
  state3: null,
  setState3: (s) => {},
  products: null,
  setProduct: (p) => {},
  prePareProductForUpdate: null,
  setEdited: (p) => {},
  note: null,
  price: null,
});
