import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.jpg";

export default function GeneralNekunkX() {
  return (
    <div className="w-full h-auto flex lg:flex-row flex-col items-center lg:justify-center justify-start gap-8 p-8 lg:p-12">
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
        <h1 className="text-4xl font-poppins font-bold text-gray-900 pb-2">
          Mi a célunk?
        </h1>
        <p>
          A Nekünk X egy nonprofit szervezet, amely középiskolás diákoknak segít
          az érettségihez szükséges 50 IKSz (Iskolai Közösségi Szolgálat) óra
          megszerzésében. Tudjuk, hogy sokszor a diákoknak egyedül kell
          vállalniuk az önkéntes órák összegyűjtését, és gyakran hiányzik a
          segítség az iskolától. Célja, hogy könnyebbé tegye a szervezést és
          lebonyolítást, így a diákok maguk is élvezhetik a közösségi szolgálat
          előnyeit. Mindenféle lehetőséget kínálunk, hogy mindenki rátaláljon a
          számára legmegfelelőbb feladatokra. És a legjobb rész? A teljes Nekünk
          X csapat középiskolás diákokból áll, tehát pontosan értjük, mire van
          szükségetek!
        </p>
      </div>
    </div>
  );
}
