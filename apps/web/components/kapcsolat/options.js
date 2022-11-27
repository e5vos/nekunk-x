import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function Options() {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-2 p-2 mb-60">
      <Link href="https://www.facebook.com/nekunkx/">
        <button className="w-auto cursor-pointer bg-blue-900 bg-opacity-50 p-2 pl-8 pr-8 rounded-lg flex justify-center gap-2">
          <FacebookIcon></FacebookIcon>
          https://www.facebook.com/nekunkx/
        </button>
      </Link>
      <Link href="https://www.instagram.com/nekunk_x/">
        <button className="w-auto cursor-pointer bg-blue-900 bg-opacity-50 p-2 pl-8 pr-8 rounded-lg flex justify-center gap-2">
          <InstagramIcon></InstagramIcon>
          https://www.instagram.com/nekunk_x/
        </button>
      </Link>
      <Link href="mailto:iksz.program@e5vos.hu">
        <button className="w-auto cursor-pointer bg-blue-900 bg-opacity-50 p-2 pl-8 pr-8 rounded-lg flex justify-center gap-2">
          <EmailIcon></EmailIcon>
          iksz.program@e5vos.hu
        </button>
      </Link>
    </div>
  );
}
