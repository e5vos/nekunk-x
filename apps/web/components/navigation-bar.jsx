import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../public/notext.jpg";

export default function NavigationBar({ pageTitle, currentPage }) {
  const [ShownOther, setShownOther] = useState(false);
  const [ShownOptions, setShownOptions] = useState(false);
  const [ShownMobile, setShownMobile] = useState(false);

  const newPageTitle = pageTitle + " | Nekünk X";

  return (
    <>
      <Head>
        <title>{newPageTitle}</title>
      </Head>
      <div className="fixed top-0 z-40 bg-white font-poppins w-full h-auto">
        <div className="w-full h-auto border-b-2 pr-4 pl-4 pb-0 flex justify-between bg-white font-poppins">
          <div className="flex justify-start items-center gap-4">
            <Link href="/">
              <Image
                className="cursor-pointer"
                height="50"
                width="50"
                src={Logo}
                alt="Nekünk X logó"
              />
            </Link>
          </div>
          <h2 className="lg:hidden font-poppins mt-auto mb-auto text-center">
            {pageTitle}
          </h2>
          <button
            onClick={() => setShownMobile(!ShownMobile)}
            className="flex items-center flex-col justify-center relative lg:hidden bg-black text-white mt-2 mb-2 pl-3 pr-3 rounded-full"
          >
            {ShownMobile ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
          </button>
          <div className="lg:flex min-h-full justify-end items-center gap-4 hidden">
            <Link href="/">
              <p
                className={
                  currentPage == "kezdolap"
                    ? "font-semibold tracking-wide"
                    : "tracking-wide"
                }
              >
                Kezdőlap
              </p>
            </Link>
            <div>
              <button onClick={() => setShownOptions(!ShownOptions)}>
                Lehetőségeink
              </button>
              {ShownOptions && (
                <div className="absolute z-20 bg-white p-4 rounded-b-md border-2 border-t-0 flex flex-col gap-2">
                  <Link href="/allando">
                    <p
                      className={
                        currentPage == "allando"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Állandó lehetőségek
                    </p>
                  </Link>
                  <Link href="/idoszakos">
                    <p
                      className={
                        currentPage == "idoszakos"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Időszakos lehetőségek
                    </p>
                  </Link>
                  <Link href="/sajat">
                    <p
                      className={
                        currentPage == "sajat"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Általunk szervezett lehetőségek
                    </p>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/rolunk">
              <p
                className={
                  currentPage == "rolunk"
                    ? "font-semibold tracking-wide"
                    : "tracking-wide"
                }
              >
                Rólunk
              </p>
            </Link>
            <div>
              <button onClick={() => setShownOther(!ShownOther)}>
                Egyéb információk
              </button>
              {ShownOther && (
                <div className="absolute z-20 bg-white p-4 rounded-b-md border-2 border-t-0  flex flex-col gap-2">
                  <Link href="https://978bfb97.sibforms.com/serve/MUIEAJjbE6qw0F1slYAE5dQaS909l43W0OjJktRYa6ESaOOQPfIOrwy2Qf3wa9n8IzYBfjfoA7-1XRTj0IIFCmYrle10vOxbZbcwKcriuVPx-PMQNltSZ8FEXxVfrgmHz9cq5hONQRlXAWOVrteef-NCn9kkqlRLaukGPppwZNh3sHAAGiNCW3WV7DgKF6_K_OpSg5AcfYrOjWhk">
                    <p
                      className={
                        currentPage == "hirlevel"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Hírlevél
                    </p>
                  </Link>
                  <Link href="/galeria">
                    <p
                      className={
                        currentPage == "galeria"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Galéria
                    </p>
                  </Link>
                  <Link href="/gyik">
                    <p
                      className={
                        currentPage == "gyik"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Gyakran ismételt kérdések
                    </p>
                  </Link>
                  <Link href="/szerzodeskotes-menete">
                    <p
                      className={
                        currentPage == "szerzodeskotes-menete"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Szerződéskötés menete
                    </p>
                  </Link>
                  <Link href="/fogado-adatbazis">
                    <p
                      className={
                        currentPage == "fogado-adatbazis"
                          ? "font-semibold tracking-wide"
                          : "tracking-wide"
                      }
                    >
                      Szervezetek adatbázisa
                    </p>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/kapcsolat">
              <p
                className={
                  currentPage == "kapcsolat"
                    ? "font-semibold tracking-wide"
                    : "tracking-wide"
                }
              >
                Kapcsolat
              </p>
            </Link>
          </div>
        </div>
        {ShownMobile && (
          <div className="w-full min-h-full bg-white flex flex-col justify-center items-center gap-4 text-xl z-30 fixed">
            <Link href="/">
              <p
                style={currentPage == "kezdolap" ? { fontWeight: "bold" } : {}}
                className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
              >
                Kezdőlap
              </p>
            </Link>
            <div className="bg-gray-100 flex flex-col items-center rounded-md">
              <button
                style={ShownOptions ? { fontWeight: "bold" } : {}}
                className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                onClick={() => setShownOptions(!ShownOptions)}
              >
                Lehetőségeink
              </button>
              {ShownOptions && (
                <>
                  <Link href="/allando">
                    <p
                      style={
                        currentPage == "allando" ? { fontWeight: "bold" } : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Állandó lehetőségek
                    </p>
                  </Link>
                  <Link href="/idoszakos">
                    <p
                      style={
                        currentPage == "idoszakos" ? { fontWeight: "bold" } : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Időszakos lehetőségek
                    </p>
                  </Link>
                  <Link href="/sajat">
                    <p
                      style={
                        currentPage == "sajat" ? { fontWeight: "bold" } : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Általunk szervezett lehetőségek
                    </p>
                  </Link>
                </>
              )}
            </div>

            <Link href="/rolunk">
              <p
                style={currentPage == "rolunk" ? { fontWeight: "bold" } : {}}
                className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
              >
                Rólunk
              </p>
            </Link>
            <div className="bg-gray-100 flex flex-col items-center rounded-md">
              <button
                style={ShownOther ? { fontWeight: "bold" } : {}}
                className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                onClick={() => setShownOther(!ShownOther)}
              >
                Egyéb információk
              </button>
              {ShownOther && (
                <>
                  <Link href="https://978bfb97.sibforms.com/serve/MUIEAJjbE6qw0F1slYAE5dQaS909l43W0OjJktRYa6ESaOOQPfIOrwy2Qf3wa9n8IzYBfjfoA7-1XRTj0IIFCmYrle10vOxbZbcwKcriuVPx-PMQNltSZ8FEXxVfrgmHz9cq5hONQRlXAWOVrteef-NCn9kkqlRLaukGPppwZNh3sHAAGiNCW3WV7DgKF6_K_OpSg5AcfYrOjWhk">
                    <p
                      style={
                        currentPage == "hirlevel" ? { fontWeight: "bold" } : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Hírlevél
                    </p>
                  </Link>
                  <Link href="/galeria">
                    <p
                      style={
                        currentPage == "galeria" ? { fontWeight: "bold" } : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Galéria
                    </p>
                  </Link>
                  <Link href="/gyik">
                    <p
                      style={
                        currentPage == "gyik" ? { fontWeight: "bold" } : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Gyakran ismételt kérdések
                    </p>
                  </Link>
                  <Link href="/fogado-adatbazis">
                    <p
                      style={
                        currentPage == "fogado-adatbazis"
                          ? { fontWeight: "bold" }
                          : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Szervezetek adatbázisa
                    </p>
                  </Link>
                  <Link href="/szerzodeskotes-menete">
                    <p
                      style={
                        currentPage == "szerzodeskotes-menete"
                          ? { fontWeight: "bold" }
                          : {}
                      }
                      className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
                    >
                      Szerződéskötés menete
                    </p>
                  </Link>
                </>
              )}
            </div>
            <Link href="/kapcsolat">
              <p
                style={currentPage == "kapcsolat" ? { fontWeight: "bold" } : {}}
                className="tracking-wide bg-gray-100 p-2 pl-4 pr-4 rounded-md font-poppins text-lg"
              >
                Kapcsolat
              </p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
