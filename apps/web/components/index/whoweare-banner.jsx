import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import IMG_6346 from "../../public/IMG_6346.jpg";

export default function WhoWeAreBanner() {
  return (
    <div className="w-full h-auto flex lg:flex-row flex-col justify-center items-start lg:items-center lg:justify-center gap-8 p-12">
      <div className="lg:w-1/2 w-full lg:pl-20 pl-0 text-center lg:text-right">
        <h1 className="text-4xl font-poppins font-semibold text-gray-900">
          Ismerd meg a Nekünk X csapatát!
        </h1>
        <p>
          Érdekel, hogy ki áll a Nekünk X csodás programjai mögött? Kik
          segítették az 50 órád megszerzését? Kik vagyunk mi? Nyugodj meg, mert
          a következő oldalon mindannyian bemutatkozunk és megismerheted a
          csapatot és megtudhatod, ki készíti posztereinket, ki kezeli a
          közösségi médiát, ki szervezi a programokat, ki válaszol az emailekre,
          ki küldi a hírlevelet és természetesen, hogy kik segítenek, bármiben
          ami előjön.
        </p>
        <br />
        <Link href="/rolunk">
          <Button width="100%" variant="outline">
            Rólunk
          </Button>
        </Link>
      </div>
      <div className="lg:w-1/2 w-full flex lg:justify-start justify-center">
        <Image
          src={IMG_6346}
          className="rounded-md"
          alt="Kép egy kutyáról a Nekünk X egyik programján"
          width={485}
          height={320}
        />
      </div>
    </div>
  );
}
