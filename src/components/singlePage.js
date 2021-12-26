import React from "react";

const SinglePage = ({ item }) => {
  const { title, about, src, live, github } = item;
  return (
    <div className="card">
      <div className="card-head">
        <img src={src} alt={title} />
      </div>
      <div className="card-body">
        <p className="title">{title}</p>
        <p className="about">{about}</p>
        <div className="footer">
          <span>
            <a href={live} target="_blank" rel="noreferrer">
              View
            </a>
          </span>
          <span>
            <a href={github} target="_blank" rel="noreferrer">
              Source
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
