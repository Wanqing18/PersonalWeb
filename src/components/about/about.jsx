import React from "react";
import "./about.css";
import Contact from './contact';
import AboutImg from "../../assets/person-1.png";
import resume from "../../assets/resume.pdf";

const About =() => {
    return(
        <section className="about container section" id="about">
            <h2 className="about_section_title">About Me</h2>
            <p className="about_section_subtitle">My Introduction</p>
            
            <div className="about_container grid">
                <img src={AboutImg} alt="" className="about_img" />
                <Contact />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                            I am Christal, welcome to my webpage,self introduction here!
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