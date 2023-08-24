import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../programok/listing";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

export default function ProgramScroll() {
  const [Options, setOptions] = useState([]);

  useEffect(() => {
    async function getDataAllando() {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + "/getData/all"
      );

      // reverse the array to show the latest posts first
      data.data.reverse();

      setOptions(data.data.slice(0, 3));
    }
    getDataAllando();
  }, []);

  return (
    <>
      <Box w={"full"} px={{ base: 8, lg: "24" }} mb={{ lg: -12 }} mt={12}>
        <Heading size={"lg"}>Legújabb programjaink:</Heading>
      </Box>
      <Listing Options={Options}></Listing>
      <Center>
        <Text fontStyle={"italic"} mt={{ lg: -12 }}>
          És ez még csak a kezdet...
        </Text>
      </Center>
    </>
  );
}
