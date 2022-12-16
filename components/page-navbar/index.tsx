import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { BASE_PATH } from "../../constants/baseURL";
import useWindowSize from "../../hooks/use-window-size";
import { $, $all, $id } from "../../tools/helpers/domSelector";
import { languages } from "../../tools/languages/languages";
import NavLink from "./nav-link";

const PageNavbar = ({ lang }): JSX.Element => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (window) {
      window.console.log("Has window");

      window.addEventListener("scroll", () => {
        if (scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      });

      return window.removeEventListener("scroll", () => {});
    }
  }, []);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (window && windowSize.innerWidth && windowSize.innerWidth <= 991) {
      const navLinks = $all(".nav-link");
      const toggler = $id("nav-toggler");
      if (toggler && toggler.click) {
        if (navLinks) {
          navLinks.forEach((navL) => {
            navL.addEventListener("click", () => toggler.click());
            console.log("add close navbar");
          });

          return navLinks.forEach((navL) =>
            navL.removeEventListener("click", () => {})
          );
        }
      }
    }
  });

  return (
    <Navbar
      expand="lg"
      className={`custom-nav navbar-dark ${scrolling && "scrolling-nav"}`}
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <NavLink
            href="#header-banner"
            className="nav-link brand-link"
            active={true}
            id="nav-logo-link"
          >
            Pål N. Bakken
          </NavLink>
        </div>
        <Navbar.Toggle
          aria-controls="nav-menu"
          aria-label="Toggle navigation"
          className="light-toggler"
          id="nav-toggler"
        />
        <Navbar.Collapse id="nav-menu">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              className="nav-item nav-link has-text"
              data-textname="navServices"
              href="#services"
            >
              {languages[lang].navServices}
            </NavLink>
            <NavLink
              className="nav-item nav-link has-text"
              data-textname="navWork"
              href="#projects"
            >
              {languages[lang].navWork}
            </NavLink>
            <NavLink
              className="nav-item nav-link has-text"
              data-textname="navContact"
              href="#contact"
            >
              {languages[lang].navContact}
            </NavLink>
            <NavLink
              href="#about"
              className="nav-item nav-link has-text"
              data-textname="navAbout"
            >
              {languages[lang].navAbout}
            </NavLink>
          </Nav>
          <div className="language-select">
            <div>
              <Link href={{ pathname: "/", query: { lang: "eng" } }}>
                <img
                  src={`${BASE_PATH}/icon/language/icons8-great-britain-48.png`}
                  alt="English"
                />
              </Link>{" "}
              <Link href={{ pathname: "/", query: { lang: "nob" } }}>
                <img
                  src={`${BASE_PATH}/icon/language/icons8-norway-48.png`}
                  alt="Norsk"
                />
              </Link>
            </div>
            <button
              className="discrete-button has-text"
              id="clear-language"
              value="Clear language selection"
              style={{ display: "none" }}
              data-textname="removeStoredLanguage"
            >
              {languages[lang].removeStoredLanguage}
            </button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default PageNavbar;
