import { Link } from "react-router-dom";
import { StyledNavbar } from "./styles";
import { navLinks } from "./navLinks";
import { INavLinks } from "./types";

const Navbar = () => {
  return (
    <StyledNavbar
      data-testid="navbar"
      transition={{ duration: 1 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h1>
        <Link className="logo" to="/">
          Devfolio
        </Link>
      </h1>
      <ul>
        {navLinks?.map(({ text, path }: INavLinks) => (
          <li key={text}>
            <Link to={path}>{text}</Link>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
