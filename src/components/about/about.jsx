import React from "react";
import "./about.css";
import Contact from './contact';
import AboutImg from "../../assets/person-1.png";
import resume from "../../assets/resume.pdf";

const About =() => {
    return(
        <section className="container section" id="about">
            <h2 className="about_section_title">About Me</h2>
            
            <div className="about_container grid">
                <img src={AboutImg} alt="" className="about_img" />
                <Contact />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                            Hello! I am Christal! I am an Artist, Designer, and Data Scientist. I have experience in Machine Learning and Web Design. 
                        </p>
                        
                        <a href={resume} className="button">
                            Download Resume
                        </a>
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default About