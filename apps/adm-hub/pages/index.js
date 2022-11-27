import Head from "next/head";
import { Box, Flex, Heading, Text, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <Head>
        <title>Elosztó - Nekünk X Adminisztrátor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w={"100vw"} h={"10vh"} bgGradient="linear(to-r, red.900, blue.900)">
        <Flex
          w={"100%"}
          h={"100%"}
          bgGradient={"linear(to-b, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"}
          justify={"flex-start"}
          align={"center"}
          pl={"2vw"}
          pr={"2vw"}
        >
          <Heading color="white">Elosztó - Nekünk X Admin</Heading>
          <Spacer />
          <UserButton />
        </Flex>
      </Box>
      <Flex
        w={"100vw"}
        minH={"90vh"}
        direction={"column"}
        justify={"flex-start"}
        align={"flex-start"}
        bgGradient="linear(to-r, red.900, blue.900)"
        className="text-white gap-2"
        pl={"10vw"}
        pr={"10vw"}
        pt={"5vh"}
        pb={"10vh"}
      >
        <Heading>Héjhó {user.firstName}! Hogy vagy?</Heading>
        <Text mt="2" color={"gray.200"}>
          Itt az elosztón kiválaszthatod, a sok lehetőség közül most miért
          érkeztél az adminisztrátor felületre
        </Text>
        <Box
          w={"100%"}
          bgColor="white"
          rounded={20}
          pl={"5"}
          pr="5"
          pt="5"
          pb="5"
          mt={"10"}
          color={"black"}
          boxShadow="lg"
        >
          <Heading fontSize={"xl"} pb="5">
            Lehetőségek
          </Heading>
          <Flex
            direction={"row"}
            className="flex-wrap lg:flex-nowrap gap-2"
            justify={"start"}
          >
            <Link href="https://dash.admin.nekunk-x.ga" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer min-w-2/3 h-full">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Weboldal szerkesztése</h1>
                </div>
                <p>
                  Itt tudod szerkeszteni a weboldal tartalmát, a programokat.
                </p>
              </div>
            </Link>
            <Link href="https://docs.admin.nekunk-x.ga" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer min-w-2/3 h-full">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Dokumentáció</h1>
                </div>
                <p>
                  Itt tudsz ismeretet szerezni, a különböző feladatainkról,
                  melyek előkerülhetnek a közös munka során.
                </p>
              </div>
            </Link>
            <Link href="https://accounts.nekunk-x.ga" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer min-w-2/3 h-full">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Fiók szerkesztése</h1>
                </div>
                <p>
                  Itt tudod megváltoztatni jelszavad, itt adhatsz hozzá
                  fiókodhoz profilképet.
                </p>
              </div>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
