import { DatePicker } from "jalali-react-datepicker";
import { useState, useContext } from "react";
import Contxt from "../../contxt/contxt";

export default function Home() {
  const cntx = useContext(Contxt);

  const [dataSearchPerson, setDataSearchPerson] = useState(null);
  const [newPerson, setNewPerson] = useState(null);

  const handleNewPerson = () => {
    fetch("http://localhost:3000/api/addnewuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("text").value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == "error") {
          alert("ERROR!!!");
        } else {
          cntx.nameId = data.data;
          cntx.name = document.getElementById("text").value;

          setDataSearchPerson(null);
          setNewPerson(null);
          alert("OKKK");
        }
      });
  };

  return (
    <>
      {/* Date & Name */}
      <div className="flex flex-row justify-around">
        <DatePicker
          onClickSubmitButton={({ value }) => {
            let badTime = value._i.split("-");
            let goodTime = `${badTime[0]}/${badTime[1]}/${badTime[2]}`;
            let mongoTime = +new Date(goodTime);

            let addToPersian = new Date(mongoTime).toLocaleDateString("fa-IR");

            console.log(addToPersian);
            console.log(goodTime);
            console.log(mongoTime);
            cntx.date = mongoTime;
          }}
        />
        <div>
          <div className="bg-red-200 flex flex-col justify-center absolute">
            <input
              className="rounded-md text-white bg-gray-500 w-2/3 mx-auto focus:outline-none align-middle"
              type="text"
              id="text"
              onInput={() => {
                fetch("http://localhost:3000/api/searchperson", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: document.getElementById("text").value,
                  }),
                })
                  .then((data) => data.json())
                  .then((data) => {
                    if (document.getElementById("text").value.length === 0) {
                      setDataSearchPerson(null);
                    } else if (data.data.length === 0) {
                      setDataSearchPerson(null);
                      setNewPerson(document.getElementById("text").value);
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
                          (cntx.name = e.name),
                            (cntx.nameId = e._id),
                            (document.getElementById("text").value = e.name);
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
                <button className="w-full" onClick={() => handleNewPerson()}>
                  <div className="bg-gray-600 my-2 p-2 rounded-md" key={1}>
                    {newPerson} <span className="bg-white p-1 ml-4">Add+</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
