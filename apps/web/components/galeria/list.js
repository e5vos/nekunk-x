import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Pics from "./pics";

export default function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const curData = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + "/getData/galeria"
      );
      setData(curData.data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div className="w-full h-auto flex lg:flex-row flex-col flex-wrap lg:justify-center justify-start gap-2 p-6 lg:p-18">
      {data.length > 0 ? (
        <>
          {data.map((element, index) => (
            <Pics key={index} data={data} element={element}></Pics>
          ))}
        </>
      ) : (
        <div className="w-full h-auto flex flex-col justify-center items-center pt-11 pb-72">
          <InfinitySpin color="#000000" width="200"></InfinitySpin>
          <h1>Lehetőségek betöltése folyamatban...</h1>
        </div>
      )}
    </div>
  );
}
