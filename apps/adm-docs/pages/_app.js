import "nextra-theme-docs/style.css";
import {
  ClerkProvider,
  WithUser,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import WaitForGoodUser from "../components/waitforgood";
import Link from "next/link";

export default function Nextra({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <WithUser>
          {(user) => {
            console.log("in with user");
            if (user.publicMetadata.role === "admin") {
              return (
                <>
                  <div
                    style={{
                      backgroundColor: "orange",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                    }}
                  >
                    <p>
                      Fejlesztőink jelenleg még az oldal befejezésén dolgoznak,
                      így kisebb-nagyobb hibák előfordulhatnak. A
                      kellemetlenségekért előre is elnézést kérünk!
                    </p>
                    <Link href="https://status.nekunk-x.ga">
                      <p style={{ textDecoration: "underline" }}>
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
  );
}
