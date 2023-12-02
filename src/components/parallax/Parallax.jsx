import { useEffect, useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { variantName } from "../../cursorVariant";
import { useAtom } from "jotai";

const Parallax = ({ type }) => {
  const ref = useRef();
  const ele = useRef();
  const [cursorVariant, setCursorVariant] = useAtom(variantName);
  window.addEventListener("mousemove", (e) => {
    if (ele.current === undefined || e.srcElement.className !== "mountains") {
      return;
    }
    const x = ele.current.offsetLeft;
    const xMax = x + ele.current.offsetWidth;
    const y = ele.current.offsetTop;
    const yMax = y + ele.current.offsetHeight;
    if (
      e.clientX >= x &&
      e.clientX <= xMax &&
      e.clientY >= y &&
      e.clientY <= yMax
    ) {
      setCursorVariant("text");
    } else {
      setCursorVariant("default");
    }
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} ref={ele}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
