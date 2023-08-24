import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import IMG_6346 from "../../public/IMG_6346.jpg";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import Image from "next/image";

export default function WhoWeAreBanner() {
  return (
    <div className="w-full h-auto flex lg:flex-row flex-col justify-center items-start lg:items-center lg:justify-center gap-8 p-12">
      <div className="lg:w-1/2 w-full lg:pl-20 pl-0 text-center lg:text-right">
        <h1 className="text-4xl font-poppins font-semibold text-gray-900">
          Ismerd meg csapatunkat!
        </h1>
        <p>
          Kíváncsi vagy, kik állnak a Nekünk X programjai mögött? Ki segít neked
          az 50 óra megszerzésében? Nos, bemutatkozunk neked a következő
          oldalon! Megismerheted csapatunkat, akik tervezik posztereinket,
          kezelik a közösségi médiát, szervezik a programokat, válaszolnak az
          emailekre, és természetesen minden másban is melletted állnak.
        </p>
        <br />
        <Link href="/rolunk">
          <Button
            width="100%"
            variant="solid"
            colorScheme="purple"
            rounded={"full"}
            gap={2}
          >
            Rólunk <BiSolidRightTopArrowCircle />
          </Button>
        </Link>
      </div>
      <div className="lg:w-1/2 w-full flex lg:justify-start justify-center">
        <Image
          src={IMG_6346}
          alt="Kép egy kutyáról a Nekünk X egyik programján"
          width={485}
          height={320}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
