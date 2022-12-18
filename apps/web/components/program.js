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
        <CloseButton
          className="absolute top-2 right-2"
          onClick={() => setShown(false)}
          as={Button}
        ></CloseButton>
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
              <div className="bg-blue-900 text-white bg-opacity-70 p-2 flex justify-start gap-1 rounded-lg">
                <ContactPageIcon />
                <h1>{data.contactName}</h1>
              </div>
            ) : (
              <></>
            )}
            {data.contactEmail ? (
              <div
                className="bg-blue-900 text-white bg-opacity-70 p-2 flex justify-start gap-1 rounded-lg cursor-pointer"
                onClick={() =>
                  (window.location = `mailto:${data.contactEmail}`)
                }
              >
                <EmailIcon />
                <h1>{data.contactEmail}</h1>
              </div>
            ) : (
              <></>
            )}
            {data.contactPhone ? (
              <div
                className="bg-blue-900 text-white bg-opacity-70 p-2 flex justify-start gap-1 rounded-lg cursor-pointer"
                onClick={() => (window.location = `tel:${data.contactPhone}`)}
              >
                <PhoneIcon />
                <h1>{data.contactPhone}</h1>
              </div>
            ) : (
              <></>
            )}
            {data.registerLink ? (
              <Link href={data.registerLink}>
                <div className="bg-blue-900 text-white bg-opacity-70 p-2 flex justify-start gap-1 rounded-lg cursor-pointer">
                  <NoteAddIcon />
                  <h1>{data.registerLink}</h1>
                </div>
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
