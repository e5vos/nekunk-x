import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import NavigationBar from "../components/navigation-bar";
import Banner from "../components/sajat/banner";
import Listing from "../components/listing";

export default function Sajat() {
  const [Options, setOptions] = useState([]);

  useEffect(() => {
    async function getDataSajat() {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + "/getData/sajat"
      );
      setOptions(data.data);
    }
    getDataSajat();
  }, []);

  return (
    <>
      <NavigationBar
        pageTitle="Általunk szervezett lehetőségek"
        currentPage="sajat"
      />
      <Banner />
      <Listing Options={Options} />
    </>
  );
}
