import "./hero.scss";
import { motion } from "framer-motion";
import { variantName } from "../../cursorVariant";
import { useAtom } from "jotai";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const [cursorVariant, setCursorVariant] = useAtom(variantName);
  const mouseEnter = () => {
    setCursorVariant("text");
  };
  const mouseLeave = () => {
    setCursorVariant("default");
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            MAHADI HASAN
          </motion.h2>
          <motion.h1
            variants={textVariants}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Full-stack web developer
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="buttons"
            style={{ zIndex: 99 }}
          >
            <motion.button
              variants={textVariants}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              onClick={()=>window.location="/#Portfolio"}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              onClick={()=>window.location="/#Contact"}

            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Hire Me
      </motion.div>
      <div className="imageContainer">
        <img src="/me.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
