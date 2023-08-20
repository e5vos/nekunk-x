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
