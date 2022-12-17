import {
  Box,
  Button,
  CloseButton,
  Flex,
  Square,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/InfoRounded";
import Link from "next/link";

export const PopUpBanner = () => {
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      <Box
        width="90vw"
        left={"5vw"}
        right={"5vw"}
        position="fixed"
        bottom={4}
        shadow={"2xl"}
        rounded={20}
        bgColor="blue.700"
        color="white"
        visibility={isShown ? "visible" : "hidden"}
        zIndex={50}
      >
        <Flex
          pl={2}
          pr={4}
          py={2}
          justify="center"
          className="lg:flex-row flex-col"
          gap="2"
          h={"100%"}
          align="center"
        >
          <Square
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
            size="12"
            bgColor={"blue.800"}
            borderRadius="xl"
          >
            <InfoIcon></InfoIcon>
          </Square>
          <Text fontWeight="bold">A weboldal még fejlesztés alatt áll.</Text>
          <Text color="muted">
            Elképzelhető, hogy egyes funkciók nem lesznek elérhetők.
          </Text>
          <Spacer />
          <Flex gap={1}>
            <Link href="https://status.nekunk-x.ga">
              <Button colorScheme={"blackAlpha"}>További információk</Button>
            </Link>
            <CloseButton
              onClick={() => setIsShown(false)}
              as={Button}
              height={"40px"}
              colorScheme={"blackAlpha"}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
