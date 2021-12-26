import React from "react";
import "../coding.css";
const Coding = () => {
  return (
    <div className="coding" style={{ overflow: "hidden" }}>
      <h3
        style={{
          fontSize: "2rem",
          color: "grey",
          paddingTop: "40px",
          backgroundColor: "black",
        }}
      >
        My Coding Journey{" "}
      </h3>
      <h2>
        Most <br />
        Interesting <br />
        Part <br />
        of
        <br /> My <br />
        College <br />
        Journey <br />
      </h2>
      <div className="common coding-journey-1">
        <div className="bubbles">
          <div className="bubble1">I Sem</div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="dummy">
          No Study...
          <br />
          Only Fun
        </div>
      </div>

      <div className="common coding-journey-2">
        <div className="bubbles">
          <div className="bubble1">II Sem</div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="dummy">Learn C Programming</div>
      </div>

      <div className="common coding-journey-3">
        <div className="bubbles">
          <div className="bubble1">III Sem</div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="dummy">
          <p>Problem Solved at Hacker Rank</p>
        </div>
      </div>

      <div className="common coding-journey-3-4 corona-box">
        <div className="corona">
          <img src="./coding/corona.jpg" alt="" />
        </div>
        <div className="dummy">
          <p>Corona enter in our Life</p>
        </div>
      </div>

      <div className="common coding-journey-3-4">
        <div className="home">
          <img src="./coding/moveHome.png" alt="" />
        </div>
        <div className="home-dummy">
          <p>Move towards Home</p>
        </div>
      </div>

      <div className="common coding-journey-4">
        <div className="bubbles">
          <div className="bubble1">IV Sem</div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="dummy">
          <p>Learn Lot's of new Things</p>
          <div>
            <span>Data Structure</span>
            <span>Html</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
        </div>
      </div>

      <div className="common coding-journey-5">
        <div className="bubbles">
          <div className="bubble1">V Sem</div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="dummy">
          <p>Doing Competitive Coding</p>
          <div>
            <span>Graph</span>
            <span>Dp</span>
            <span>Trees</span>
          </div>
        </div>
      </div>

      <div className="common coding-journey-5-6">
        <div className="dummy">
          <img src="./coding/codechef.png" alt="" />
          <p>
            Solving Problems on <span>CodeChef</span> and
            <span> Codeforces</span>
          </p>
          <img src="./coding/codeforces.png" alt="" />
        </div>
      </div>

      <div className="common coding-journey-5">
        <div className="bubbles">
          <div className="bubble1">VI Sem</div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="dummy">
          <p>Preparaing for Placement</p>
          <div>
            <span>Data Structure</span>
            <span>OS</span>
            <span>DBMS</span>
            <span>Oops</span>
          </div>
        </div>
      </div>

      <div className="common coding-journey-7">
        <div className="bubbles">
          <div className="bubble1">VII Sem</div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="dummy">
          <p>Looking for Work!</p>
          <img src="./coding/looking.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Coding;
