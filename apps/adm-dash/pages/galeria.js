import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Script from "next/script";

export default function Galeria() {
  const [ProgramName, setProgramName] = useState("");
  const [Pics, setPics] = useState([]);

  async function savePhotos() {
    if (ProgramName == "") {
      alert("Nem adtál meg nevet a programnak!");
      return;
    }
    if (Pics.length == 0) {
      alert("Nem adtál meg képet!");
      return;
    }
    const toSend = { programName: ProgramName, pics: Pics };
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/modifyData/galeria`,
      toSend
    );
    if (resp.status == 200) {
      alert("Sikeres mentés!");
    } else {
      alert("Sikertelen mentés! Kérlek próbáld meg újra!");
    }
  }

  function showUploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloudName: "nekunk-x",
        uploadPreset: "galeria_upload",
        sources: [
          "local",
          "url",
          "camera",
          "google_drive",
          "facebook",
          "instagram",
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: false,
        multiple: true,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#F5F5F5",
            sourceBg: "#FFFFFF",
            windowBorder: "#90a0b3",
            tabIcon: "#000000",
            inactiveTabIcon: "#69778A",
            menuIcons: "#000000",
            link: "#000000",
            action: "#000000",
            inProgress: "#000000",
            complete: "#000000",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true,
            },
          },
        },
      },
      (err, info) => {
        if (!err) {
          console.log("Upload Widget event - ", info);
        }
        if (!err && info.event === "success") {
          const currentPics = [...Pics];
          currentPics.push(info.info.url);
          setPics(currentPics);
        }
      }
    );
  }
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-white gap-2">
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
      <h1 className="font-bold text-2xl">Képek feltöltése a galériába</h1>
      <input
        type={"text"}
        placeholder="Program neve"
        className="rounded-md p-2 text-black"
        value={ProgramName}
        onChange={(e) => {
          setProgramName(e.target.value);
        }}
      ></input>
      {ProgramName.length > 0 && (
        <button
          className="p-2 bg-white rounded-md text-black"
          onClick={showUploadWidget}
        >
          Képek feltöltése
        </button>
      )}
      {Pics.map((element, index) => (
        <Image
          alt="feltoltott kep"
          src={element}
          key={index}
          width={300}
          height={150}
        ></Image>
      ))}

      {Pics.length > 0 && ProgramName.length > 0 && (
        <button
          onClick={savePhotos}
          className="p-2 rounded-md bg-white text-black font-bold"
        >
          Mentés
        </button>
      )}
    </div>
  );
}
