import React from "react";
import Link from "next/link";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdatesRounded";

export default function HomeBanner() {
  return (
    <div className="w-full h-auto p-6 pt-24 pb-24 flex flex-col items-center justify-start HBBackgroundSvg bg-opacity-90">
      <h1 className="font-extrabold font-inter text-4xl lg:text-5xl text-center lg:pr-16 lg:pl-16">
        Fedezd fel IKSZ óra szerzési lehetőségeinket!
      </h1>
      <br />
      <Link href="/sajat">
        <button className=" p-2 font-poppins text-md lg:text-lg bg-blue-600 text-white rounded-3xl shadow-lg pl-8 pr-8">
          Saját programjaink
        </button>
      </Link>
    </div>
  );
}
