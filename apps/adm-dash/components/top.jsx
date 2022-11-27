import React from "react";
import Head from "next/head";

export default function Top({ name }) {
  return (
    <>
      <Head>
        <title>{name} - Nekünk X Admin</title>
      </Head>
    </>
  );
}
