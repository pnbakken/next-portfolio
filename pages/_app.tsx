import "../styles/sass/style.scss";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import Head from "next/head";

const mont = Montserrat({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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

        {/* <link rel="stylesheet" href="./css/style.css" type="text/css" /> */}
      </Head>
      <style jsx global>
        {`
          html {
            font-family: ${mont.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
