import PageNavbar from "../page-navbar";
import activeNavbar from "../utility-components/active-navbar";
import fixedNavOnScroll from "../utility-components/fixed-nav-on-scroll";

function HeaderBanner() {
  return (
    <header id="header-banner">
      <PageNavbar />
      <div className="banner-content">
        <h1 className="banner-headline has-text" data-textname="pageHeading">
          Hi! I&apos;m a student <span className="blue-text">front-end</span>{" "}
          developer!
        </h1>
        <div className="banner-text">
          <p className="has-text" data-textname="bannerText">
            I enjoy making good looking, responsive websites that are backed by
            solid code.
          </p>
          <a
            className="pseudo-button has-text"
            data-textname="bannerCTA"
            href="#contact"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeaderBanner;
