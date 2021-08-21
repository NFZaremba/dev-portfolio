import { INavLinks } from "./types";
import { motion } from "framer-motion";
import logo from "../../assets/img/letter-n.svg";
import styled from "styled-components";

//* Styles
export const Container = styled(motion.nav)`
  position: absolute;
  width: 100%;
  z-index: 9999;
  top: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;

  a {
    text-decoration: none;
    &:hover {
      background: hsl(0deg 0% 29% / 21%);
      box-shadow: 0 0px 15px -6px rgb(255 255 255 / 40%);
      transition: 0.4s;
      color: #c1b;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  .logo {
    position: relative;
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 2.5rem;
    position: relative;
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

//* Animations
const containerAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const logoAnim = {
  hidden: { scale: 0, top: 70 },
  show: {
    scale: 1,
    top: 0,
    rotate: 180,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const iconsAnim = {
  hidden: { scale: 0, top: 70 },
  show: { scale: 1, top: 0 },
};

//* Data
export const navLinks: INavLinks[] = [
  {
    icon: "ri-github-fill",
    href: "https://github.com/NFZaremba",
  },
  {
    icon: "ri-linkedin-box-fill",
    href: "https://www.linkedin.com/in/nick-zaremba-4a441a87/",
  },
  {
    icon: "ri-mail-fill",
    href: "mailto: nfzaremba@gmail.com",
  },
];

/**
 * Nav component
 *
 * @returns
 */
const Navbar = () => {
  return (
    <Container
      data-testid="navbar"
      variants={containerAnim}
      initial="hidden"
      animate="show"
    >
      <motion.img
        style={{ position: "relative" }}
        variants={logoAnim}
        src={logo}
        alt="logo"
        width="35px"
      />

      <ul>
        {navLinks?.map(({ href, icon }: INavLinks) => (
          <motion.li key={href} variants={iconsAnim}>
            <a href={href} rel="noopener noreferrer" target="_blank">
              <i className={icon}></i>
            </a>
          </motion.li>
        ))}
      </ul>
    </Container>
  );
};

export default Navbar;
