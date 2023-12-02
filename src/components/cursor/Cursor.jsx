import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";
import { variantName } from "../../cursorVariant";
import { useAtom } from "jotai";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useAtom(variantName);
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
    },
    text: {
      x: position.x - 70,
      y: position.y - 70,
      height: 150,
      width: 150,
      mixBlendMode: "difference",
    },
    mini: {
      x: position.x - 50,
      y: position.y - 50,
      height: 100,
      width: 100,
      mixBlendMode: "difference",
    },
    sidebar: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: "lightGray",
    },
    sidebarBig:{
      x: position.x - 70,
      y: position.y - 70,
      height: 150,
      width: 150,
      mixBlendMode: "difference",
      backgroundColor: "lightGray",
    }
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={variant}
      transition={{ duration: 0.2 }}
    ></motion.div>
  );
};

export default Cursor;
