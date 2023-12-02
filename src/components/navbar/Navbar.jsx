import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { variantName } from "../../cursorVariant";
import { useAtom } from "jotai";

const Navbar = () => {
  const [cursorVariant, setCursorVariant] = useAtom(variantName);
  const mouseEnter = () => {
    setCursorVariant("mini");
  };
  const mouseLeave = () => {
    setCursorVariant("default");
  };
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          Lama Dev
        </motion.span>
        <div className="social">
          <a href="#" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
