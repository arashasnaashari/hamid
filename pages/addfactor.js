import { DatePicker } from "jalali-react-datepicker";
import { useState, useContext } from "react";
import Head from "../components/addFactor/head";
import States from "../components/addFactor/states";
import Products from "../components/addFactor/products";
import Checkorhesab from "../components/addFactor/checkorhesab";
import Contxt from "../contxt/contxt";
export default function Home() {
  const cntx = useContext(Contxt);
  return (
    <>
      <div className=" bg-gray-100 h-screen rounded-md">
        {/* Date & Name */}
        <Head />

        <hr></hr>
        <button
          onClick={() =>
            console.log(
              "from above:" +
                cntx.state1 +
                "/" +
                cntx.state2 +
                "/" +
                cntx.state3 +
                "/" +
                cntx.name +
                "/" +
                cntx.nameId +
                "/" +
                cntx.price +
                "/" +
                cntx.note +
                "/" +
                cntx.prePareProductForUpdate
            )
          }
        >
          c
        </button>
        {/* states */}
        <States />
        <hr></hr>
        {/* product table or chek */}
        {cntx.state2 == "product" && <Products />}
        {(cntx.state2 == "chek" || cntx.state2 == "hesab") && <Checkorhesab />}
      </div>
    </>
  );
}
