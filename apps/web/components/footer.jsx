import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-black text-center p-4 flex gap-4 justify-center text-white">
      <div className="flex flex-col">
        <p className=" font-poppins font-semibold">
          Minden jog fenntartva © {new Date().getFullYear()} - Nekünk X
        </p>
        <p className="text-sm font-poppins font-normal">
          Developed by{" "}
          <Link className="underline" href="https://github.com/barnagoz">
            Barnabás Gőz
          </Link>
        </p>
      </div>
    </div>
  );
}
