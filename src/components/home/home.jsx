import React from "react";
import "./home.css";
import BubbleContainer from "./bubbles";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="intro">
                <h2 className="home_section_title">Hi! This is Christal Zhang</h2>
            </div>
            <BubbleContainer />
            <div className="background_Img" id='bgImage'>
                <div className="home_button">
                    <a href="#about" className="home_button_title">
                        Know More About Me!
                    </a>
                </div>
                <div className="home_background" ></div>
            </div>
        </section>
    )
}

export default Home