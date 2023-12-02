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
          Mahadi Hasan
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/Mahadi.Arju420/"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            target="_blank"
          >
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.youtube.com/@TheDank69"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            target="_blank"
          >
            <img src="/youtube.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehedi-xlr8/"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/mahadi-xlr8"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            target="_blank"
          >
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
