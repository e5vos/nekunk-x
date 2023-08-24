import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import {
  Button,
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Options() {
  return (
    <Flex w={"full"} justifyContent={"center"} p={4} gap={4} flexWrap={"wrap"}>
      <Card maxW="sm" rounded={"2xl"}>
        <CardBody>
          <Image
            src="/facebook.png"
            alt="Facebook profil kép"
            borderRadius="xl"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Facebook</Heading>
            <Text>
              Értesülj a legfrissebb hírekről, programokról, eseményekről!
              Kövesd a Nekünk X Facebook oldalát és legyél mindig naprakész a
              legújabb önkéntes lehetőségekről!
            </Text>
          </Stack>
        </CardBody>
        <Divider color={"gray.200"} />
        <CardFooter>
          <ButtonGroup spacing="2" ml={"auto"}>
            <Link href="https://www.facebook.com/nekunkx/">
              <Button
                variant="solid"
                colorScheme="facebook"
                px={8}
                rounded={"full"}
              >
                Megnyitás →
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm" rounded={"2xl"}>
        <CardBody>
          <Image
            src="/instagram.png"
            alt="Instagram profil kép"
            borderRadius="xl"
            border={"1px solid lightgray"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Instagram</Heading>
            <Text>
              Érdekelnek a képek, videók? Szeretnéd látni, milyen a csapat munka
              közben? Akkor kövesd az Nekünk X Instagram oldalát!
            </Text>
          </Stack>
        </CardBody>
        <Divider color={"gray.200"} />
        <CardFooter>
          <ButtonGroup spacing="2" ml={"auto"}>
            <Link href="https://instagram.com/nekunk_x">
              <Button
                variant="solid"
                colorScheme="pink"
                px={8}
                rounded={"full"}
              >
                Megnyitás →
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm" rounded={"2xl"}>
        <CardBody>
          <Image
            src="/email.png"
            alt="Egy kép egy levélről"
            borderRadius="xl"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Email</Heading>
            <Text>
              Sürgős kérdésed van? Szeretnél kapcsolatba lépni velünk? Írj
              emailt az iksz.program@e5vos.hu címre, mi pedig igyekszünk mielőbb
              válaszolni!
            </Text>
          </Stack>
        </CardBody>
        <Divider color={"gray.200"} />
        <CardFooter>
          <ButtonGroup spacing="2" ml={"auto"}>
            <Link href="mailto:iksz.program@e5vos.hu">
              <Button variant="solid" colorScheme="red" px={8} rounded={"full"}>
                Megnyitás →
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
}
