import React from "react";
import "./home.css";
import Bubbles from "./bubbles";
import bg1 from "../../assets/frontpage-1.png";
import bg2 from "../../assets/fp-2.png";

const Home =() =>{
    return (
        <section className="home" id="home">
            <Bubbles />
            <div className="background_Img" id='bgImage'>
                <img src={bg1} alt="" className="bg-1" />
                <img src={bg2} alt="" className="bg-2" />
            </div>
            <div className="intro">
                <h2 className="home_section_title">Hi!This is Wanqing Zhang</h2>
                <p className="home_section_subtitle">Welcome to my Website</p>
                
            </div>
            
            <div className="home_button">
                <a href="#about" className="home_button_title">
                    Know More About Me!
                </a>
                
            </div>
        </section>
    )
}

export default Home