import React from "react";
import "./home.css";
import BubbleContainer from "./bubbles";

const Home = () => {
    return (
        <section className="home" id="home">
            <BubbleContainer />
            <div className="background_Img" id='bgImage'>
                <div className="home_button">
                    <a href="#about" className="home_button_title">
                        Know More About Me!
                    </a>
                </div>
                <div className="home_background" ></div>
            </div>
            <div className="intro">
                <h2 className="home_section_title">Hi!This is Wanqing Zhang</h2>
                <p className="home_section_subtitle">Welcome to my Website</p>

            </div>


        </section>
    )
}

export default Home