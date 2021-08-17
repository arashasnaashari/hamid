import { useState, useContext } from "react";
import Contxt from "../../contxt/contxt";

export default function Home({ isConnected }) {
  const cntx = useContext(Contxt);
  return (
    <>
      <div className="flex flex-row-reverse justify-around">
        <div className=" h-40 w-1/3 flex flex-col justify-center">
          <div className="flex flex-row mx-auto justify-around w-full">
            <button
              className={
                "bg-green-600 p-2 h-10 " +
                (cntx.state1 == "foroosh" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => cntx.setState1("foroosh")}
            >
              foroosh
            </button>
            <button
              className={
                "bg-red-600 p-2 h-10 " +
                (cntx.state1 == "kharid" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => cntx.setState1("kharid")}
            >
              kharid
            </button>
          </div>
        </div>

        <div className=" h-40 w-1/3 border-l-2 border-r-2 border-gray-500">
          <div className="flex flex-col mx-auto w-2/3 h-full justify-around">
            <button
              className={
                "bg-blue-600 p-2 h-10 " +
                (cntx.state2 == "product" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => cntx.setState2("product")}
            >
              product
            </button>
            <button
              className={
                "bg-yellow-600 p-2 h-10 " +
                (cntx.state2 == "chek" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => cntx.setState2("chek")}
            >
              chek
            </button>
            <button
              className={
                "bg-gray-600 p-2 h-10 " +
                (cntx.state2 == "hesab" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => cntx.setState2("hesab")}
            >
              hesab
            </button>
          </div>
        </div>

        <div className=" h-40 w-1/3 flex flex-col justify-center">
          <div className="flex flex-row mx-auto justify-around w-full">
            <button
              className={
                "bg-green-300 p-2 h-10 " +
                (cntx.state3 == "factor" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => cntx.setState3("factor")}
            >
              factor
            </button>
            <button
              className={
                "bg-red-300 p-2 h-10 " +
                (cntx.state3 == "pish" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => cntx.setState3("pish")}
            >
              pish factor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
