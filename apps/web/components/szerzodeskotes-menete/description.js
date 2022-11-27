import React from "react";
import Link from "next/link";

export default function Description() {
  return (
    <div className="w-full h-auto p-10 pr-16 pl-16">
      <h2 className="text-xl font-poppins text-center font-semibold text-blue-900">
        Ha találtál egy olyan fogadó szervezetet, ahol szeretnél önkéntes munkát
        végezni, szerződést kell kötnöd, abban az esetben, ha az iskola még nem
        szerződött a szervezettel. Mielőtt ezt megtennéd kérlek ellenőrizd a{" "}
        <Link href="/fogadoszervezetek-listaja">
          <span className="underline">fogadószervezetek listáját</span>
        </Link>
        , akikkel már kötött az iskola szerződést.
      </h2>
    </div>
  );
}
