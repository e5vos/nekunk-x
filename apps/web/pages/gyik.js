import React from "react";
import Banner from "../components/gyik/banner";
import Chooser from "../components/gyik/chooser";
import Description from "../components/gyik/description";
import NavigationBar from "../components/navigation-bar";

export default function GYIK() {
  return (
    <>
      <NavigationBar pageTitle="GYIK" currentPage="gyik" />
      <Banner />
      <Description />
      <Chooser />
    </>
  );
}
