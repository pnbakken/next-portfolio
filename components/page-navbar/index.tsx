import { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import NavLink from "./nav-link";
import activeNavbar from "../utility-components/active-navbar";
import { $ } from "../../tools/helpers/domSelector";

const PageNavbar = (): JSX.Element => {
  useEffect(() => {
    if (window) {
      window.console.log(window);
      window.addEventListener("scroll", () => {
        console.log("scrolling");
        if (window.scrollY > 0) {
          if ($("nav")) {
            window.console.log($("nav"));
          }
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar expand="lg" className="custom-nav navbar-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <NavLink
              href="/#header-banner"
              className="nav-link brand-link active"
            >
              Pål N. Bakken
            </NavLink>
          </div>
          <Navbar.Toggle
            aria-controls="nav-menu"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="nav-menu">
            <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink
                className="nav-item nav-link has-text"
                data-textname="navServices"
                href="#services"
              >
                Services
              </NavLink>
              <NavLink
                className="nav-item nav-link has-text"
                data-textname="navWork"
                href="#projects"
              >
                Work
              </NavLink>
              <NavLink
                className="nav-item nav-link has-text"
                data-textname="navContact"
                href="#contact"
              >
                Contact
              </NavLink>
              <NavLink
                href="#about"
                className="nav-link has-text"
                data-textname="navAbout"
              >
                About me
              </NavLink>
            </Nav>
            <div className="language-select">
              <div>
                <a href="./?lang=eng">
                  <img
                    src="/icon/language/icons8-great-britain-48.png"
                    alt="English"
                  />
                </a>{" "}
                <a href="./?lang=nob">
                  <img src="/icon/language/icons8-norway-48.png" alt="Norsk" />
                </a>
              </div>
              <button
                className="discrete-button has-text"
                id="clear-language"
                value="Clear language selection"
                style={{ display: "none" }}
                data-textname="removeStoredLanguage"
              >
                Clear language selection
              </button>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Navbar className="navbar navbar-expand-lg navbar-dark custom-nav">
        <div className="container-fluid">
          <div className="navbar-brand">
            <a href="#header-banner" className="nav-link brand-link active">
              Pål N. Bakken
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar.Collapse
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#services"
                  className="nav-link has-text"
                  data-textname="navServices"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className="nav-link has-text"
                  data-textname="navWork"
                >
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link has-text"
                  data-textname="navContact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link has-text"
                  data-textname="navAbout"
                >
                  About me
                </a>
              </li>
            </ul>
            <div className="language-select">
              <div>
                <a href="./?lang=eng">
                  <img
                    src="/icon/language/icons8-great-britain-48.png"
                    alt="English"
                  />
                </a>{" "}
                <a href="./?lang=nob">
                  <img src="/icon/language/icons8-norway-48.png" alt="Norsk" />
                </a>
              </div>
              <button
                className="discrete-button has-text"
                id="clear-language"
                value="Clear language selection"
                style={{ display: "none" }}
                data-textname="removeStoredLanguage"
              >
                Clear language selection
              </button>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default PageNavbar;
