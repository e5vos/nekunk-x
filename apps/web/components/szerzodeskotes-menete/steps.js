import React from "react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";

export default function Steps() {
  return (
    <Flex className="bg-purple-900 bg-opacity-40 w-full h-auto flex flex-col justify-start items-center p-6 font-poppins">
      <h1 className="font-bold text-xl text-center">
        Ha még nem kötött az iskola szerződést a fogadó szervezettel, akkor ezt
        kell tenned:
      </h1>
      <br />
      <p className="text-lg p-2">
        A megállapodási szerződés (az iskola adataival kitöltve){" "}
        <Link href="https://docs.google.com/document/d/1NlOYDJJQWJF0fssI7WS7kU3cd3ZgvRdWS2lNZR1EZSs/edit?usp=sharing">
          <span className="underline">itt található</span>
        </Link>
        .{" "}
      </p>
      <ul className="list-disc text-lg p-2">
        <li>Nyomtasd ki két példányban a megállapodási szerződést!</li>
        <li>Vidd el mindkét példányt a fogadó szervezethez!</li>
        <li>A fogadó szervezet kitölti, lepecsételi és aláírja.</li>
        <li>Hozd el a suliba a kitöltött példányokat!</li>
        <li>Írasd alá a titkárságon mindkét példányt!</li>
        <li>
          Az egyik eredetit vidd vissza a fogadó szervezethez, a másikat
          megőrizzük mi az iskolában!
        </li>
      </ul>
      <br />
      <p className="font-bold text-lg text-center">
        Fontos tudnod, hogy iskola csak a fogadó szervezettel aláíratott és
        lepecsételt szerződéseket írja alá!
      </p>
    </Flex>
  );
}
