import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Select,
  Button,
  Spacer,
  Text,
  useToast,
  Input,
} from "@chakra-ui/react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Top from "../components/top";
import { UserButton } from "@clerk/nextjs";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import axios from "axios";

export default function Add() {
  const [Type, setType] = useState("allando");

  const [ShowNextStep, setShowNextStep] = useState(false);

  const [ShowUploadButton, setShowUploadButton] = useState(true);
  const [Pic, setPic] = useState("https://via.placeholder.com/450");

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [RegisterLink, setRegisterLink] = useState("");

  const toast = useToast();

  async function saveProgram() {
    // type, image, title, description, contactName, contactEmail, contactPhone, registerLink
    toast({
      title: "Program mentése folyamatban...",
      description:
        "Kérlek várj... Kérlek ne nyomd meg többször a mentés gombot!",
      status: "info",
    });
    const resp = await axios.post(
      process.env.NEXT_PUBLIC_SERVER_URL + "/modifyData/addProgram",
      {
        type: Type,
        image: Pic,
        title: Name,
        description: Description,
        contactName: Contact,
        contactEmail: Email,
        contactPhone: Phone,
        registerLink: RegisterLink,
      }
    );

    if (resp.status === 200) {
      toast({
        title: "Sikeres mentés",
        description:
          "A program sikeresen elmentve. A mégse gombra kattintva visszatérhetsz a főoldalra.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sikertelen mentés",
        description:
          "A program mentése sikertelen. Kérlek próbáld újra később.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  function showUploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloudName: "nekunk-x",
        uploadPreset: "program_" + Type,
        sources: [
          "local",
          "url",
          "camera",
          "google_drive",
          "facebook",
          "instagram",
        ],
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#F5F5F5",
            sourceBg: "#FFFFFF",
            windowBorder: "#90a0b3",
            tabIcon: "#000000",
            inactiveTabIcon: "#69778A",
            menuIcons: "#000000",
            link: "#000000",
            action: "#000000",
            inProgress: "#000000",
            complete: "#000000",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true,
            },
          },
        },
      },
      async (err, result) => {
        if (!err) {
          console.log("Upload Widget event - ", result);
        }
        if (!err && result && result.event === "success") {
          setPic(result.info.url);
          setShowUploadButton(false);
        }
      }
    );
  }

  return (
    <>
      <Top name="Program hozzáadása"></Top>
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
        <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
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
        <Heading>Program hozzáadása</Heading>
        <Text mt="1" color={"gray.900"}>
          Amennyiben új program lehetőség érkezett, itt feltöltheted azt a
          weboldalunkra.
        </Text>
        <Box
          w={"100%"}
          bgColor="white"
          className="shadow-2xl shadow-red-900/60"
          rounded={20}
          overflow={"hidden"}
          mt={"5"}
          pl={"5"}
          pr="5"
          pt="5"
          pb="5"
        >
          <Heading fontSize={20} color="black">
            Program típusának kiválasztása
          </Heading>
          <Select
            value={Type}
            {...(ShowNextStep && { disabled: true })}
            onChange={(e) => {
              setType(e.target.value);
            }}
            w={"100%"}
            mt={"2"}
          >
            <option value="allando">Állandó program</option>
            <option value="idoszakos">Időszakos program</option>
            <option value="sajat">Saját program</option>
          </Select>
          <Box>
            <Button
              onClick={() => setShowNextStep(true)}
              {...(ShowNextStep && { disabled: true })}
              colorScheme={"whatsapp"}
              mt={2}
            >
              Tovább
            </Button>
            <Link href="/dashboard">
              <Button variant={"outline"} mt={2} ml={2}>
                Mégsem
              </Button>
            </Link>
          </Box>
        </Box>
        {ShowNextStep && (
          <Box
            w={"100%"}
            bgColor="white"
            className="shadow-2xl shadow-red-900/60"
            rounded={20}
            overflow={"hidden"}
            mt={"5"}
          >
            <div
              style={{ backgroundImage: `url('${Pic}')` }}
              className="pl-9 pr-9 pt-36 pb-36 bg-cover mt-0 flex flex-col justify-center items-center"
            >
              {ShowUploadButton && (
                <Button colorScheme="blue" onClick={showUploadWidget}>
                  Kép feltölése
                </Button>
              )}
            </div>
            <div className="p-4">
              <input
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className="text-3xl font-bold mb-2 w-full"
                placeholder="Program neve"
              ></input>
              <hr />
              <textarea
                placeholder="Progrm leírása"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 w-full h-40"
              ></textarea>
              <h1 className="text-lg font-semibold mt-2">Kapcsolat:</h1>
              <div className="flex justify-start gap-2 flex-wrap">
                <div className="bg-blue-900 text-white bg-opacity-40 p-2 flex justify-start gap-1 rounded-lg w-full lg:w-auto">
                  <ContactPageIcon />
                  <input
                    value={Contact}
                    className="bg-transparent border-none text-white placeholder:text-white w-full"
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Kapcsolattartó neve"
                  ></input>
                </div>
                <div className="bg-blue-900 text-white bg-opacity-40 p-2 flex justify-start gap-1 rounded-lg w-full lg:w-auto cursor-pointer">
                  <EmailIcon />
                  <input
                    value={Email}
                    className="bg-transparent border-none text-white placeholder:text-white w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Kapcsolattartó email címe"
                  ></input>
                </div>
                <div className="bg-blue-900 text-white bg-opacity-40 p-2 flex justify-start gap-1 rounded-lg w-full lg:w-auto cursor-pointer">
                  <PhoneIcon />
                  <input
                    value={Phone}
                    className="bg-transparent border-none text-white placeholder:text-white w-full"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Kapcsolattartó telefonszáma"
                  ></input>
                </div>
                <div className="bg-blue-900 text-white bg-opacity-40 p-2 flex justify-start gap-1 rounded-lg w-full lg:w-auto cursor-pointer">
                  <NoteAddIcon />
                  <input
                    value={RegisterLink}
                    className="bg-transparent border-none text-white placeholder:text-white w-full"
                    onChange={(e) => setRegisterLink(e.target.value)}
                    placeholder="Regisztrációs link"
                  ></input>
                </div>
              </div>
            </div>
          </Box>
        )}
        {Pic !== "https://via.placeholder.com/450" &&
          Name.length > 0 &&
          Description.length > 0 && (
            <Box
              w={"100%"}
              bgColor="white"
              className="shadow-2xl shadow-red-900/60"
              rounded={20}
              overflow={"hidden"}
              mt={"5"}
              pl={"5"}
              pr="5"
              pt="5"
              pb="5"
            >
              <Button onClick={saveProgram} colorScheme="whatsapp">
                Mentés
              </Button>
            </Box>
          )}
      </Flex>
    </>
  );
}
