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
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#ea8c8b",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  /*
    <ChakraProvider theme={theme}>
      <ClerkProvider {...pageProps}>
        <SignedIn>
          <WithUser>
            {(user) => {
              console.log(user.publicMetadata.role);
              if (user.publicMetadata.role === "admin") {
                return <Component {...pageProps} />;
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
          */

  return <Component {...pageProps} />;
}

export default MyApp;
