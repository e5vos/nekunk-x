import "nextra-theme-docs/style.css";
import {
  ClerkProvider,
  WithUser,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import WaitForGoodUser from "../components/waitforgood";

export default function Nextra({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <WithUser>
          {(user) => {
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
  );
}
