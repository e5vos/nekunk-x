import React, { useState, useEffect } from "react";
import NavigationBar from "../components/navigation-bar";
import Banner from "../components/programok/banner";
import Listing from "../components/programok/listing";
import axios from "axios";

export default function Programok() {
  const [Options, setOptions] = useState([]);

  useEffect(() => {
    async function getDataAllando() {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + "/getData/all"
      );

      // reverse the array to show the latest posts first
      data.data.reverse();

      setOptions(data.data);
    }
    getDataAllando();
  }, []);

  return (
    <>
      <NavigationBar pageTitle="Lehetőségek" currentPage="programok" />
      <Banner />
      <Listing Options={Options} />
    </>
  );
}
