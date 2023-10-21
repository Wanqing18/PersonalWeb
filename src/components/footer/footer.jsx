import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container" container>
                <h1 className="footer_title">Christal</h1>
                <p className="footer_subtitle">Alan Mathison Turing：Sometimes no one imagines anything of who do the things that no one can imagine.</p>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                </ul>
                <div className="footer_contact">
                    <a href="https://www.linkedin.com/in/wanqing-zhang/" className="footer_contact-link" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/Wanqing18" className="footer_contact-link" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>

                    <a href="https://www.pixiv.net/users/10456137/illustrations" className="footer_contact-link" target="_blank">
                        <i className="fa-solid fa-p"></i>
                    </a>

                    <a href="mailto:wzhan737@uwo.ca" className="footer_contact-link" target="_blank">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                    
                </div>
                <span className="footer_copy">&#169; ChristalZhang. All rights reserved</span>
            </div>
        </footer>

    )
}

export default  Footer