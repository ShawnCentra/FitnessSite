import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    zIndex: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};


export const Navigation = ({ toggle, isOpen }) => (
  <motion.ul
    id="ulSelect"
    animate={isOpen ? "open" : "closed"}
    variants={variants}
    onAnimationComplete={() => {
      if (isOpen === false) {
        document.getElementById("ulSelect").style.zIndex = "-1";
      }
    }}
  >
    {itemIds.map((i) => (
      <MenuItem isOpen={isOpen} toggle={toggle} i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [
  { linkName: "HOME", href: "/", number: 0 },
  { linkName: "ABOUT", href: "/about", number: 1 },
  { linkName: "SERVICES", href: "/services", number: 2 },
  { linkName: "CONTACT", href: "/contact", number: 3 },
];
