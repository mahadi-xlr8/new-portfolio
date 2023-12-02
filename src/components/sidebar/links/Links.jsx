import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { variantName } from "../../../cursorVariant";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  const [cursorVariant, setCursorVariant] = useAtom(variantName);
  const mouseEnter = () => {
    setCursorVariant("sidebar");
  };
  const mouseEnterBig = () => {
    setCursorVariant("sidebarBig");
  };
  const mouseLeave = () => {
    setCursorVariant("sidebar");
  };
  return (
    <motion.div
      className="links"
      variants={variants}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={mouseEnterBig}
          onMouseLeave={mouseLeave}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
