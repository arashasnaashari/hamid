import { useState, useContext } from "react";
import Contxt from "../../contxt/contxt";
export default function Home({ isConnected }) {
  const cntx = useContext(Contxt);

  const [chekPrice, SetChekPrise] = useState(null);
  const [chekNote, SetChekNote] = useState(null);

  return (
    <>
      <div className="mt-66">
        <h1>chek or hesab</h1>
        <input
          id="inputPrise"
          type="number"
          placeholder="arzesh ..."
          onInput={(e) => {
            SetChekPrise(document.getElementById("inputPrise").value),
              (cntx.price = document.getElementById("inputPrise").value);
          }}
        ></input>
        <span>
          {new Intl.NumberFormat("fa", {
            style: "currency",
            currency: "IRR",
          }).format(chekPrice)}
        </span>
        <textarea
          id="w3review"
          rows="4"
          cols="50"
          onInput={(e) =>
            (cntx.note = document.getElementById("w3review").value)
          }
        ></textarea>
      </div>
    </>
  );
}
