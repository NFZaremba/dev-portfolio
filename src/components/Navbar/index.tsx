import { Link } from "react-router-dom";
import { StyledNavbar } from "./Styles";

export interface INavLinks {
  text: string;
  path: string;
}

export const navLinks: INavLinks[] = [
  {
    text: "About Us",
    path: "/",
  },
  {
    text: "My Work",
    path: "/work",
  },
  {
    text: "Contact Us",
    path: "/contact",
  },
];

const Navbar: React.FC = () => {
  return (
    <StyledNavbar data-testid="navbar">
      <h1>
        <a className="logo" href="#">
          Devfolio
        </a>
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
