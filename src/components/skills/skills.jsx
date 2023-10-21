import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills =() =>{
    return(
        <section className="skills container section" id="skills">
            <h2 className="skills_section_title">Skills</h2>
            <p className="skills_section_subtitle">My technical level</p>

            <div className="skills_container container grid">
                <Frontend />
                <Backend />
            </div>

        </section>
    )
}


export default Skills