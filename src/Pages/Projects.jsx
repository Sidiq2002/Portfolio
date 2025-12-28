import { motion } from "framer-motion";
import "../StyleSheets/Projects.css";
import { Frontend, Backend } from "../assets/Skills.js";

export const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-header">
        <h1 className="title">FEATURED <span className="highlight">WORK</span></h1>
      </div>

      <div className="projects-container">
        {/* Combining both for a single unified showcase as per modern designs */}
        {[...Frontend, ...Backend].map((item, index) => (
          <motion.div 
            className="premium-card" 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-image-box">
              <img src={item.image} alt={item.projectName} />
              <div className="overlay">
                <a href={item.githubLink} target="_blank" className="ov-btn">GitHub</a>
                {item.liveLink && <a href={item.liveLink} target="_blank" className="ov-btn live">Live</a>}
              </div>
            </div>
            <div className="card-details">
              <h3>{item.projectName}</h3>
              <p>{item.description}</p>
              <div className="tech-pills">
                {item.technologies.split(",").map(tech => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};