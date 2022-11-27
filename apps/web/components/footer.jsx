import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-blue-900 bg-opacity-40 text-center p-4">
      <p className=" font-poppins font-semibold">
        Minden jog fenntartva © {new Date().getFullYear()} - Nekünk X
      </p>
      <p className="text-sm font-poppins font-normal">Author: Barnabás Gőz</p>
    </div>
  );
}
