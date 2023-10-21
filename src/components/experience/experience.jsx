import React, { useState } from "react";
import "./experience.css";

const Experience =() =>{
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <section className="experience container section" id="experience">
            <h2 className="experience_section_title">Experience</h2>
            <p className="experience_section_subtitle">My Persoanl Jounery</p>

            <div className="experience_container container">
                <div className="experience_tabs">
                    <div className={toggleState === 1 ?
                        "experience_button experience_active button--flex": "experience_button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap experience_icon"></i>{" "} Education
                    </div>

                    <div className={toggleState === 2 ?
                        "experience_button experience_active button--flex": "experience_button button--flex"}
                        onClick={() => toggleTab(2)} >
                        <i className="uil uil-briefcase-alt experience_icon"></i>{" "} Work Experience
                    </div>
                </div>

                <div className="experience_section">
                    <div className={toggleState === 1 ?
                        "experience_content experience_content-active" :"experience_content" }>
                        <div className="experience_data">
                            <div>
                                <h3 className="experience_title">Finance and Economics Master</h3>
                                <span className="experience_subtitle">Western Ontario</span>
                                <div className="experience_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="experience_rounder"></span>
                                <span className="experience_line"></span>
                            </div>
                        </div>

                        <div className="experience_data">
                            <div></div>

                            
                            <div>
                                <span className="experience_rounder"></span>
                            </div>

                            <div>
                                <h3 className="experience_title">Finance and Economics Bachelour</h3>
                                <span className="experience_subtitle">University of Toronto</span>
                                <div className="experience_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2020
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className={toggleState === 2 ?
                        "experience_content experience_content-active" :"experience_content" }>
                        <div className="experience_data">
                            <div>
                                <h3 className="experience_title">Data Scientist</h3>
                                <span className="experience_subtitle">Bell Canada</span>
                                <div className="experience_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>

                            <div>
                                <span className="experience_rounder"></span>
                                <span className="experience_line"></span>
                            </div>
                        </div>

                        <div className="experience_data">
                            <div></div>

                            
                            <div>
                                <span className="experience_rounder"></span>
                            </div>

                            <div>
                                <h3 className="experience_title">Business Analyst</h3>
                                <span className="experience_subtitle">Fintelics - internship</span>
                                <div className="experience_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021
                                </div>
                            </div>   
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience