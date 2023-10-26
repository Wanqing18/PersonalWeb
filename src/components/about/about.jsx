import React from "react";
import "./about.css";
import Contact from "./contact";
import AboutImg from "../../assets/person-1.png";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <section className="container section" id="about">
      <h2 className="about_section_title">About Me</h2>

      <div className="about_container">
        <div className="about_data_left">
          <img src={AboutImg} alt="" className="about_img" />
          <Contact />
        </div>
        <div className="about_data_right">
          <div className="about_info">
            <p className="about_description">
              Hello! I am Wanqing, you can call me Christal! I am an Artist,
              Designer, and Data Scientist, software Engineer. I have experience
              in Machine Learning Applications and Web Design. Feel free to
              check out more projects that I did in 'Recent Work' Section. Happy
              to Connect!
            </p>

            <a href={resume} className="about_button button">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
