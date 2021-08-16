import { useState } from "react";

export default function Home({ isConnected }) {
  const [state1, SetState1] = useState(null);
  const [state2, SetState2] = useState(null);
  const [state3, SetState3] = useState(null);
  return (
    <>
      <div className="flex flex-row-reverse justify-around">
        <div className=" h-40 w-1/3 flex flex-col justify-center">
          <div className="flex flex-row mx-auto justify-around w-full">
            <button
              className={
                "bg-green-600 p-2 h-10 " +
                (state1 == "foroosh" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => SetState1("foroosh")}
            >
              foroosh
            </button>
            <button
              className={
                "bg-red-600 p-2 h-10 " +
                (state1 == "kharid" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => SetState1("kharid")}
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
                (state2 == "product" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => SetState2("product")}
            >
              product
            </button>
            <button
              className={
                "bg-yellow-600 p-2 h-10 " +
                (state2 == "chek" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => SetState2("chek")}
            >
              chek
            </button>
            <button
              className={
                "bg-gray-600 p-2 h-10 " +
                (state2 == "hesab" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => SetState2("hesab")}
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
                (state3 == "factor" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => SetState3("factor")}
            >
              factor
            </button>
            <button
              className={
                "bg-red-300 p-2 h-10 " +
                (state3 == "pish" ? `border-4 border-gray-900` : ``)
              }
              onClick={() => SetState3("pish")}
            >
              pish factor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
