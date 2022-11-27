import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="w-full h-auto p-6 pt-14 pb-14 flex flex-col items-center justify-start HBBackgroundSvg bg-opacity-90">
      <h1 className="font-extrabold font-inter text-5xl text-center">
        Fedezd fel IKSZ óra
        <br />
        szerzési lehetőségeinket!
      </h1>
      <br />
      <Link href="/sajat">
        <button className=" p-2 font-poppins text-lg bg-blue-600 text-white rounded-3xl shadow-lg pl-8 pr-8">
          Általunk szervezett lehetőségek
        </button>
      </Link>
    </div>
  );
}
