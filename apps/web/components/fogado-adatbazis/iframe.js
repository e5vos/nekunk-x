import React from "react";
import Iframe from "react-iframe";
import { Box, Flex } from "@chakra-ui/react";

export default function IframeComp() {
  return (
    <Flex width={"90%"} bgColor={"purple.100"} p={4} rounded={"2xl"} mb={4}>
      <Iframe
        url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSL5RmYsSMypMpwq4M8FMYXN2vmwYrKmw9PTGu4-Mqs1gBntbt6QFN7VMJP7leOJp3D2glMnaUht0be/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=a1%3Ae333"
        width="100%"
        height="700px"
        styles={{ borderRadius: "10px" }}
      ></Iframe>
    </Flex>
  );
}
