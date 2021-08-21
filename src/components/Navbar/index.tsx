import { Container } from "./styles";
import { INavLinks } from "./types";
import { motion } from "framer-motion";
import logo from "../../assets/img/letter-n.svg";

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
