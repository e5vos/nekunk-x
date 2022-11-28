import React from "react";
import NavigationBar from "../components/navigation-bar";
import Alapitok from "../components/rolunk/alapitok";
import Banner from "../components/rolunk/banner";
import GeneralNekunkX from "../components/rolunk/general-nekunx";
import Munkatársak from "../components/rolunk/munkasok";

export default function Rolunk() {
  return (
    <>
      <NavigationBar pageTitle="Rólunk" currentPage="rolunk" />
      <Banner />
      <GeneralNekunkX />
      <Alapitok />
      <Munkatársak />
    </>
  );
}
