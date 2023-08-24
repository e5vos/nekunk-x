import React from "react";
import Link from "next/link";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";

export default function HomeBanner() {
  return (
    <Grid
      w={"full"}
      bg={"black"}
      py={{ base: 8, lg: 20 }}
      px={{ base: 8, lg: 16 }}
      mt={16}
      templateColumns={"repeat(5,1fr)"}
    >
      <GridItem colSpan={{ sm: 5, md: 3 }}>
        <Heading color={"white"} fontSize={"3xl"}>
          <Highlight
            query={"közösségi óra"}
            styles={{
              background:
                "linear-gradient(90deg, rgba(94,208,242,1) 0%, rgba(132,27,255,1) 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Fedezd fel közösségi óra szerzési lehetőségeinket!
          </Highlight>
        </Heading>
        <Text color={"white"} mt={2} pr={{ lg: 24 }}>
          Hozd magaddal a barátaidat és élvezzétek együtt a közösségi szolgálat
          adrenalinját! Éljétek át a közösség adta fantasztikus élményeket
          együtt!
        </Text>
        <Link href="/programok">
          <Button
            bgGradient="linear-gradient(90deg, rgba(94,208,242,1) 0%, rgba(132,27,255,1) 100%)"
            _hover={{
              bgGradient:
                "linear-gradient(90deg, rgba(94,208,242,1) 0%, rgba(132,27,255,1) 100%)",
            }}
            color={"white"}
            px={12}
            rounded={"full"}
            mt={4}
            size={"lg"}
          >
            Érdekel →
          </Button>
        </Link>
      </GridItem>
    </Grid>
  );
}
