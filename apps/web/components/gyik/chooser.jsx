import React, { useState } from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3Rounded";
import AddReactionIcon from "@mui/icons-material/AddReactionRounded";
import AttachFileIcon from "@mui/icons-material/AttachFileRounded";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Spacer,
  Flex,
  Stack,
  StackItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Chooser() {
  return (
    <Flex w={"full"} justify={"center"} pb="180">
      <Accordion
        bgColor={"purple.100"}
        p={4}
        width={{ lg: "75%", base: "90%" }}
        borderColor={"purple.500"}
        rounded={"xl"}
        allowToggle
      >
        <AccordionItem border={"none"} my={4}>
          <AccordionButton
            gap={3}
            border={"1px solid"}
            borderColor={"purple.500"}
            rounded={"full"}
          >
            <Diversity3Icon />
            Ajánlott programok, lehetőségek
            <Spacer />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack gap={4}>
              <StackItem>
                <Heading size={"sm"}>
                  Részt vehetek ha 7. vagy 8. osztályba járok?
                </Heading>
                <Text>
                  Sajnos az ajánlott lehetőségeken csak 9. osztályosként vehetsz
                  részt, viszont az általunk szervezett programokon szeretettel
                  várunk.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>
                  Jelentkezhetek az ajánlott programokra akkor is, ha nem Eötvös
                  diák vagyok?
                </Heading>
                <Text>
                  Az ajánlott programjaink, lehetőségeink mindenki számára
                  nyitottak.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>Hogyan tudok jelentkezni?</Heading>
                <Text>
                  A meghirdetett esemény szövegében feltűntetjük a
                  kapcsolattartó elérhetőségét, azon a kontakton keresztül tudsz
                  jelentkezni egyénileg.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>
                  Hogyan működik az ajánlott programoknál az IKSz naplómba való
                  elszámolás?
                </Heading>
                <Text>
                  Amikor ilyen programra mész, először ellenőrizd, hogy van-e
                  már szerződése az iskolának az adott szervezettel. Ezt itt
                  tudod megtenni. Amennyiben még nincs, akkor szerződést kell
                  kötni a szervezettel, erről alább olvashatsz. Ha megvan a
                  szerződés, akkor a program helyszínén biztosítva lesz neked az
                  órák elkönyvelése, lepecsételése. Ne felejtsd el elvinni a kék
                  könyved! Ha véletlen mégis otthon hagynád, akkor sajnos neked
                  kell elintézni, hogy be legyenek írva a teljesített óráid!
                </Text>
              </StackItem>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={"none"} my={4}>
          <AccordionButton
            gap={3}
            border={"1px solid"}
            borderColor={"purple.500"}
            rounded={"full"}
          >
            <AddReactionIcon />
            Általunk szervezett lehetőségek
            <Spacer />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack gap={4}>
              <StackItem>
                <Heading size={"sm"}>
                  Részt vehetek ha 7. vagy 8. osztályba járok?
                </Heading>
                <Text>
                  Igen, a teljesített óráidat online elkönyveljük neked és
                  amikor 9. osztályba lépsz beírjuk a kék könyvedbe.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>Hol és hogyan tudok jelentkezni?</Heading>
                <Text>
                  A Nekünk X programjainál nem mindig szükséges előzetes
                  jelentkezés, amennyiben igen, akkor itt, a weboldalunkon, a
                  Facebook és Instagram oldalunkon is posztoljuk a jelentkezési
                  linket.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>
                  Részt vehetek a barátaimmal együtt is?
                </Heading>
                <Text>
                  Persze, az általunk szervezett programokon álltalában nagyobb
                  baráti társaságok is részt tudnak venni, sokszor akár 15-20
                  fő, vagy több is jöhet.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>
                  Részt vehetek nem Eötvösös diákként is?
                </Heading>
                <Text>
                  Amennyiben az általunk szervezett program egy külsős
                  szervezetnél történik, akkor várunk sok szeretettel, viszont,
                  ha az esemény az iskolában kerül megrendezésre, akkor csak
                  Eötvösös diákok vehetnek részt.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>
                  Hol tudom átvenni a program után a közösségi órás naplómat?
                </Heading>
                <Text>
                  Abban az esetben, ha az iskolában volt az esemény, akkor
                  amikor a program után mi beírtuk, és lepecsételtük az önkéntes
                  óráitokat, az összes kék könyvet a titkárságon leadjuk, és
                  emailen értesítünk is titeket. Ha külsős szervezettel
                  szerveztünk eseményt, akkor a program helyszínén pecsételik
                  majd le nektek.
                </Text>
              </StackItem>{" "}
              <StackItem>
                <Heading size={"sm"}>
                  Nem tudtam elvinni a közösségi órás naplómat a programra, mi a
                  teendő?
                </Heading>
                <Text>
                  A mi programjaink esetében ne aggódj, csak egy emailt kell
                  írnod az iksz.program@e5vos.hu email címre, és pár napon belül
                  értesítünk, hogy mi a teendő.
                </Text>
              </StackItem>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={"none"} my={4}>
          <AccordionButton
            gap={3}
            border={"1px solid"}
            borderColor={"purple.500"}
            rounded={"full"}
          >
            <AttachFileIcon />
            Szerződéskötés
            <Spacer />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack gap={4}>
              <StackItem>
                <Heading size={"sm"}>
                  Mikor kell szerződést kötnöm a fogadószervezettel?
                </Heading>
                <Text>
                  Ha találtál egy olyan fogadó szervezetet, ahol szeretnél
                  önkéntes munkát végezni, szerződést kell kötnöd, abban az
                  esetben, ha az iskola még nem szerződött a szervezettel.
                  Mielőtt ezt megtennéd kérlek ellenőrizd a fogadószervezetek
                  listáját (ezt itt oldalunkon megteheted), akikkel már kötött
                  az iskola szerződést.
                </Text>
              </StackItem>
              <StackItem>
                <Heading size={"sm"}>
                  Olyan szervezetnél szeretnék önkénteskedni, akivel még nincs
                  szerződése az iskolának, mit tegyek?
                </Heading>
                <Text>
                  Olvasd el Szerződéskötés oldalunkon a tudnivalókat. Itt egy
                  részletes leírást kaphatsz arról, hogy hogyan tudsz szerződést
                  kötni egy olyan szervezettel, akinek még nincs szerződése az
                  iskolának.
                </Text>
              </StackItem>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
