import { Link } from "react-router-dom";
import { StyledNavbar } from "./Styles";
import { navLinks, INavLinks } from "./__data__/navLinks";

const Navbar: React.FC = () => {
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
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
