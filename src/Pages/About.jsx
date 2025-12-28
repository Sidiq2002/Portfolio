import { useState } from "react";
import "../StyleSheets/About.css";
import { Education, Certification, Experience} from "../assets/details.json";
import { motion } from "framer-motion";

export const About = () => {
  const [education] = useState(Education);
  const [course] = useState(Certification);
  const [experience] = useState(Experience);

  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-header">
        <h1 className="aboutus-title">ABOUT <span className="highlight">ME</span></h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-grid">
        {/* Education Section */}
        <section className="about-section">
          <h2 className="section-title"><i className="fa-solid fa-graduation-cap"></i> Education</h2>
          <div className="cards-container">
            {education.map((item, index) => (
              <div key={index} className="info-card">
                <h3 className="card-heading">{item.name}</h3>
                <p className="card-detail">Course: <span>{item.course}</span></p>
                <p className="card-detail">Result: <span>{item.percentage}</span></p>
                <p className="card-detail">Period: <span>{item.startyear} - {item.endyear}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Section */}
        <section className="about-section">
          <h2 className="section-title"><i className="fa-solid fa-certificate"></i> Certifications</h2>
          <div className="cards-container">
            {course.map((item, index) => (
              <div key={index} className="info-card">
                <h3 className="card-heading">{item.name}</h3>
                <p className="card-detail">Org: <span>{item.center}</span></p>
                <p className="card-detail">Location: <span>{item.Location}</span></p>
                <p className="card-detail">ID: <span>{item.Certification}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Internship Section */}
        <section className="about-section">
          <h2 className="section-title"><i className="fa-solid fa-briefcase"></i> Experience</h2>
          <div className="cards-container">
            {experience.map((item, index) => (
              <div key={index} className="info-card">
                <h3 className="card-heading">{item.Company}</h3>
                <p className="card-detail">Role: <span>{item.Roles}</span></p>
                <p className="card-detail">Duration: <span>{item.Duration}</span></p>
                <p className="card-detail">Place: <span>{item.Location}</span></p>
                <p className="card-detail">Place: <span>{item.Responsibilities}</span></p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};