import { useState } from "react";
import { skills } from "../assets/Skills.js";
import { tools } from "../assets/Skills.js";
import "../StyleSheets/Skills.css";
export const Skills = () => {
  const [skill, setSkill] = useState(skills);
  const [tool, setTool] = useState(tools);
  return (
    <div className="skills">
      <div className="skills-container">
        <h1>Technical Skills</h1>
        <div className="tech-skills">
          {skill.map((item) => {
            return (
              <div className="skill" key={item.id}>
                <img src={item.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="tools-container">
        <h1>Tools</h1>
        <div className="tools-skills">
          {tool.map((item) => {
            return (
              <div className="tool" key={item.id}>
                <img src={item.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
