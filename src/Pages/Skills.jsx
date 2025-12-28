import { useState } from "react";
import { skills, tools } from "../assets/Skills.js";
import "../StyleSheets/Skills.css";
import { motion } from "framer-motion";

export const Skills = () => {
  const [skill] = useState(skills);
  const [tool] = useState(tools);

  return (
    <motion.div 
      className="skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="skills-header">
        <h1>TECHNICAL <span className="neon-text">SKILLS</span></h1>
        <p className="subtitle">The technologies I use to bring ideas to life</p>
      </div>

      <div className="skills-grid">
        {skill.map((item) => (
          <motion.div 
            className="skill-card" 
            key={item.id}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <div className="glass-effect">
              <img src={item.icon} alt="skill" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="skills-header" style={{ marginTop: '80px' }}>
        <h1>MY <span className="neon-text">TOOLBOX</span></h1>
      </div>

      <div className="skills-grid">
        {tool.map((item) => (
          <motion.div 
            className="skill-card tool-card" 
            key={item.id}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <div className="glass-effect">
              <img src={item.icon} alt="tool" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};