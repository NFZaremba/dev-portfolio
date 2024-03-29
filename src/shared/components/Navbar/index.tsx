import { useEffect, useState } from "react";
import { INavLinks } from "./types";
import { AnimatePresence, motion } from "framer-motion";
import { ISectionTitle } from "../../types";

export const navLinks: INavLinks[] = [
  {
    icon: "ri-github-fill",
    href: "https://github.com/NFZaremba",
    text: "github link",
  },
  {
    icon: "ri-linkedin-box-fill",
    href: "https://www.linkedin.com/in/nick-zaremba-4a441a87/",
    text: "linkedin link",
  },
  {
    icon: "ri-mail-fill",
    href: "mailto: nfzaremba@gmail.com",
    text: "email link",
  },
];

const navMotion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const iconsMotion = {
  hidden: { scale: 0, top: 70 },
  show: { scale: 1, top: 0 },
};

export const titleAnim = {
  enter: (direction: number) => {
    return {
      y: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

export interface INavbar {
  sectionTitle: ISectionTitle;
  direction: string;
}

const Navbar = ({ sectionTitle, direction }: INavbar) => {
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [customDirection, setCustomDirection] = useState<number>(0);

  useEffect(() => {
    setTitle(sectionTitle.title);
    setColor(sectionTitle.color);
  }, [sectionTitle]);

  useEffect(() => {
    setCustomDirection(direction === "up" ? 1 : -1);
  }, [direction]);

  return (
    <motion.nav
      className="fixed max-w-screen-xl mx-8 z-50 top-0 left-0 right-0 flex justify-between items-start sm:items-center flex-col py-10 sm:flex-row xl:mx-auto"
      data-testid="navbar"
      variants={navMotion}
      initial="hidden"
      animate="show"
    >
      <div className="flex">
        <h1 className="min-w-max ">Nick Zaremba |</h1>
        <AnimatePresence initial={false} custom={customDirection}>
          <motion.h1
            key={title}
            className={`absolute left-44 mx-auto font-semibold text-3xl w-48 sm:top-auto ${color}`}
            variants={titleAnim}
            custom={customDirection}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 500, damping: 100 },
              opacity: { duration: 0.2 },
            }}
          >
            {title}
            <span className="sr-only">{title || "section header"}</span>
          </motion.h1>
        </AnimatePresence>
      </div>

      <ul className=" hidden sm:flex pt-4 justify-around w-full sm:justify-end sm:pt-0">
        {navLinks?.map(({ href, icon, text }: INavLinks) => (
          <motion.li
            className="relative text-3xl sm:pl-10 "
            key={href}
            variants={iconsMotion}
          >
            <motion.div whileHover={{ scale: 1.25, rotate: 10 }}>
              <a href={href} rel="noopener noreferrer" target="_blank">
                <i className={`${icon} `}></i>
                <span className="sr-only">{text}</span>
              </a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
