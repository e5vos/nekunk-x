import React, { useState } from "react";
import Image from "next/image";
import Article from "./arcticle";
import Diversity3Icon from "@mui/icons-material/Diversity3Rounded";
import AddReactionIcon from "@mui/icons-material/AddReactionRounded";
import AttachFileIcon from "@mui/icons-material/AttachFileRounded";
import { Button } from "@chakra-ui/react";

export default function Chooser() {
  const [Selected, setSelected] = useState(0);
  return (
    <>
      {Selected !== 0 ? (
        <Article Selected={Selected} setSelected={setSelected}></Article>
      ) : (
        <></>
      )}
      <div className="w-full h-auto lg:pt-10 lg:pb-72 pb-10 flex flex-col lg:flex-row justify-start items-center lg:justify-center gap-4">
        <Button onClick={() => setSelected(1)} colorScheme="blue" gap={2}>
          <Diversity3Icon />
          <h1 className="font-semibold">Ajánlott programok, lehetőségek</h1>
        </Button>
        <Button onClick={() => setSelected(2)} colorScheme="blue" gap={2}>
          <AddReactionIcon />
          <h1 className="font-semibold">Általunk szervezett lehetőségek</h1>
        </Button>
        <Button onClick={() => setSelected(3)} colorScheme="blue" gap={2}>
          <AttachFileIcon />
          <h1 className="font-semibold">Szerződéskötés</h1>
        </Button>
      </div>
    </>
  );
}
