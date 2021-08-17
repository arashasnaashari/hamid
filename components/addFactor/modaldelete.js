import Popup from "reactjs-popup";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Contxt from "../../contxt/contxt";

const Com = ({ data, id }) => {
  const cntx = useContext(Contxt);
  const [open, setOpen] = useState(false);

  const handleDeleteRow = () => {
    const A = cntx.products.filter((p) => p._id !== id);
    cntx.setProduct(A);
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
            <h1>Delete</h1>
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
                <div>
                  <button
                    className="p-4 bg-red-600"
                    onClick={() => handleDeleteRow()}
                  >
                    Delete
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
