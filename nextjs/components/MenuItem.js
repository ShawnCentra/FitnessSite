import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },

  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
 
  },
};

const colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];

export const MenuItem = ({ i, toggle }) => {
  const style = { border: `2px solid ${colors[i.number]}` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-placeholder" style={style}>
        <Link href={i.href}>
          <a onClick={toggle} className={"menuLink"}>
            {i.linkName}
          </a>
        </Link>
      </div>
    </motion.li>
  );
};
