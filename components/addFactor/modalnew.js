import Popup from "reactjs-popup";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Contxt from "../../contxt/contxt";

const Com = ({ shouldshow, data, id }) => {
  const cntx = useContext(Contxt);

  const router = useRouter();
  const [name, setName] = useState("");
  const [n, setN] = useState("");
  const [_id, set_Id] = useState("");
  const [price, setPrice] = useState("");
  const [percent, setPercent] = useState("");
  const [open, setOpen] = useState(false);
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
          set_Id(data.data);
          setName(document.getElementById("textProduct").value);

          setDataSearchPerson(null);
          setNewPerson(null);
          alert("OKKK");
        }
      });
  };
  const handleNewRow = () => {
    const newProductRow = {
      name: name,
      n: n,
      price: price,
      _id: _id,
      percent: percent,
    };
    if ((name, n, price, percent)) {
      if (cntx.products == undefined) {
        cntx.setProduct([newProductRow]);
        setOpen(false);
      } else {
        cntx.setProduct([...cntx.products, newProductRow]);
        setOpen(false);
      }
    }
  };
  return (
    <>
      <span
        onClick={() => {
          setOpen(true);
        }}
      >
        <div>
          <div>
            {" "}
            <h1>New</h1>
          </div>
        </div>
        <Popup
          open={open}
          onClose={() => {
            setOpen(false);
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
                    <input
                      placeholder="name"
                      className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                      type="textProduct"
                      id="textProduct"
                      onInput={() => {
                        fetch("http://localhost:3000/api/searchproduct", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            name: document.getElementById("textProduct").value,
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

                    {dataSearchPerson && (
                      <div className="bg-gray-300 w-2/3 p-1 mx-auto flex flex-col">
                        {dataSearchPerson &&
                          dataSearchPerson.data.map((e) => {
                            return (
                              <button
                                onClick={() => {
                                  set_Id(e._id);
                                  setName(e.name);
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

                  <input
                    placeholder="n"
                    onChange={(event) => setN(event.target.value)}
                    type="number"
                    className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                  />

                  <input
                    placeholder="price"
                    onChange={(event) => setPrice(event.target.value)}
                    type="number"
                    className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                  />
                  <span className="text-xs">
                    {" "}
                    {new Intl.NumberFormat("fa", {
                      style: "currency",
                      currency: "IRR",
                    }).format(price)}
                  </span>
                  <input
                    placeholder="percent"
                    onChange={(event) => setPercent(event.target.value)}
                    type="number"
                    className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                  />
                </form>

                <div>
                  <button
                    className="p-4 bg-green-600"
                    onClick={() => handleNewRow()}
                  >
                    Add
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
