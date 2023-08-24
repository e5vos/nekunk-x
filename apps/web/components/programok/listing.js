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
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Listing({ Options }) {
  const [Shown, setShown] = useState(null);
  return (
    <>
      <Program data={Shown} setData={setShown}></Program>
      <div className="w-full h-auto lg:p-16 p-6 flex lg:flex-wrap lg:flex-row flex-col lg:justify-center justify-start lg:items-start items-center gap-4">
        {Options.length > 0 ? (
          <>
            {Options.map((option, index) => (
              <Card maxW="sm" rounded={"2xl"} key={option._id}>
                <CardBody>
                  <Image
                    src={option.image}
                    alt="Kép a programról"
                    borderRadius="xl"
                    height={200}
                    width={400}
                    objectFit="cover"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{option.title}</Heading>
                    <Text>{option.description.slice(0, 120) + "..."}</Text>
                  </Stack>
                </CardBody>
                <Divider color={"gray.200"} />
                <CardFooter>
                  <Button
                    variant="solid"
                    colorScheme="purple"
                    onClick={() => {
                      setShown(option);
                    }}
                    ml={"auto"}
                    px={8}
                    rounded={"full"}
                  >
                    Program részletei →
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
      </div>
    </>
  );
}
