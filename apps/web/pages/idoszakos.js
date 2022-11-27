import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import NavigationBar from "../components/navigation-bar";
import Banner from "../components/idoszakos/banner";
import Listing from "../components/listing";

export default function Idoszakos() {
  const [Options, setOptions] = useState([]);

  useEffect(() => {
    async function getDataIdoszakos() {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + "/getData/idoszakos"
      );
      setOptions(data.data);
    }
    getDataIdoszakos();
  }, []);

  return (
    <>
      <NavigationBar
        pageTitle="Időszakos lehetőségek"
        currentPage="idoszakos"
      />
      <Banner />
      <Listing Options={Options} />
    </>
  );
}
