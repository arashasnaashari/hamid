import "../styles/globals.css";
import { useState } from "react";
import Contx from "../contxt/contxt";
function MyApp({ Component, pageProps }) {
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [state3, setState3] = useState(null);
  const [product, setProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  const stating1 = (s) => {
    setState1(s);
  };
  const stating2 = (s) => {
    setState2(s);
  };
  const stating3 = (s) => {
    setState3(s);
  };
  const producting = (p) => {
    setProduct(p);
  };
  const editing = (p) => {
    setEditProduct(p);
  };
  return (
    <Contx.Provider
      value={{
        setState1: stating1,
        state1: state1,
        setState2: stating2,
        state2: state2,
        setState3: stating3,
        state3: state3,
        setProduct: producting,
        products: product,
        setEdited: editing,
        prePareProductForUpdate: editProduct,
      }}
    >
      <Component {...pageProps} />
    </Contx.Provider>
  );
}

export default MyApp;
