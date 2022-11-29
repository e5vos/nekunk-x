import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Script from "next/script";
import Top from "../components/top";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Box,
  Flex,
  Heading,
  Select,
  Button,
  Spacer,
  Text,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Galeria() {
  const [ProgramName, setProgramName] = useState("");
  const [ShowNextStep, setShowNextStep] = useState(false);
  const [Pics, setPics] = useState([]);

  const { user } = useUser();

  async function savePhotos() {
    if (ProgramName == "") {
      alert("Nem adtál meg nevet a programnak!");
      return;
    }
    if (Pics.length == 0) {
      alert("Nem adtál meg képet!");
      return;
    }
    const toSend = { title: ProgramName, pictures: Pics };
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/modifyData/galeria`,
      toSend
    );
    if (resp.status == 200) {
      alert("Sikeres mentés!");
    } else {
      alert("Sikertelen mentés! Kérlek próbáld meg újra!");
    }
  }

  function showUploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloudName: "nekunk-x",
        uploadPreset: "galeria_upload",
        sources: [
          "local",
          "url",
          "camera",
          "google_drive",
          "facebook",
          "instagram",
        ],
        showCompletedButton: true,
        multiple: true,
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
        if (!err && result && result.event === "show-completed") {
          const data = [];
          await result.info.items.forEach((file) => {
            data.push(file.uploadInfo.url);
          });
          await setPics(data);
          console.log(Pics);
        }
      }
    );
  }
  return (
    <>
      <Top name="Képfeltöltés a galériába"></Top>
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
        <Heading>Képfeltöltés a galériába</Heading>
        <Text mt="1" color={"gray.200"}>
          Ezen az oldalon egy már megtartott programhoz képeket lehet
          feltölteni. Kérlek kövest a sémát!
        </Text>
        <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
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
          <h1 className="font-bold text-2xl">Program nevének megadása</h1>
          <p>
            Kérlek a következő sémát kövesd:{" "}
            <strong>program teljes neve - évszám. hónap</strong>
          </p>
          <Input
            placeholder="Program neve"
            className="rounded-md p-2 text-white mt-2"
            {...(ShowNextStep && { disabled: true })}
            value={ProgramName}
            onChange={(e) => {
              setProgramName(e.target.value);
            }}
          ></Input>
          <br />
          <Box mt={2}>
            <Button
              onClick={() => setShowNextStep(true)}
              {...(ShowNextStep && { disabled: true })}
              colorScheme="whatsapp"
            >
              Mentés és továbblépés
            </Button>
            <Link href="/">
              <Button ml="2" variant={"outline"} colorScheme="grey">
                Mégsem
              </Button>
            </Link>
          </Box>
        </Box>
        {ShowNextStep && (
          <Box
            w={"100%"}
            bgColor="rgba(0, 0, 0, 0.4)"
            rounded={20}
            pl={"5"}
            pr="5"
            pt="5"
            pb="5"
            mt={"1"}
          >
            <h1 className="font-bold text-2xl">Képek feltöltése</h1>
            <p>
              Amikor a képeket feltöltötted, a Done gomb előtt kattints a SHOW
              COMPLETED gombra. <strong>Ez menti el a képeket.</strong>
            </p>
            <Button mt="2" onClick={showUploadWidget} colorScheme="whatsapp">
              Felület megnyitása
            </Button>
          </Box>
        )}
        {Pics.length > 0 && (
          <Box
            w={"100%"}
            bgColor="rgba(0, 0, 0, 0.4)"
            rounded={20}
            pl={"5"}
            pr="5"
            pt="5"
            pb="5"
            mt={"1"}
          >
            <h1 className="font-bold text-2xl">Feltöltött képek</h1>
            <Flex direction="row" className="gap-2" flexWrap={"wrap"} mt={2}>
              {Pics.map((element, index) => (
                <Image
                  alt="feltoltott kep"
                  src={element}
                  className="rounded-xl"
                  key={index}
                  width={300}
                  height={150}
                ></Image>
              ))}
            </Flex>
            <Button mt="5" onClick={savePhotos} colorScheme="whatsapp">
              Mentés
            </Button>
          </Box>
        )}
      </Flex>
    </>
  );
}
