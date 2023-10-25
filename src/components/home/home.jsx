import React from "react";
import "./home.css";
import BubbleContainer from "./bubbles";

const Home = () => {
  return (
    <section className="home" id="home">
      <h2 className="home_section_title">Hi! This is Wanqing!</h2>
      <BubbleContainer />
      <div className="home_button">
        <a href="#about" className="home_button_title">
          Know More About Me!
        </a>
      </div>
    </section>
  );
};

export default Home;
