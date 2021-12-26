/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import list from "./data";
import SinglePage from "./singlePage";

const Project = () => {
  return (
    <div className="project">
      <div className="project-header">
        <h2>My Projects</h2>
      </div>
      <div className="project-item" style={{ position: "relative" }}>
        {list.map((item) => (
          <SinglePage key={item.id} item={item} />
        ))}
      </div>
      <div className="project-footer">
        <p>Created by ❤️Ankit❤️</p>
      </div>
    </div>
  );
};

export default Project;
