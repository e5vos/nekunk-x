import React from "react";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Button, CloseButton } from "@chakra-ui/react";

export default function Program({ data, setShown }) {
  return (
    <div className="w-full fixed z-50 h-full top-0 flex justify-center items-start p-2 lg:p-0 overflow-x-auto">
      <div
        className="lg:w-1/2 relative overflow-hidden w-full bg-white border-2 shadow-lg rounded-lg mt-2 pt-0"
        style={{ minWidth: "50%" }}
      >
        <button
          className="absolute z-50 w-8 h-8 bg-white right-2 top-2 rounded-md flex justify-center items-center"
          onClick={() => setShown(false)}
        >
          <CloseIcon></CloseIcon>
        </button>
        <div
          style={{ backgroundImage: `url('${data.image}')` }}
          className="pl-9 pr-9 pt-36 pb-36 bg-cover mt-0"
        ></div>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <hr />
          <p className="mt-2">{data.description}</p>
          <h1 className="text-lg font-semibold mt-2">Kapcsolat:</h1>
          <div className="flex justify-start gap-2 flex-wrap">
            {data.contactName ? (
              <Button colorScheme={"blue"} gap={2}>
                <ContactPageIcon />
                <h1>{data.contactName}</h1>
              </Button>
            ) : (
              <></>
            )}
            {data.contactEmail ? (
              <Button
                colorScheme={"blue"}
                gap={2}
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
            {data.contactPhone ? (
              <Button
                colorScheme={"blue"}
                gap={2}
                onClick={() => (window.location = `tel:${data.contactPhone}`)}
              >
                <PhoneIcon />
                <h1>{data.contactPhone}</h1>
              </Button>
            ) : (
              <></>
            )}
            {data.registerLink ? (
              <Link href={data.registerLink}>
                <Button colorScheme={"blue"} gap={2}>
                  <NoteAddIcon />
                  <h1>{data.registerLink}</h1>
                </Button>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex justify-end mr-2 mb-2">
          <Button onClick={() => setShown(false)} colorScheme="blue">
            Bezárás
          </Button>
        </div>
      </div>
    </div>
  );
}
