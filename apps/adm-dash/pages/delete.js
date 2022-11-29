import React, { useState, useEffect } from "react";
import axios from "axios";
import Top from "../components/top";
import { UserButton } from "@clerk/nextjs";
import {
  Box,
  Flex,
  Heading,
  Select,
  Button,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Delete() {
  const [Programs, setPrograms] = useState([]);
  const [SelectedProg, setSelectedProg] = useState("1");

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function deleteSelected() {
    onClose();
    const deleteinfo = { programID: SelectedProg };
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/modifyData/deleteProgram`,
      deleteinfo
    );
    console.log(resp);
    if (resp.status == 200) {
      alert("Sikeres törlés!");
    }
  }

  async function getPrograms() {
    const db = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/getData/all`
    );
    setPrograms(db.data);
  }

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Program törlése
            </AlertDialogHeader>

            <AlertDialogBody>
              Biztosan szeretnéd törölni a programot? A művelet nem vonható
              vissza!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Mégse</Button>
              <Button colorScheme="red" onClick={deleteSelected} ml={3}>
                Törlés
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Top name="Program törlése"></Top>
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
        <Heading>Program törlése</Heading>
        <Text mt="1" color={"gray.200"}>
          Amennyiben lejárt egy lehetőség a weboldalunkon, itt törölheted azt.
          <strong> Vigyázz, nagy a felelősség!</strong>
        </Text>
        {Programs.length > 0 ? (
          <Box
            w={"100%"}
            bgColor="rgba(0, 0, 0, 0.4)"
            rounded={20}
            pl={"5"}
            pr="5"
            pt="5"
            pb="5"
            mt={"5"}
          >
            <Heading mb="5" fontSize={"xl"}>
              Válaszd ki a törlendő programot!
            </Heading>
            <Select
              value={SelectedProg}
              onChange={(e) => {
                setSelectedProg(e.target.value);
              }}
            >
              {Programs.map((element, index) => (
                <option key={element.id} value={element._id}>
                  {element.title}
                </option>
              ))}
            </Select>
            <Box mt="5">
              <Button onClick={onOpen} colorScheme="red">
                Kijelölt program törlése
              </Button>
              <Link href="/">
                <Button ml="3" colorScheme="grey" variant={"outline"}>
                  Mégse
                </Button>
              </Link>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
}
