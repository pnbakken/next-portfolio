import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

function NavLink({ href, exact = false, children, id = "", ...rest }) {
  const { pathname } = useRouter();
  const isActive = () => {
    return exact ? pathname === href : pathname.startsWith(href);
  };
  const active = isActive() ? "active" : "";

  return (
    <Link href={href} className={`nav-link ${active}`} id={id} {...rest}>
      {children}
    </Link>
  );
}

export default NavLink;

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
