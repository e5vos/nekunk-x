import React, { useEffect } from "react";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

export default function Program({ data, setData }) {
  // useDisclosure for the modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (data) {
      console.log(data);
      onOpen();
    } else {
      onClose();
    }
  }, [data]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setData(null)} size={"3xl"}>
        <ModalOverlay backdropFilter={"blur(10px)"} />
        <ModalContent rounded={"2xl"}>
          <ModalHeader>{data?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={data?.image} alt="Kép a programról" borderRadius="xl" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data?.title}</Heading>
              <Text>{data?.description}</Text>
              <Flex
                minW={"full"}
                maxW={"full"}
                flexWrap={"wrap"}
                justifyContent={"start"}
                alignItems={"start"}
                gap={3}
              >
                {data?.contactName ? (
                  <Button
                    colorScheme={"purple"}
                    gap={2}
                    px={6}
                    rounded={"full"}
                    size={{ base: "sm", md: "md" }}
                    minW={"fit-content"}
                  >
                    <ContactPageIcon />
                    <h1>{data.contactName}</h1>
                  </Button>
                ) : (
                  <></>
                )}
                {data?.contactEmail ? (
                  <Button
                    colorScheme={"purple"}
                    gap={2}
                    px={6}
                    rounded={"full"}
                    minW={"fit-content"}
                    size={{ base: "sm", md: "md" }}
                    onClick={() =>
                      (window.location = `mailto:${data.contactEmail}`)
                    }
                  >
                    <EmailIcon />
                    <h1>{data.contactEmail}</h1>
                  </Button>
                ) : (
                  <></>
                )}
                {data?.contactPhone ? (
                  <Button
                    colorScheme={"purple"}
                    gap={2}
                    px={6}
                    rounded={"full"}
                    minW={"fit-content"}
                    size={{ base: "sm", md: "md" }}
                    onClick={() =>
                      (window.location = `tel:${data.contactPhone}`)
                    }
                  >
                    <PhoneIcon />
                    <h1>{data.contactPhone}</h1>
                  </Button>
                ) : (
                  <></>
                )}
                {data?.registerLink ? (
                  <Link href={data.registerLink}>
                    <Button
                      colorScheme={"purple"}
                      gap={2}
                      px={6}
                      rounded={"full"}
                      minW={"fit-content"}
                      size={{ base: "sm", md: "md" }}
                    >
                      <NoteAddIcon />
                      <h1>{data.registerLink}</h1>
                    </Button>
                  </Link>
                ) : (
                  <></>
                )}
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              onClick={() => setData(null)}
              px={8}
              rounded={"full"}
            >
              Bezárás
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
