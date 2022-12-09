import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useWindowSize from "../../../hooks/use-window-size";
import { $, $all, $id } from "../../../tools/helpers/domSelector";

function NavLink({
  href,
  exact = false,
  children,
  id = "",
  className = "",
  active = false,
  ...rest
}) {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    if (window) {
      const sections = $all("section, #header-banner");

      if (sections) {
        window.addEventListener("scroll", () => {
          let current = "";
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop) {
              current = "#" + section.getAttribute("id");
              if (href === current) {
                setIsActive(true);
              } else setIsActive(false);
            } else if (scrollY === 0 && href === "#header-banner") {
              setIsActive(true);
            }
          });
        });

        return window.removeEventListener("scroll", () => {});
      }
    }
  }, [href]);

  return (
    <Link
      href={href}
      className={`nav-link ${className} ${isActive && "active"}`}
      id={id}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default NavLink;

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
};
