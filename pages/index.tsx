import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderBanner from "../components/header-banner";
import OriginalFooter from "../components/original-footer";
import OriginalMain from "../components/original-main";

type HomeProps = {
  props: {
    lang: string | null;
  };
};

const Home: NextPage = (props) => {
  const [lang, setLang] = useState("eng");
  const router = useRouter();
  useEffect(() => {
    if (router.query) {
      const { lang } = router.query;
      if (lang) {
        console.log(lang);
        setLang(lang.toString());
      }
      console.log(router.query);
    }
  }, [router.query]);

  return (
    <div>
      <HeaderBanner lang={lang} />
      <OriginalMain lang={lang} />
      <OriginalFooter lang={lang} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context): Promise<HomeProps> {
  if (context.params && context.params.lang) {
    const lang = context.params.lang;
    return {
      props: {
        lang: lang,
      },
    };
  } else return { props: { lang: null } };
}
