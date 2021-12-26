import React from "react";
import "../about.css";

const About = () => {
  return (
    <section>
      <div className="box">
        <div className="left">
          <h3 className="heading">More about me</h3>
          <p>
            My name is Ankit and currently, <br />I am in my final year{" "}
            <i>2018-2022.</i>{" "}
          </p>
          <br />
          <p>In my free time I would love to do Coding,</p>
          <p>Making Web Projects</p>
          <p>I have more interest in FrontEnd as compared to Backend.</p>
          <br />
          <div className="coding-profile">
            <p>My Coding Profiles</p>
            <button>
              <a
                href="https://www.codechef.com/users/ankit8969"
                target="_blank"
                rel="noreferrer"
              >
                CodeChef
              </a>
            </button>
            <button>
              <a
                href="https://codeforces.com/profile/Ankit_12"
                target="_blank"
                rel="noreferrer"
              >
                CodeForces
              </a>
            </button>
            <button>
              <a
                href="https://www.hackerrank.com/yadavankit8969"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank
              </a>
            </button>
          </div>

          <div className="article-gfg">
            <p>Articles Written by Me</p>
            <button className="view">
              <a
                href="https://auth.geeksforgeeks.org/user/ankitkumar774/articles"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </button>
          </div>

          <br />
          <div className="skill-box">
            <p>My Skills</p>
            <div className="expertise">
              <div className="expertise1">
                <p>DataStructure and Algorithm</p>
                <p>OS/DBMS/Oops</p>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
              </div>
              <div className="expertise2">
                <p>BootStrap</p>
                <p>React.js</p>
                <p>Node.js/Express.js</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="./coding/about-img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
