import React, { useState } from "react";
import "./projects.css";
import Menu from "./menu";

const Projects = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category == categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="projects">
      <h2 className="work_section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work_item" onClick={() => filterItem("Apps")}>
          Apps
        </span>
        <span className="work_item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, path, content, category } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <span className="work_descriptions">{content}</span>
              <a target="_blank" href={path} className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
  //   function showTiktok(classid) {
  //     if (work_card.id === classid) {
  //       return;
  //       <a
  //         target="_blank"
  //         href="https://v.douyin.com/id9sDYK1/"
  //         className="tiktok_link"
  //       >
  //         <i className="bx bxl-tiktok"></i>
  //       </a>;
  //     }
  //   }
};

export default Projects;
