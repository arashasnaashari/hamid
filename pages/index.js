import Head from "next/head";
import { useState } from "react";
// import { ObjectId } from "mongodb";
// import { connectToDatabase } from "../lib/mongodb";

export default function Home({ isConnected }) {
  const [data, setData] = useState(null);
  const [neww, setNew] = useState(null);
  return (
    <div className=" bg-gray-100 h-screen rounded-md">
      {/* NAV */}
      <dav className="flex flex-wrap justify-between p-3">
        <button>
          <a href="/addnote">Add note</a>
        </button>
        <button>
          <a href="/addfactor">Add factor</a>
        </button>
      </dav>
      {/* Search */}
      <div className="bg-red-200 flex flex-col h-screen">
        <input
          className="mb-2 rounded-md text-white bg-gray-500 w-2/3 p-4 mx-auto mt-20 focus:outline-none"
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
                console.log(data);
                if (document.getElementById("text").value.length === 0) {
                  setData(null);
                } else if (data.data.length === 0) {
                  setData(null);
                  // setNew(document.getElementById("text").value);
                } else {
                  setData(data);
                  setNew(null);
                }
              });
          }}
        ></input>
        {data && (
          <div className="bg-gray-300 w-2/3 p-3 mx-auto">
            {data &&
              data.data.map((e) => {
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
        {neww && (
          <div className="bg-gray-300 w-2/3 p-3 mx-auto">
            <div className="bg-gray-600 my-2 p-2 rounded-md" key={1}>
              {neww} ++++
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase();
//   const data = await db
//     .collection("Book")
//     .find({ _id: ObjectId("611a60e1a5280083f2e479c2") })
//     .toArray();
//   const json = JSON.stringify(data);
//   // const res = await fetch("http://localhost:3000/api/post", {
//   //   method: "POST",
//   //   headers: { "Content-Type": "application/json" },
//   //   body: JSON.stringify({
//   //     name: "arash",
//   //   }),
//   // });
//   // const json = await res.json();
//   return {
//     props: { isConnected: json },
//   };
// }
