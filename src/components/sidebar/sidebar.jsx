import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../assets/person-2.png";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show_menu" : "aside"}>
        <a href="home" className="nav_logo">
          <img src={logo} alt="" className="logo_img" />
        </a>

        <div className="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uil uil-home"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user-circle nav_icon"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-robot nav_icon"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#experience" className="nav_link">
                <i className="uil uil-briefcase-alt nav_icon"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#projects" className="nav_link">
                <i className="uil uil-apps nav_icon"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_footer">
          <span className="copyright">&copy; 2023-2024</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
