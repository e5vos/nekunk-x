import React from "react";
import Banner from "../components/galeria/banner";
import NavigationBar from "../components/navigation-bar";
import List from "../components/galeria/list";

export default function Galeria() {
  return (
    <>
      <NavigationBar pageTitle="Galéria" currentPage="galeria"></NavigationBar>
      <Banner></Banner>
      <List></List>
    </>
  );
}
