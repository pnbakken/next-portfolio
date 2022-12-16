import Link from "next/link";
import { BASE_PATH } from "../../constants/baseURL";
import { languages } from "../../tools/languages/languages";

const OriginalFooter = ({ lang = "eng" }) => {
  return (
    <footer>
      <div className="language-select">
        <div>
          <Link href="/?lang=eng">
            <img
              src={`${BASE_PATH}/icon/language/icons8-great-britain-48.png`}
              alt="English"
            />
          </Link>{" "}
          <Link href="/?lang=nob">
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
          Clear language selection
        </button>
      </div>

      <div className="footer-links">
        <span className="has-text" data-textname="viewOnGH">
          {languages[lang].viewOnGH}
        </span>{" "}
        <a href="https://github.com/pnbakken/next-portfolio">GitHub</a>
      </div>
    </footer>
  );
};

export default OriginalFooter;
