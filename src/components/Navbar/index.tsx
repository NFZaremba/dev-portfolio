import { Link, useLocation } from "react-router-dom";
import { StyledNavbar, Line } from "./Styles";
import { navLinks, INavLinks } from "./navLinks";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <StyledNavbar data-testid="navbar">
      <h1>
        <Link className="logo" to="/">
          Devfolio
        </Link>
      </h1>
      <ul>
        {navLinks?.map(({ text, path }: INavLinks) => (
          <li key={text}>
            <Link to={path}>{text}</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === path ? "100%" : "0%" }}
            />
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
