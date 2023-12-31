import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mahadi Hasan</title>
        <meta name="description" content="Mahadi Hasan's portfolio website" />
      </Helmet>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services" style={{ height: "100vh" }}>
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio" style={{ height: "100vh" }}>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact" style={{ height: "120vh" }}>
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
