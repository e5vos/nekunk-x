import React from "react";
import Image from "next/image";
import Panni from "../../public/panni.jpg";
import Bogi from "../../public/bogi.jpg";

export default function Alapitok() {
  return (
    <div className="bg-blue-900 bg-opacity-50">
      <div className="w-full flex justify-center pt-8">
        <h1 className="fotn-poppins text-xl font-bold">Az Ötletgazdák</h1>
      </div>
      <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-center gap-8 p-12">
        <div className="lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-evenly justify-start items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={Panni}
              alt="Egy portré kép Dámosy Anna (Panni)ról"
              className="rounded-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full p-6">
            <h1 className="poppins font-extrabold text-lg">Dámosy Panni</h1>
            <p className="text-justify">
              7. osztályosként kezdtem az Eötvösben önkénteskedni, és hamar
              nagyon megszerettem. Bogival észrevettük, hogy az IKSz rendszerben
              akadnak nehézségek, amik akadályozzák a diákokat, hogy élvezhessék
              az önkénteskedést, és ezen szeretnénk segíteni. Remélem, hogy
              mindenki akivel együtt dolgozunk meg fogja tapasztalni, hogy
              milyen jó szórakozás is lehet a közösségi szolgálat, és hogy olyan
              közösség alakul ki a Nekünk X körül, ahol támogatjuk és bátorítjuk
              egymást mindenben!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-evenly justify-start lg:items-start items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={Bogi}
              alt="Egy portré kép Dámosy Anna (Panni)ról"
              className="rounded-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full p-6">
            <h1 className="poppins font-extrabold text-lg">Török Boglárka</h1>
            <p className="text-justify">
              2022-ben 10. osztályosként, amikor a 3. évemet töltöttem az
              Eötvösben, határoztuk el Pannival, hogy szeretnénk az
              önkénteskedéssel komolyabban foglalkozni. Az iskolában szerzett
              tapasztalatok alapján a Nekünk X sokat tud segíteni a diákság
              számára, mert azt gondoljuk, hogy az 50 óra összegyűjtése sokaknak
              nem is olyan egyszerű. A programunk ebben szeretne segítséget
              nyújtani, illetve reménykedem benne, hogy idővel egy új közösséget
              is tudunk építeni!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
