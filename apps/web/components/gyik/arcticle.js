import React, { useState, useEffect } from "react";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export default function Article({ Selected, setSelected }) {
  const [QAS, setQAS] = useState([]);
  const [Title, setTitle] = useState("Betöltés...");

  useEffect(() => {
    const data = [];
    console.log(Selected);
    if (Selected === 1) {
      setTitle("Ajánlott programok, lehetőségek");
      data.push({
        q: "Részt vehetek ha 7. vagy 8. osztályba járok?",
        a: "Sajnos az ajánlott lehetőségeken csak 9. osztályosként vehetsz részt, viszont az általunk szervezett programokon szeretettel várunk.",
      });
      data.push({
        q: "Jelentkezhetek az ajánlott programokra akkor is, ha nem Eötvös diák vagyok?",
        a: "Az ajánlott programjaink, lehetőségeink mindenki számára nyitottak.",
      });
      data.push({
        q: "Hogyan tudok jelentkezni?",
        a: "A meghirdetett esemény szövegében feltűntetjük a kapcsolattartó elérhetőségét, azon a kontakton keresztül tudsz jelentkezni egyénileg.",
      });
      data.push({
        q: "Hogyan működik az ajánlott programoknál az IKSz naplómba való elszámolás?",
        a: "Amikor ilyen programra mész, először ellenőrizd, hogy van-e már szerződése az iskolának az adott szervezettel. Ezt itt tudod megtenni. Amennyiben még nincs, akkor szerződést kell kötni a szervezettel, erről alább olvashatsz. Ha megvan a szerződés, akkor a program helyszínén biztosítva lesz neked az órák elkönyvelése, lepecsételése. Ne felejtsd el elvinni a kék könyved! Ha véletlen mégis otthon hagynád, akkor sajnos neked kell elintézni, hogy be legyenek írva a teljesített óráid!",
      });
    }

    if (Selected === 2) {
      setTitle("Általunk szervezett programok");
      data.push({
        q: "Jöhetek akkor is, ha hetedik vagy nyolcadik osztályos vagyok? ",
        a: "Igen, a teljesített óráidat online elkönyveljük neked és amikor 9. osztályba lépsz beírjuk a kék könyvedbe.",
      });
      data.push({
        q: "Hol és hogyan tudok jelentkezni? ",
        a: "A Nekünk X programjainál nem mindig szükséges előzetes jelentkezés, amennyiben igen, akkor itt, a weboldalunkon, a Facebook és Instagram oldalunkon is posztoljuk a jelentkezési linket. ",
      });
      data.push({
        q: "Részt vehetek a barátaimmal együtt is?",
        a: "Persze, az álltalunk szervezett programokon álltalában nagyobb baráti társaságok is részt tudnak venni, sokszor akár 15-20 fő, vagy több is jöhet.",
      });
      data.push({
        q: "Résztvehetek nem Eötvösös diákként is?",
        a: "Amennyiben az általunk szervezett program egy külsős szervezetnél történik, akkor várunk sok szeretettel, viszont, ha az esemény az iskolában kerül megrendezésre, akkor csak Eötvösös diákok vehetnek részt.",
      });
      data.push({
        q: "Hol tudom átvenni a program után a közösségi órás naplómat? ",
        a: "Abban az esetben, ha az iskolában volt az esemény, akkor amikor a program után mi beírtuk, és lepecsételtük az önkéntes óráitokat, az összes kék könyvet a titkárságon leadjuk, és emailen értesítünk is titeket. Ha külsős szervezettel szerveztünk eseményt, akkor a program helyszínén pecsételik majd le nektek.",
      });
      data.push({
        q: "Nem tudtam elvinni a közösségi órás naplómat a programra, mi a teendő? ",
        a: "A mi programjaink esetében ne aggódj, csak egy emailt kell írnod az iksz.program@e5vos.hu email címre, és pár napon belül értesítünk, hogy mi a teendő.",
      });
    }

    if (Selected === 3) {
      setTitle("Szerződéskötés");
      data.push({
        q: "Mikor kell szerződést kötnöm a fogadószervezettel?",
        a: "Ha találtál egy olyan fogadó szervezetet, ahol szeretnél önkéntes munkát végezni, szerződést kell kötnöd, abban az esetben, ha az iskola még nem szerződött a szervezettel. Mielőtt ezt megtennéd kérlek ellenőrizd a fogadószervezetek listáját (ezt itt oldalunkon megteheted), akikkel már kötött az iskola szerződést.",
      });
      data.push({
        q: "Olyan szervezetnél szeretnék önkénteskedni, akivel még nincs szerződése az iskolának, mit tegyek? ",
        a: "Olvasd el Szerződéskötés oldalunkon a tudnivalókat. Itt egy részletes leírást kaphatsz arról, hogy hogyan tudsz szerződést kötni egy olyan szervezettel, akinek még nincs szerződése az iskolának.",
      });
    }

    setQAS(data);
  }, []);

  return (
    <div className="w-full fixed z-50 h-full top-0 flex justify-center items-start p-2 lg:p-0 overflow-x-auto">
      <div
        className="lg:w-1/2 relative overflow-hidden w-full bg-white border-2 shadow-lg rounded-lg mt-2 pt-0"
        style={{ minWidth: "50%" }}
      >
        <button
          onClick={() => setSelected(0)}
          className="absolute z-50 w-8 h-8 bg-white right-2 top-2 rounded-md flex justify-center items-center"
        >
          <CloseIcon></CloseIcon>
        </button>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{Title}</h1>
          <hr />
          {QAS.length > 0 &&
            QAS.map((item, index) => (
              <div key={index} className="mt-4">
                <h2 className="text-xl font-bold">{item.q}</h2>
                <p className="text-lg">{item.a}</p>
              </div>
            ))}
        </div>
        <div className="flex justify-end mr-2 mb-2">
          <button
            onClick={() => setSelected(0)}
            className="border font-poppins text-gray-500 border-gray-400 bg-opacity-40 p-2 flex text-sm justify-center gap-1 rounded-lg cursor-pointer pr-8 pl-8"
          >
            Bezárás
          </button>
        </div>
      </div>
    </div>
  );
}
