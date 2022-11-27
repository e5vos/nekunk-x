import React from "react";
import Banner from "../components/kapcsolat/banner";
import NavigationBar from "../components/navigation-bar";
import Options from "../components/kapcsolat/options";

export default function Kapcsolat() {
  return (
    <>
      <NavigationBar pageTitle="Kapcsolat" currentPage="kapcsolat" />
      <Banner />
      <Options />
    </>
  );
}
