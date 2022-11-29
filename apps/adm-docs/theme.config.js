import Image from "next/image";

export default {
  primaryHue: 13,
  docsRepositoryBase: "https://github.com/barnagoz/nekunkx-docs/blob/main",
  titleSuffix: " – Admin Dokumentáció",
  logo: (
    <>
      <Image
        src="/../public/nxr2-100.png"
        alt="Nekünk X"
        width={70}
        height={54}
      />
      <span
        className="text-gray-600 font-normal hidden md:inline bg-blue-200"
        style={{ marginLeft: "12px" }}
      >
        Nekünk X Admin Dokumentáció
      </span>
    </>
  ),
  head: (
    <>
      <title>Nekünk X Adminisztrátori Dokumentáció</title>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="apple-mobile-web-app-title" content="NX - Dokumentáció" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: "Oldal szerkesztése GitHubon",
  footerText: (
    <>Minden jog fenntartva {new Date().getFullYear()} © Gőz Barnabás.</>
  ),
  unstable_faviconGlyph: "👋",
};
