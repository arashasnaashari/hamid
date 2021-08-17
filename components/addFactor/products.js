import { useState, useContext } from "react";
import Contxt from "../../contxt/contxt";
import PopNew from "./modalnew";
import PopEdit from "./modaledit";
import PopDelete from "./modaldelete";
export default function Home({ isConnected }) {
  const cntx = useContext(Contxt);

  return (
    <>
      <div>
        <table className="table-auto w-full border-collapse border border-green-800">
          <thead>
            <tr>
              <th className="p-4 w-1/6 border border-green-600">name</th>
              <th className="p-4 w-1/6 border border-green-600">n</th>
              <th className="p-4 w-1/6 border border-green-600">priceOne</th>
              <th className="p-4 w-1/6 border border-green-600">percent</th>
              <th className="p-4 w-1/6 border border-green-600">priceAll</th>
              <th className="p-4 w-1/6 border border-green-600"></th>
            </tr>
          </thead>
          <tbody>
            {cntx.products &&
              cntx.products.map((p) => {
                return (
                  <tr key={p._id}>
                    <td className="p-4 w-1/6 border border-green-600">
                      {p.name}
                    </td>
                    <td className="p-4 w-1/6 border border-green-600">{p.n}</td>
                    <td className="p-4 w-1/6 border border-green-600">
                      {new Intl.NumberFormat("fa", {
                        style: "currency",
                        currency: "IRR",
                      }).format(p.price)}
                    </td>
                    <td className="p-4 w-1/6 border border-green-600">
                      {p.percent}%
                    </td>
                    <td className="p-4 w-1/6 border border-green-600">
                      {new Intl.NumberFormat("fa", {
                        style: "currency",
                        currency: "IRR",
                      }).format(
                        p.n * p.price - (p.n * p.price * p.percent) / 100
                      )}
                    </td>
                    <td className="p-4 w-1/6 border border-green-600">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const editeds = {
                            name: p.name,
                            n: p.n,
                            price: p.price,
                            percent: p.percent,
                            _id: p._id,
                          };
                          cntx.setEdited([editeds]);
                        }}
                      >
                        <PopEdit />
                      </button>{" "}
                      |{" "}
                      <button>
                        <PopDelete id={p._id} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button className="bg-indigo-700 p-3">
          <PopNew />
        </button>
      </div>
    </>
  );
}
