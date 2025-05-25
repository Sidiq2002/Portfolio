import "../StyleSheets/Projects.css";
import { Frontend } from "../assets/Skills.js";
import { Backend } from "../assets/Skills.js";
import { useState } from "react";

export const Projects = ({ image }) => {
  const [react, setReact] = useState(Frontend);
  const [python, setPython] = useState(Backend);

  return (
    <div className="project">
      <div className="heading">
        <h1>Front-End Projects</h1>
        <div className="cart">
          {react.map((item) => {
            return (
              <div className="project-container" key={item.name}>
                <div className="project-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="project-details">
                  <h2>{item.projectName}</h2>
                  <p className="discription">{item.description}</p>
                  <p className="skill">
                    <span>Technical Skills : </span> {item.technologies}
                  </p>
                  <div className="link">
                    <div>
                      <a href={item.githubLink} className="github">
                        Github
                      </a>
                    </div>
                    <div>
                      <a href={item.liveLink} className="livelink">
                        LiveLink
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="heading">
        <h1>Back-End Projects</h1>
        <div className="cart">
          {python.map((item) => {
            return (
              <div className="project-container" key={item.name}>
                <div className="project-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="project-details">
                  <h2>{item.projectName}</h2>
                  <p className="discription">{item.description}</p>
                  <p className="skill">
                    <span>Technical Skills : </span> {item.technologies}
                  </p>
                  <div className="link">
                    <div>
                      <a href={item.githubLink} className="github">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
