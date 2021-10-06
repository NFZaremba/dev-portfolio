import { INavLinks } from "./types";
import { motion } from "framer-motion";
import logo from "../../../assets/img/letter-n.svg";

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

const Navbar = () => {
  return (
    <motion.nav
      className="max-w-screen-xl mx-auto absolute z-50 top-0 left-0 right-0 flex justify-between items-center flex-col py-10 sm:flex-row"
      data-testid="navbar"
      variants={containerAnim}
      initial="hidden"
      animate="show"
    >
      <motion.img
        className="relative"
        variants={logoAnim}
        src={logo}
        alt="logo"
        width="35px"
      />

      <ul className="flex pt-4 justify-around w-full sm:justify-end sm:pt-0">
        {navLinks?.map(({ href, icon }: INavLinks) => (
          <motion.li
            className="relative text-3xl sm:pl-10"
            key={href}
            variants={iconsAnim}
          >
            <a href={href} rel="noopener noreferrer" target="_blank">
              <i className={`${icon} text-blue-600`}></i>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
