import React, { useState, useRef } from "react";
import axios from "axios";
import Top from "../components/top";
import { Box, Flex, Heading, Select, Button } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Delete() {
  const [CurrentPage, setCurrentPage] = useState(1);
  const [Database, setDatabase] = useState("1");
  const [Programs, setPrograms] = useState([]);
  const [SelectedProg, setSelectedProg] = useState("1");

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function deleteSelected() {
    onClose();
    const deleteinfo = { databaseId: Database, programId: SelectedProg };
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/modifyData/delete`,
      deleteinfo
    );
    console.log(resp);
    if (resp.status == 200) {
      alert("Sikeres törlés!");
    }
  }

  async function goToTwo() {
    let toGetDatabase;

    if (Database == "1") {
      toGetDatabase = "allando";
    } else if (Database == "2") {
      toGetDatabase = "idoszakos";
    } else if (Database == "3") {
      toGetDatabase = "sajat";
    }
    const db = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/getData/${toGetDatabase}`
    );
    setPrograms(db.data);
    setCurrentPage(2);
  }

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
      <Top name="Törlés"></Top>
      <Box w={"100vw"} h={"10vh"} bgGradient="linear(to-r, red.900, blue.900)">
        <Flex
          w={"100%"}
          h={"100%"}
          bgGradient={"linear(to-b, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"}
          justify={"flex-start"}
          align={"center"}
          pl={"2vw"}
        >
          <Heading color="white">Dashboard - Nekünk X Admin</Heading>
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
        {CurrentPage == 1 && (
          <Box
            w={"100%"}
            bgColor="rgba(0, 0, 0, 0.4)"
            rounded={20}
            pl={"5"}
            pr="5"
            pt="5"
            pb="5"
          >
            <Heading mb="5" className="font-bold text-2xl">
              1. lépés - Válaszd ki a listát
            </Heading>
            <Select
              id="databaseselector"
              value={Database}
              onChange={(e) => {
                setDatabase(e.target.value);
              }}
            >
              <option value="1">Állandó lehetőségek</option>
              <option value="2">Időszakos lehetőségek</option>
              <option value="3">Általunk szervezett lehetőségek</option>
            </Select>
            <Button mt="5" onClick={() => goToTwo()} colorScheme="green">
              Következő
            </Button>
          </Box>
        )}
        {CurrentPage == 2 && (
          <Box
            w={"100%"}
            bgColor="rgba(0, 0, 0, 0.4)"
            rounded={20}
            pl={"5"}
            pr="5"
            pt="5"
            pb="5"
          >
            <Heading mb="5" className="font-bold text-2xl">
              2. lépés - Válaszd ki a törlendő programot
            </Heading>
            <Select
              value={SelectedProg}
              onChange={(e) => {
                setSelectedProg(e.target.value);
              }}
            >
              {Programs.map((element, index) => (
                <option key={element.id} value={element.id}>
                  {element.title}
                </option>
              ))}
            </Select>
            <Button mt="5" onClick={onOpen} colorScheme="red">
              Kijelölt program törlése
            </Button>
          </Box>
        )}
      </Flex>
    </>
  );
}
