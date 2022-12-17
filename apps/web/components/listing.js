import React, { useState } from "react";
import Program from "./program";
import { InfinitySpin } from "react-loader-spinner";
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Listing({ Options }) {
  const [Shown, setShown] = useState(false);
  return (
    <div className="w-full h-auto lg:p-16 p-6 flex lg:flex-wrap lg:flex-row flex-col lg:justify-center justify-start lg:items-start items-center gap-4">
      {Options.length > 0 ? (
        <>
          {Options.map((option, index) => (
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={option.image}
                  alt="Kép a programról"
                  borderRadius="lg"
                  height={250}
                  width={400}
                  objectFit="cover"
                />
                <Heading mt={6} size="md">
                  {option.title}
                </Heading>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setShown(option)}
                >
                  Program részletei
                </Button>
              </CardFooter>
            </Card>
          ))}
        </>
      ) : (
        <div className="w-full h-auto flex flex-col justify-center items-center pt-11 pb-48">
          <InfinitySpin color="#000000" width="200"></InfinitySpin>
          <h1>Már élesztjük a szervert! Egy-két pillanat...</h1>
        </div>
      )}
      {Shown && <Program setShown={setShown} data={Shown}></Program>}
    </div>
  );
}
