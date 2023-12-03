import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { variantName } from "../../cursorVariant";
import { useAtom } from "jotai";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [cursorVariant, setCursorVariant] = useAtom(variantName);
  const mouseEnter = () => {
    setCursorVariant("text");
  };
  const mouseEnterMini = () => {
    setCursorVariant("mini");
  };
  const mouseLeave = () => {
    setCursorVariant("default");
  };
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p onMouseEnter={mouseEnterMini} onMouseLeave={mouseLeave}>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="/people.webp"
            alt=""
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          />
          <h1 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <motion.b whileHover={{ color: "orange" }}>To</motion.b>{" "}
            Website.
          </h1>
          <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            WHAT I DO?
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <h2>Full-Stack</h2>
          <p style={{ margin: "1rem 0" }}>
            As a skilled MERN stack web developer, I specialize in transforming
            ideas into dynamic digital platforms. My expertise in the MERN stack
            allows me to craft robust, scalable, and interactive websites.
          </p>
          <button onClick={()=>window.location="/#Contact"}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <h2>Frontend</h2>
          <p>
            I have exceptional ability to convert Figma designs into React code,
            a skill that sets me apart in the world of web development. My
            expertise lies not just in coding but in meticulously translating
            design visions into functional, responsive, and visually captivating
            web applications.
          </p>
          <button onClick={()=>window.location="/#Contact"}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <h2>Backend</h2>
          <p>
            I specialize in robust backend development using Express for API
            creation, MongoDB for data storage, and Socket.IO for real-time
            communication. Crafting scalable, efficient solutions is my forte,
            ensuring seamless functionality and performance for your project's
            backend needs.
          </p>
          <button onClick={()=>window.location="/#Contact"}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <h2>SEO</h2>
          <p>
            Beyond crafting exceptional websites, I specialize in maximizing
            online visibility and organic traffic through strategic Search
            Engine Optimization (SEO) techniques. My approach to SEO combines
            technical expertise, content optimization, and data-driven
            strategies to propel websites to the forefront of search engine
            rankings.
          </p>
          <button onClick={()=>window.location="/#Contact"}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
