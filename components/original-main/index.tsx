import Projects from "../projects";
import Skills from "../skills";
import ContactForm from "../contact-form";
import { languages } from "../../tools/languages/languages";
import NewProjectsDisplay from "../new-projects-display";
import { BASE_PATH } from "../../constants/baseURL";

const OriginalMain = ({ lang = "eng" }) => {
  return (
    <main>
      <div className="divider large-divider"></div>

      <section id="services">
        <h2 className="has-text" data-textname="servicesHeading">
          {languages[lang].servicesHeading}
        </h2>

        <div className="container services-container">
          <div className=" container-item service-item" id="websites">
            <div className="service-content">
              <h3 className="has-text" data-textname="websitesServiceHeading">
                {languages[lang].websitesServiceHeading}
              </h3>
              <div className="service-text">
                <ul
                  className="service-list has-text"
                  data-textname="websitesTextList"
                  dangerouslySetInnerHTML={{
                    __html: languages[lang].websitesTextList,
                  }}
                ></ul>
              </div>
            </div>
            <div className="service-icon">
              <img
                src={`${BASE_PATH}/icon/services/icon-computer.svg`}
                alt="websites and applications"
              />
            </div>
          </div>

          <div className=" container-item service-item" id="photography">
            <div className="service-content">
              <h3
                className="has-text"
                data-textname="photographyServiceHeading"
              >
                {languages[lang].photographyServiceHeading}
              </h3>
              <div className="service-text">
                <ul
                  className="service-list has-text"
                  data-textname="photographyTextList"
                  dangerouslySetInnerHTML={{
                    __html: languages[lang].photographyTextList,
                  }}
                ></ul>
              </div>
            </div>
            <div className="service-icon">
              <img
                src={`${BASE_PATH}/icon/services/icon-photo.svg`}
                alt="photography"
              />
            </div>
          </div>

          <div className=" container-item service-item" id="online-consulting">
            <div className="service-content">
              <h3 className="has-text" data-textname="consultingServiceHeading">
                {languages[lang].consultingServiceHeading}
              </h3>
              <div className="service-text">
                <ul
                  className="service-list has-text"
                  data-textname="consultingTextList"
                  dangerouslySetInnerHTML={{
                    __html: languages[lang].consultingTextList,
                  }}
                ></ul>
              </div>
            </div>
            <div className="service-icon">
              <img
                src={`${BASE_PATH}/icon/services/icon-online.svg`}
                alt="online consulting"
              />
            </div>
          </div>

          <div className=" container-item service-item" id="authoring">
            <div className="service-content">
              <h3 className="has-text" data-textname="contentServiceHeading">
                {languages[lang].contentServiceHeading}
              </h3>
              <div className="service-text">
                <ul
                  className="service-list has-text"
                  data-textname="contentTextList"
                  dangerouslySetInnerHTML={{
                    __html: languages[lang].contentTextList,
                  }}
                ></ul>
              </div>
            </div>
            <div className="service-icon">
              <img
                src={`${BASE_PATH}/icon/services/icon-copy.svg`}
                alt="content authoring"
              />{" "}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="projects">
        <h2 className="has-text" data-textname="projectsHeading">
          {languages[lang].projectsHeading}
        </h2>
        <NewProjectsDisplay lang={lang} />
        <Projects lang={lang} />
      </section>

      <div className="divider"></div>

      <section id="contact">
        <h2 className="has-text" data-textname="contactHeading">
          {languages[lang].contactHeading}
        </h2>
        <div className="contact-group">
          <ContactForm lang={lang} />
          <div className="contact-social">
            <ul className="social-links">
              <li>
                <a className="social-link" href="https://github.com/pnbakken">
                  <img
                    className="social-icon"
                    src={`${BASE_PATH}/icon/social/awesome-github.svg`}
                    alt="github"
                  />{" "}
                  <span className="icon-text">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/p%C3%A5l-bakken-0b2295204/"
                >
                  <img
                    className="social-icon"
                    src={`${BASE_PATH}/icon/social/awesome-linkedin-in.svg`}
                    alt="linkedin"
                  />
                  <span className="icon-text">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://www.instagram.com/pnbakken/"
                >
                  <img
                    className="social-icon"
                    src={`${BASE_PATH}/icon/social/awesome-instagram.svg`}
                    alt="linkedin"
                  />{" "}
                  <span className="icon-text">Instagram</span>
                </a>
              </li>
              <li>
                <a className="social-link" href="mailto:contact@pnbakken.no">
                  <img
                    className="social-icon"
                    src={`${BASE_PATH}/icon/social/icon-email.svg`}
                  />{" "}
                  <span className="icon-text">contact@pnbakken.no</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="about">
        <h2 className="has-text" data-textname="aboutHeading">
          {languages[lang].aboutHeading}
        </h2>
        <article className="container about-container">
          <div className="about-content">
            <div
              className="bio-image"
              style={{
                backgroundImage: `url(${BASE_PATH}/image/author-image.jpg)`,
              }}
            ></div>
            <div
              className="bio-text has-text"
              data-textname="bioText"
              dangerouslySetInnerHTML={{ __html: languages[lang].bioText }}
            ></div>
          </div>
        </article>

        <article id="technologies">
          <h2 className="has-text" data-textname="techsHeading">
            {languages[lang].techsHeading}
          </h2>
          <Skills lang={lang} />
        </article>
      </section>

      <div className="divider"></div>

      <div className="page-copy">&copy; 2022 Pål N. Bakken</div>
    </main>
  );
};

export default OriginalMain;
