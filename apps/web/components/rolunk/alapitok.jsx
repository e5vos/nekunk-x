import React from "react";
import Image from "next/image";
import Panni from "../../public/panni.jpg";
import Bogi from "../../public/bogi.jpg";
import { Heading, Highlight, Text } from "@chakra-ui/react";

export default function Alapitok() {
  return (
    <div className="bg-purple-900 bg-opacity-40">
      <div className="w-full flex justify-center pt-8">
        <Heading fontWeight={"extrabold"} fontFamily={"poppins"}>
          Alapítók
        </Heading>
      </div>
      <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-center gap-8 lg:p-12 p-8">
        <div className="lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-evenly justify-start lg:items-start items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={Panni}
              alt="Egy portré kép Dámosy Anna (Panni)ról"
              className="rounded-xl shadow-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full lg:p-4 pt-2 lg:pt-4">
            <Highlight
              query={"Dámosy Panni"}
              styles={{
                fontSize: "lg",
                fontWeight: "bold",
                px: "4",
                bg: "whiteAlpha.700",
                py: "1",
                rounded: "full",
              }}
            >
              Dámosy Panni
            </Highlight>
            <p className="text-justify mt-2">
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
              alt="Egy portré kép Török Boglárkáról"
              className="rounded-xl shadow-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full lg:p-4 pt-2 lg:pt-4">
            <Highlight
              query={"Török Boglárka"}
              styles={{
                fontSize: "lg",
                fontWeight: "bold",
                px: "4",
                bg: "whiteAlpha.700",
                py: "1",
                rounded: "full",
              }}
            >
              Török Boglárka
            </Highlight>
            <p className="text-justify mt-2">
              2022-ben 10. osztályosként, amikor a 4. évemet töltöttem az
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
