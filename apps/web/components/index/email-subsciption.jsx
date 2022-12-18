import React from "react";
import Image from "next/image";
import Link from "next/link";
import ESP_9869 from "../../public/ESP_9869.jpg";
import { Button } from "@chakra-ui/react";

export default function EmailSubscribtion() {
  return (
    <div className="w-full h-auto flex lg:flex-row flex-col lg:items-center items-start lg:justify-center justify-start gap-8 p-12 bg-blue-900 bg-opacity-50">
      <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
        <Image
          src={ESP_9869}
          className="rounded-md"
          alt="Kép egy kutyáról a Nekünk X egyik programján"
          width={480}
          height={319.5}
        />
      </div>
      <div className="lg:w-1/2 w-full lg:pr-20 text-center lg:text-left">
        <h1 className="text-4xl font-poppins font-semibold text-gray-900">
          Iratkozz fel hírlevelünkre!
        </h1>
        <p>
          Szeretnél minden programunkról elsőként tudni? Érdekelne minden
          lehetőség? Jó helyen jársz, mivel minden eseményünkről először a
          hírlevél feliratkozók értesülnek.
        </p>
        <br />
        <Link href="https://978bfb97.sibforms.com/serve/MUIEAJjbE6qw0F1slYAE5dQaS909l43W0OjJktRYa6ESaOOQPfIOrwy2Qf3wa9n8IzYBfjfoA7-1XRTj0IIFCmYrle10vOxbZbcwKcriuVPx-PMQNltSZ8FEXxVfrgmHz9cq5hONQRlXAWOVrteef-NCn9kkqlRLaukGPppwZNh3sHAAGiNCW3WV7DgKF6_K_OpSg5AcfYrOjWhk">
          <Button variant={"outline"} w="100%">
            Feliratkozás
          </Button>
        </Link>
      </div>
    </div>
  );
}
