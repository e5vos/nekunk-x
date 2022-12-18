import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function Options() {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-2 p-2 mb-60">
      <Link href="https://www.facebook.com/nekunkx/">
        <Button colorScheme={"blue"} gap={2}>
          <FacebookIcon></FacebookIcon>
          https://www.facebook.com/nekunkx/
        </Button>
      </Link>
      <Link href="https://www.instagram.com/nekunk_x/">
        <Button colorScheme={"blue"} gap={2}>
          <InstagramIcon></InstagramIcon>
          https://www.instagram.com/nekunk_x/
        </Button>
      </Link>
      <Link href="mailto:iksz.program@e5vos.hu">
        <Button colorScheme={"blue"} gap={2}>
          <EmailIcon></EmailIcon>
          iksz.program@e5vos.hu
        </Button>
      </Link>
    </div>
  );
}
