import React from "react";
import Banner from "../components/fogado-adatbazis/banner";
import NavigationBar from "../components/navigation-bar";
import IframeComp from "../components/fogado-adatbazis/iframe";

export default function FogadoAdatbazis() {
  return (
    <>
      <NavigationBar
        pageTitle="Fogadó szervezetek adatbázisa"
        currentPage="fogado-adatbazis"
      ></NavigationBar>
      <Banner />
      <div className="flex justify-center">
        <IframeComp></IframeComp>
      </div>
    </>
  );
}
