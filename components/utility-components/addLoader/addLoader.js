import { languages } from "../../tools/languages/languages.js";
export default function addLoader(lang = "eng") {
  return (
    <div className="loader">
      <div class="spinner"></div>
      <p>${languages[lang].pleaseWait}</p>
    </div>
  );
}
