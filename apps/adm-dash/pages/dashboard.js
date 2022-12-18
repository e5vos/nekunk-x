import Top from "../components/top";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Link from "next/link";
import {
  Flex,
  Box,
  Text,
  Heading,
  Spacer,
  Button,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();

  const toast = useToast();

  useEffect(() => {
    if (user.firstName !== "Barnabás" && user.lastName !== "Gőz") {
      onOpen();
    }
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} blockScrollOnMount={true} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Figyelmeztetés</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Kedves {user.firstName}!
            <br />
            Ezen oldal segítségével a Nekünk X hivatalos weboldalán megjelenő
            adatokat tudod szerkeszteni. Kérlek, hogy mindent gondj át, mielőtt
            véglegesíted, mivel az oldallal nagy kárt is okozhatsz.
            <br />
            Jó munkát!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="whatsapp" variant={"solid"} onClick={onClose}>
              Rendben
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Top name="Weboldal szerkesztő"></Top>
      <Box w={"100vw"} h={"15vh"} className="bgtop">
        <Flex
          w={"100%"}
          h={"100%"}
          justify={"flex-start"}
          align={"center"}
          pl={"2vw"}
          pr={"2vw"}
        >
          <Image
            src="https://images.clerk.dev/uploaded/img_2GxE5ALDHyQqnxvsW9dvYjYkzfZ.jpeg"
            width={60}
            height={60}
            className="rounded-xl mr-4"
          />
          <Heading fontSize={20} color="white">
            Nekünk X Admin Dashboard
          </Heading>
          <Spacer />

          <UserButton />
        </Flex>
      </Box>
      <Flex
        w={"100vw"}
        minH={"85vh"}
        direction={"column"}
        justify={"flex-start"}
        align={"flex-start"}
        bgColor="white"
        className="text-black gap-2"
        pl={"10vw"}
        pr={"10vw"}
        pt={"5vh"}
        pb={"10vh"}
      >
        <Heading>Mit szeretnél csinálni, {user.firstName}?</Heading>
        <Text mt="2" color={"gray.900"}>
          Ezen az oldalon tudod szerkeszteni a weboldal leggyakrabban
          szerkesztendő részeit.
        </Text>
        <Spacer></Spacer>
        <Box
          w={"100%"}
          bgColor="white"
          className="shadow-2xl shadow-red-900/60"
          rounded={20}
          pl={"5"}
          pr="5"
          pt="5"
          pb="5"
        >
          <Heading fontSize={"xl"} pb="5">
            Programok
          </Heading>
          <Flex className="gap-2" wrap={"wrap"}>
            <Link href="/edit" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Szerkesztése</h1>
                </div>
                <p>
                  Van egy hibás lehetőség az
                  <br />
                  oldalon? Hát kattints ide!
                </p>
              </div>
            </Link>
            <Link href="/add" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Hozzáadása</h1>
                </div>
                <p>
                  Láttad már az új emailt arról
                  <br />a lehetőségről? Hát kattints ide!
                </p>
              </div>
            </Link>
            <Link href="/delete" passHref>
              <div className="pl-5 pr-5 pt-5 pb-10 h-full border-2 border-gray-400 rounded-2xl cursor-pointer">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Törlése</h1>
                </div>
                <p>Szóval lejárt, mi? Hát kattints ide!</p>
              </div>
            </Link>
          </Flex>
        </Box>
        <Box
          w={"100%"}
          bgColor="white"
          className="shadow-2xl shadow-red-900/60"
          rounded={20}
          pl={"5"}
          pr="5"
          pt="5"
          pb="5"
        >
          <Heading fontSize={"xl"} pb="5">
            Galéria
          </Heading>
          <Flex className="gap-2" wrap={"wrap"}>
            <Link href="/galeria" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Képfeltöltés</h1>
                </div>
                <p>Megjöttek a képek? Hát kattints ide!</p>
              </div>
            </Link>
          </Flex>
        </Box>
        <Box
          w={"100%"}
          bgColor="white"
          className="shadow-2xl shadow-red-900/60"
          rounded={20}
          pl={"5"}
          pr="5"
          pt="5"
          pb="5"
        >
          <Heading fontSize={"xl"} pb="5">
            Egyéb
          </Heading>
          <Flex className="gap-2" wrap="wrap">
            <Link href="https://github.com/barnagoz" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">
                    Weboldal forráskódjának szerkesztése
                  </h1>
                </div>
                <p>Szóval valami nem stimmel a weboldaon? Hát kattints ide!</p>
              </div>
            </Link>
            <Link href="mailto:barnagoz@icloud.com" passHref>
              <div className="pl-5 pr-5 pt-5 pb-5 border-2 border-gray-400 rounded-2xl cursor-pointer">
                <div className="flex justify-start gap-1">
                  <h1 className="font-bold text-lg">Segítség a fejlesztőtől</h1>
                </div>
                <p>Írj nyugodtan, nem harapok. ;)</p>
              </div>
            </Link>
          </Flex>
        </Box>
        <Spacer></Spacer>
      </Flex>
    </>
  );
}
