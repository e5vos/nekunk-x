import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ClerkProvider,
  SignedIn,
  WithUser,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import WaitForGoodUser from "../components/waitforgood";
import BGOverlay from "../components/bg-overlay";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ClerkProvider {...pageProps}>
        <SignedIn>
          <WithUser>
            {(user) => {
              console.log("in withuser");
              console.log(user.publicMetadata.role);
              if (user.publicMetadata.role === "admin") {
                return (
                  <>
                    <BGOverlay />
                    <Component {...pageProps} />
                  </>
                );
              } else {
                return (
                  <>
                    <BGOverlay />
                    <WaitForGoodUser />
                  </>
                );
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
