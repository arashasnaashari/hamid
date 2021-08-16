import { DatePicker } from "jalali-react-datepicker";
import { useState } from "react";
import Head from "../components/addFactor/head";
import States from "../components/addFactor/states";
import Products from "../components/addFactor/products";
export default function Home() {
  return (
    <>
      <div className=" bg-gray-100 h-screen rounded-md">
        {/* Date & Name */}
        {/* <Head /> */}

        <hr></hr>

        {/* states */}
        {/* <States /> */}

        <hr></hr>
        {/* product table or chek */}
        <Products />
      </div>
    </>
  );
}
