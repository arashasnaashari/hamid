import { useState } from "react";

export default function Home({ isConnected }) {
  const [chekPrice, SetChekPrise] = useState(null);
  const [chekNote, SetChekNote] = useState(null);

  const demo = [
    {
      name: "sensor",
      n: "3",
      priceOne: "120000",
      _id: "113232",
      percent: "5",
    },
    {
      name: "thermo",
      n: "10",
      priceOne: "50000",
      _id: "223445",
      percent: "10",
    },
  ];

  const [products, SetProducts] = useState(demo);
  const handleNewRow = () => {
    const newProductRow = {
      name: "sensor",
      n: "3",
      priceOne: "120000",
      _id: "1123",
      percent: "5",
    };
    SetProducts([...products, newProductRow]);
  };
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
            {products.map((p) => {
              return (
                <tr key={p._id}>
                  <td className="p-4 w-1/6 border border-green-600">
                    {p.name}
                  </td>
                  <td className="p-4 w-1/6 border border-green-600">{p.n}</td>
                  <td className="p-4 w-1/6 border border-green-600">
                    {p.priceOne}
                  </td>
                  <td className="p-4 w-1/6 border border-green-600">
                    {p.percent}%
                  </td>
                  <td className="p-4 w-1/6 border border-green-600">
                    {p.n * p.priceOne}
                  </td>
                  <td className="p-4 w-1/6 border border-green-600">
                    <button
                      onClick={() => {
                        console.log(p.priceOne);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="bg-indigo-700 p-3" onClick={() => handleNewRow()}>
          new row +
        </button>
      </div>

      {/* <div className="mt-66">
        <h1>chek or hesab</h1>
        <input
          id="inputPrise"
          type="number"
          placeholder="arzesh ..."
          onInput={(e) =>
            SetChekPrise(document.getElementById("inputPrise").value)
          }
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
            SetChekNote(document.getElementById("w3review").value)
          }
        ></textarea>
        <span>{chekNote}</span>
      </div>
    */}
    </>
  );
}
