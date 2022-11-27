import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.jpg";

export default function GeneralNekunkX() {
  return (
    <div className="w-full h-auto flex lg:flex-row flex-col items-center lg:justify-center justify-start gap-8 p-12">
      <div className="lg:w-1/3 w-full flex lg:justify-end justify-center">
        <Image
          src={Logo}
          className="rounded-md z-0"
          alt="Kép egy kutyáról a Nekünk X egyik programján"
          width={360}
          height={360}
        />
      </div>
      <div className="lg:w-2/3 w-full lg:pr-20">
        <h1 className="text-4xl font-poppins font-semibold text-gray-900">
          Mi a célunk?
        </h1>
        <p>
          A Nekünk X egy nonprofit szervezet, ahol középiskolás diákoknak
          segítünk összegyűjteni az érettségihez kötelező 50 IKSz órájukat
          (Iskolai Közösségi Szolgálat). Ezeket az önkéntes órákat minden
          diáknak magának kell összegyűjtenie, és sokszor nem is kapnak
          segítséget hozzá az iskolájuktól. A Nekünk X csapatának az a célja,
          hogy a szervezés és lebonyolítás terhét levegye a tanulók válláról, és
          hagyja a diákokat, hogy megtapasztalják a közösségi szolgálatban rejlő
          örömöket, ezzel is népszerűsítve az önkéntes munkát. Igyekszünk minél
          több sokszínű lehetőséget kínálni, hogy mindenki megtalálhassa a
          számára legérdekesebbet. És a legjobb? A teljes Nekünk X csapat
          középiskolás diákokból áll, úgyhogy pontosan tudjuk, hogy mire van
          szükségetek!
        </p>
      </div>
    </div>
  );
}
