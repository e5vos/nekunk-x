import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import NavigationBar from "../components/navigation-bar";
import Banner from "../components/allando/banner";
import Listing from "../components/listing";

export default function Allando() {
  const [Options, setOptions] = useState([]);

  useEffect(() => {
    async function getDataAllando() {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + "/getData/allando"
      );
      setOptions(data.data);
    }
    getDataAllando();
  }, []);

  return (
    <>
      <NavigationBar pageTitle="Állandó lehetőségek" currentPage="allando" />
      <Banner />
      <Listing Options={Options} />
    </>
  );
}
