import React from "react";
import Image from "next/image";
import Szonja from "../../public/szonjaNew.jpg";
import Barni from "../../public/Barni.jpg";
import { Highlight } from "@chakra-ui/react";

export default function Munkatársak() {
  return (
    <div>
      <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-center gap-8 lg:p-12 p-8">
        <div className="lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-evenly justify-start lg:items-start items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={Barni}
              alt="Egy portré kép Gőz Barnabásról"
              className="rounded-xl shadow-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full lg:p-4 pt-2 lg:pt-4">
            <Highlight
              query={"Gőz Barnabás"}
              styles={{
                fontSize: "lg",
                fontWeight: "bold",
                px: "4",
                bg: "blue.100",
                py: "1",
                rounded: "full",
              }}
            >
              Gőz Barnabás
            </Highlight>
            <p className="text-justify mt-2">
              Bogiék felkérésére 2022 nyarán csatlakoztam a Nekünk X csapatához,
              és azóta aktívan részt veszek a tevékenységeikben. A csapatban
              főbb feladatom a weboldal fejlesztése. Életem első Nekünk X-es
              programját idén tavasszal éltem át, és ez az élmény maradéktalanul
              megragadott. A programban nagyon megfogott, hogy nem csak egyedül,
              hanem barátaimmal önkénteskedhettem. Úgy gondolom, hogy a Nekünk X
              a tökéletes szervezet arra, hogy lehetőséget teremsen mindenki
              számára, hogy megtapasztalja az önkénteskedés örömét.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-evenly justify-start lg:items-start items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={Szonja}
              alt="Egy portré kép Papik Szonjáról"
              className="rounded-xl shadow-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full lg:p-4 pt-2 lg:pt-4">
            <Highlight
              query={"Papik Szonja"}
              styles={{
                fontSize: "lg",
                fontWeight: "bold",
                px: "4",
                bg: "blue.100",
                py: "1",
                rounded: "full",
              }}
            >
              Papik Szonja
            </Highlight>
            <p className="text-justify mt-2">
              2022 nyarán lettem tagja a Nekünk X csapatának. 8. osztályosként
              nem nagyon figyeltem fel erre a szervezetre, de 9. elején mikor
              bevettek rájöttem, hogy az IKSz órák összegyűjtése ilyesmi
              összefogás nélkül nem egyszerű. Nagyon örülök, hogy Bogiék
              segítségével ennyi új élményben lehetett részem, és remélem
              sokaknak tudunk még örömteli programokkal segíteni az IKSz órák
              összegyűjtése közben. A szervezeten belül az arculat fejlesztése a
              fő feladatom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
