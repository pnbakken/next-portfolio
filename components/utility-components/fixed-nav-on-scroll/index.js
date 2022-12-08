import { $, $all } from "../../../tools/helpers/domSelector.js";

export default function fixedNavOnScroll(window) {
  closeOnClick(window);
  window.addEventListener("scroll", () => {
    window.console.log("Added eventlistener");
    if (scrollY > 0) {
      window.console.log("scrolling");
      window.console.log($);
      $("nav").classList.add("scrolling-nav");
    } else $("nav").classList.remove("scrolling-nav");
  });
}

export function closeOnClick() {
  if (typeof window === "document" && $("body")) {
    $("body").onClick = () => {
      $(".navbar-collapse").classList.remove("show");
    };
    const links = $all(".nav-link").forEach((link) =>
      link.addEventListener("click", () => {
        $(".navbar-toggler").click();
      })
    );
    window.console.log(links);
  }
}
