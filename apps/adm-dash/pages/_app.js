import "../styles/globals.css";
import WaitForGoodUser from "../components/waitforgood";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  WithUser,
} from "@clerk/nextjs";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ClerkProvider {...pageProps}>
        <SignedIn>
          <WithUser>
            {(user) => {
              console.log(user.publicMetadata.role);
              if (user.publicMetadata.role === "admin") {
                return (
                  <>
                    <div className="bg-yellow-400 h-auto w-full flex justify-center p-2 text-center flex-col items-center">
                      <p>
                        Fejlesztőink jelenleg még az oldal befejezésén
                        dolgoznak, így kisebb-nagyobb hibák előfordulhatnak. A
                        kellemetlenségekért előre is elnézést kérünk!
                      </p>
                      <Link href="https://status.nekunk-x.ga">
                        <p className="underline decoration-wavy">
                          Rendszerállapot
                        </p>
                      </Link>
                    </div>
                    <Component {...pageProps} />
                  </>
                );
              } else {
                return <WaitForGoodUser />;
              }
            }}
          </WithUser>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    </ChakraProvider>
  );
}

export default MyApp;
