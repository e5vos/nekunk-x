import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function HomeBanner() {
  return (
    <div className="w-full h-auto p-6 pt-24 pb-24 flex flex-col items-center justify-start HBBackgroundSvg bg-opacity-90">
      <h1 className="font-extrabold font-inter text-4xl lg:text-5xl text-center lg:pr-16 lg:pl-16">
        Fedezd fel IKSZ óra szerzési lehetőségeinket!
      </h1>
      <br />
      <Link href="/sajat">
        <Button colorScheme="blue">Saját programjaink</Button>
      </Link>
    </div>
  );
}
