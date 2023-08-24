import React from "react";
import Link from "next/link";

export default function Description() {
  return (
    <div className="w-full h-auto p-10 lg:pr-16 lg:pl-16">
      <h2 className="text-xl font-poppins text-center font-semibold text-blue-900">
        Itt találod a leggyakrabban felmerülő kérdéseket. Ha ezen felül
        bármilyen kérdésed lenne,{" "}
        <Link href="/kapcsolat">
          <u>itt felteheted</u>
        </Link>{" "}
        nekünk.
      </h2>
    </div>
  );
}
