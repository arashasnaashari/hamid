import Popup from "reactjs-popup";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Contxt from "../../contxt/contxt";

const Com = () => {
  const cntx = useContext(Contxt);

  const router = useRouter();
  const [click1, setC1] = useState(false);
  const [click2, setC2] = useState(false);
  const [click3, setC3] = useState(false);
  const [click4, setC4] = useState(false);

  const [name1, setName1] = useState(null);
  const [n1, setN1] = useState(null);
  const [_id1, set_Id1] = useState(null);
  const [price1, setPrice1] = useState(null);
  const [percent1, setPercent1] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [dataSearchPerson, setDataSearchPerson] = useState(null);
  const [newPerson, setNewPerson] = useState(null);

  const handleNewPerson = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/addnewproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("textProduct").value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == "error") {
          alert("ERROR!!!");
        } else {
          set_Id1(data.data);
          setName1(document.getElementById("textProduct").value);

          setDataSearchPerson(null);
          setNewPerson(null);
          alert("OKKK");
        }
      });
  };

  const handleEditRow = () => {
    const edited = {
      name: name1,
      n: n1,
      price: price1,
      _id: _id1,
      percent: percent1,
    };
    let producttt = cntx.products.map((p) =>
      p._id === cntx.prePareProductForUpdate[0]._id ? (p = edited) : p
    );
    console.log(producttt);

    cntx.setProduct(producttt);

    setOpen1(false);
  };

  return (
    <>
      <span
        onClick={() => {
          setOpen1(true);
        }}
      >
        <div>
          <div>
            {" "}
            <h1>Edit</h1>
          </div>
        </div>

        <Popup
          open={open1}
          onClose={() => {
            setOpen1(false);
          }}
        >
          <div
            className="rounded-2xl"
            style={{
              margin: "0 auto",
              direction: "rtl",
              width: "80vw",
              height: "90vh",
              backgroundColor: "#eb9860",
              display: "flex",
              flexFlow: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="bg-white rounded-2xl h-4/5 w-4/5">
              <div className="p-2 w-2/5 mx-auto mt-20">
                <form
                  className="flex flex-col p-2 content-center tems-center bg-white"
                  autoComplete="off"
                >
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-row mb-5">
                      <button
                        className={
                          "bg-blue-700 p-2 w-1/4 ml-4 " +
                          (click1 == true ? `border-4 border-gray-900` : ``)
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setC1((click1) => !click1);
                          setName1(cntx.prePareProductForUpdate[0].name);
                          set_Id1(cntx.prePareProductForUpdate[0]._id);
                        }}
                      >
                        prev
                      </button>
                      <input
                        onChange={(e) => setName1(e.target.value)}
                        placeholder="name"
                        className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                        type="textProduct"
                        id="textProduct"
                        onInput={() => {
                          fetch("http://localhost:3000/api/searchproduct", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              name: document.getElementById("textProduct")
                                .value,
                            }),
                          })
                            .then((data) => data.json())
                            .then((data) => {
                              if (
                                document.getElementById("textProduct").value
                                  .length === 0
                              ) {
                                setDataSearchPerson(null);
                              } else if (data.data.length === 0) {
                                setDataSearchPerson(null);
                                setNewPerson(
                                  document.getElementById("textProduct").value
                                );
                              } else {
                                setDataSearchPerson(data);
                                setNewPerson(null);
                              }
                            });
                        }}
                      ></input>
                    </div>
                    {dataSearchPerson && (
                      <div className="bg-gray-300 w-2/3 p-1 mx-auto flex flex-col">
                        {dataSearchPerson &&
                          dataSearchPerson.data.map((e) => {
                            return (
                              <button
                                onClick={() => {
                                  set_Id1(e._id);
                                  setName1(e.name);
                                  document.getElementById("textProduct").value =
                                    e.name;
                                  setDataSearchPerson(null);
                                  setNewPerson(null);
                                }}
                                key={e._id}
                              >
                                <div className="bg-gray-600 my-2 p-2 rounded-md">
                                  {e.name}
                                </div>
                              </button>
                            );
                          })}
                      </div>
                    )}
                    {newPerson && (
                      <div className="bg-gray-300 w-2/3 p-1 mx-auto">
                        <button
                          className="w-full"
                          onClick={(e) => handleNewPerson(e)}
                        >
                          <div
                            className="bg-gray-600 my-2 p-2 rounded-md"
                            key={1}
                          >
                            {newPerson}{" "}
                            <span className="bg-white p-1 ml-4">Add+</span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row mb-5">
                    {" "}
                    <button
                      className={
                        "bg-blue-700 p-2 w-1/4 ml-4 " +
                        (click2 == true ? `border-4 border-gray-900` : ``)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setC2((click2) => !click2);
                        setN1(cntx.prePareProductForUpdate[0].n);
                      }}
                    >
                      prev
                    </button>
                    <input
                      id="n_input"
                      placeholder="n"
                      onChange={(event) => setN1(event.target.value)}
                      type="number"
                      className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-row mb-5">
                    <button
                      className={
                        "bg-blue-700 p-2 w-1/4 ml-4 " +
                        (click3 == true ? `border-4 border-gray-900` : ``)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setC3((click3) => !click3);
                        setPrice1(cntx.prePareProductForUpdate[0].price);
                      }}
                    >
                      prev
                    </button>
                    <input
                      id="price_input"
                      placeholder="price"
                      onChange={(event) => setPrice1(event.target.value)}
                      type="number"
                      className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                    />
                  </div>
                  <span className="text-xs">
                    {" "}
                    {new Intl.NumberFormat("fa", {
                      style: "currency",
                      currency: "IRR",
                    }).format(price1)}
                  </span>
                  <div className="flex flex-row mb-5">
                    <button
                      className={
                        "bg-blue-700 p-2 w-1/4 ml-4 " +
                        (click4 == true ? `border-4 border-gray-900` : ``)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setC4((click4) => !click4);
                        setPercent1(cntx.prePareProductForUpdate[0].percent);
                      }}
                    >
                      prev
                    </button>
                    <input
                      id="percent_input"
                      placeholder="percent"
                      onChange={(event) => setPercent1(event.target.value)}
                      type="number"
                      className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                    />
                  </div>
                </form>

                <div>
                  <button
                    className="p-4 bg-blue-600"
                    onClick={() => handleEditRow()}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Popup>
      </span>
    </>
  );
};

export default Com;
