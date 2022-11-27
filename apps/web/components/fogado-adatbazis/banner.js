import React from "react";

export default function Banner() {
  return (
    <>
      <div className="w-full HBBackgroundSvg h-auto p-16 text-center">
        <h1 className="text-5xl font-bold font-poppins">
          Fogadó szervezetek adatbázisa
        </h1>
      </div>
      <div className="w-full h-auto text-center p-10 pr-16 pl-16">
        <h2 className="text-xl font-semibold text-blue-900 font-poppins">
          Itt találod azon szervezetek listáját, amivel már kötött szerződést az
          Eötvös. Az abc-sorrendbe helyezett szervezetek mellett megtalálod a
          kapcsolattartó kontakt nevét és elérhetőségét, így könnyedén
          kapcsolatba tudsz vele lépni.
        </h2>
      </div>
    </>
  );
}
