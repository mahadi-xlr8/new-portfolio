import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { variantName } from "../../cursorVariant";
import { useAtom } from "jotai";

const items = [
  {
    id: 1,
    title: "Creator's Hub",
    img: "/creatorsHub.png",
    desc: "A web-based project to help brands to find the best suitable social media influencer to promote their products or services. I used MERN (MongoDB, Express, React, Node) technology to build the website.",
    link: "https://github.com/mahadi-xlr8/creators-hub",
  },
  {
    id: 2,
    title: "Site Hosting",
    img: "/hosting.png",
    desc: "As the name suggests, it is a web hosting site where users can host their website and it was only a frontend project. I build the front-end only using raw HTML, CSS, and JavaScript.",
    link: "https://github.com/mahadi-xlr8/hosting-site-front-end",
  },
  {
    id: 3,
    title: "Chat App",
    img: "/chatApp.png",
    desc: "This is a web-based project where people can chat with their friends. their chats are encrypted with the help of bcrypt npm package. I built this app using MERN stack technology and for bidirectional communication I used Socket.io.",
    link: "https://github.com/mahadi-xlr8/group-chat-with-socket-io",
  },
  {
    id: 4,
    title: "TODO",
    img: "/todo.png",
    desc: "A website to manage your to-do list. MERN stack technology was used here also.",
    link: "https://github.com/mahadi-xlr8/todo-with-mongoose",
  },
  {
    id: 5,
    title: "Insurance Prediction",
    img: "/insurance.png",
    desc: "A GUI application, where a user can input his/her information and get a prediction of how much he/she needs to pay for medical insurance. the model was trained with some data from the USA. Which I found on Kaggle. For UI I used Tkinter.",
    link: "https://github.com/mahadi-xlr8/Medical-Insurance-Cost-Prediction-using-ML",
  },
  {
    id: 6,
    title: "Class Routine",
    img: "/routine.png",
    desc: "This project was built during the COVID times. A GUI application where students can see their class updates and google meet links and teachers can update their class routine in real time. For UI I used Tkinter and MySql for the database.",
    link: "https://github.com/mahadi-xlr8/Routine-using-Mysql",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
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

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} style={{ objectFit: "contain" }} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              {item.title}
            </h2>
            <p onMouseEnter={mouseEnterMini} onMouseLeave={mouseLeave}>
              {item.desc}
            </p>
            <button
              onMouseEnter={mouseEnterMini}
              onMouseLeave={mouseLeave}
              onClick={() => (window.location = item.link)}
            >
              Link
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
