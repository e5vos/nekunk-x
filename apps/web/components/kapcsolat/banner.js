import React from "react";

export default function Banner() {
  return (
    <>
      <div className="w-full HBBackgroundSvg h-auto p-12 lg:p-16 text-center">
        <h1 className="text-5xl font-bold font-poppins">Kapcsolat</h1>
      </div>
      <div className="w-full h-auto text-center p-10 lg:pr-16 lg:pl-16">
        <h2 className="text-xl font-semibold text-blue-900 font-poppins">
          Ezeken a felületeken tudsz kapcsolatba lépni velünk:
        </h2>
      </div>
    </>
  );
}
