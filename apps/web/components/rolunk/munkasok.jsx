import React from "react";
import Image from "next/image";
import Szonja from "../../public/Szonja.jpg";
import Barni from "../../public/Barni.jpg";

export default function Munkatársak() {
  return (
    <div>
      <div className="w-full flex justify-center pt-8">
        <h1 className="fotn-poppins text-xl font-bold">A jövő generációja</h1>
      </div>
      <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-center gap-8 lg:p-12 p-8">
        <div className="lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-evenly justify-start lg:items-start items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={Barni}
              alt="Egy portré kép Gőz Barnabásról"
              className="rounded-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full lg:p-4 pt-2 lg:pt-4">
            <h1 className="poppins font-extrabold text-lg">Gőz Barnabás</h1>
            <p className="text-justify">
              A weboldal fejlesztése közben arra jutottam, hogy képtelen vagyok
              magamról ismertető szöveget írni sajnos. Ilyen szuperképességekkel
              csatlakoztam 2022 nyarán a Nekünk X szervezői csapatába. Az eddig
              elmúlt időszakban az weboldal fejlesztésével foglalkoztam, melynek
              végterméke az az oldal, amit most (remélhetőleg a nyilvánossá
              tétel után) magad előtt látsz. Szerencsére nekem még nem nyomja
              hátamat a kötelező 50 óra megszerzése, hiszen idén (2022/2023-ban)
              8. osztályos vagyok, de a Nekünk X-nek köszönhetően már az
              osztálytársaim is előredolgozhatnak és elkezdhetik a közösségi
              munkát.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-evenly justify-start lg:items-start items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={Szonja}
              alt="Egy portré kép Dámosy Anna (Panni)ról"
              className="rounded-md"
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full lg:p-4 pt-2 lg:pt-4">
            <h1 className="poppins font-extrabold text-lg">Papik Szonja</h1>
            <p className="text-justify">
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
