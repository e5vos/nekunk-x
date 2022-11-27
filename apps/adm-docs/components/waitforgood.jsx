import React, { useEffect } from "react";
import { Flex, Box, Heading, Spacer, Text, Spinner } from "@chakra-ui/react";
import { UserButton, useUser } from "@clerk/nextjs";
import { ChakraProvider } from "@chakra-ui/react";

export default function WaitForGoodUser() {
  const { user } = useUser();
  return (
    <ChakraProvider>
      <>
        <Box
          w={"100vw"}
          h={"10vh"}
          bgGradient="linear(to-r, red.900, blue.900)"
        >
          <Flex
            w={"100%"}
            h={"100%"}
            bgGradient={"linear(to-b, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"}
            justify={"flex-start"}
            align={"center"}
            pl={"2vw"}
            pr={"2vw"}
          >
            <Heading color="white">Kezelőlap - Nekünk X Admin</Heading>
            <Spacer />
            <UserButton />
          </Flex>
        </Box>
        <Flex
          w={"100vw"}
          minH={"90vh"}
          direction={"column"}
          justify={"flex-start"}
          color={"white"}
          align={"flex-start"}
          bgGradient="linear(to-r, red.900, blue.900)"
          gap={2}
          pl={"10vw"}
          pr={"10vw"}
          pt={"5vh"}
          pb={"10vh"}
        >
          <Heading color={"white"} textDecoration={"none"}>
            Helló, {user.firstName}
          </Heading>
          <Text>Úgy tűnik, hogy nem vagy adminisztrátor.</Text>
          <Box
            w={"100%"}
            bgColor="rgba(0, 0, 0, 0.4)"
            rounded={20}
            pl={"5"}
            pr="5"
            pt="5"
            pb="5"
          >
            <Flex direction={"column"} align={"center"} wrap={"wrap"}>
              <Spinner size={"xl"} color={"white"} />
              <Text>
                Nyugalom, az is lehet, hogy még nem adtuk meg a szükséges
                jogosultságokat.
              </Text>
              <Text>
                Amennyiben tényleg nem vagy adminisztrátor, kérlek töröld
                fiókod!
              </Text>
            </Flex>
          </Box>
          <Box
            w={"100%"}
            bgColor="rgba(0, 0, 0, 0.4)"
            rounded={20}
            pl={"5"}
            pr="5"
            pt="5"
            pb="5"
          >
            <Heading fontSize={"xl"} pb="5">
              Hogyan lehetsz Nekünk X szervező?
            </Heading>
            <Flex
              className="gap-2"
              direction={"column"}
              align={"center"}
              wrap={"wrap"}
            >
              <Text>
                Jelenleg nagy eséllyel nem keresünk csapattagokat, viszont
                lelkes segítőkre bármikor szükség lehet.
              </Text>
              <Text>Ha szeretnél segíteni, kérlek írj egy email nekünk</Text>
            </Flex>
          </Box>
        </Flex>
      </>
    </ChakraProvider>
  );
}
