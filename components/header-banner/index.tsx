import PageNavbar from "../page-navbar";
import { languages } from "../../tools/languages/languages";

function HeaderBanner({ lang = "eng" }) {
  return (
    <header
      id="header-banner"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/image/banner-image.jpg)`,
      }}
    >
      <PageNavbar lang={lang} />
      <div className="banner-content">
        <h1
          className="banner-headline has-text"
          data-textname="pageHeading"
          dangerouslySetInnerHTML={{ __html: languages[lang].pageHeading }}
        ></h1>
        <div className="banner-text">
          <p className="has-text" data-textname="bannerText">
            {languages[lang].bannerText}
          </p>
          <a
            className="pseudo-button has-text"
            data-textname="bannerCTA"
            href="#contact"
          >
            {languages[lang].bannerCTA}
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeaderBanner;
