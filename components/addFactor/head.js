import { DatePicker } from "jalali-react-datepicker";
import { useState } from "react";

export default function Home() {
  const [dataSearchPerson, setDataSearchPerson] = useState(null);
  const [newPerson, setNewPerson] = useState(null);
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
          }}
        />
        <div className="bg-red-200 flex flex-col h-10 justify-center">
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
                    // setNew(document.getElementById("text").value);
                  } else {
                    setDataSearchPerson(data);
                    setNewPerson(null);
                  }
                });
            }}
          ></input>
          {dataSearchPerson && (
            <div className="bg-gray-300 w-2/3 p-1 mx-auto">
              {dataSearchPerson &&
                dataSearchPerson.data.map((e) => {
                  return (
                    <a href={`/person/${e._id}`} key={e._id}>
                      {" "}
                      <div className="bg-gray-600 my-2 p-2 rounded-md">
                        {e.name}
                      </div>
                    </a>
                  );
                })}
            </div>
          )}
          {newPerson && (
            <div className="bg-gray-300 w-2/3 p-1 mx-auto">
              <div className="bg-gray-600 my-2 p-2 rounded-md" key={1}>
                {newPerson} ++++
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
