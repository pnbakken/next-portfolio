import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeaderBanner from "../components/header-banner";
import OriginalFooter from "../components/original-footer";
import OriginalMain from "../components/original-main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Pål Nicholas Bakken" />
        <meta
          name="description"
          content="Frontend developer focusing on responisve design and code that works."
        />
        <meta
          name="keywords"
          content="frontend, webdev, html, css, javascript, and so on and so on"
        />
        <title>Pål N. Bakken | Portfolio</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon/favicon-16x16.png"
        />

        <link rel="manifest" href="/icon/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icon/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />

        <link rel="shortcut icon" href="/icon/favicon/favicon.ico" />

        <meta
          name="msapplication-config"
          content="/icon/favicon/browserconfig.xml"
        />

        <meta name="theme-color" content="#ffffff" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />

        {/* <link rel="stylesheet" href="./css/style.css" type="text/css" /> */}
      </Head>

      <HeaderBanner />
      <OriginalMain />
      <OriginalFooter />
    </div>
  );
};

export default Home;
