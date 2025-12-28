import { motion } from "framer-motion";
import "../StyleSheets/Home.css";
import Profile from "../assets/Picture.png";
import Resume from "../assets/Haji-Abubaker-Sidiq.pdf";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <motion.div 
          className="introduction"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="intro-txt">
            <h3 className="greet">Hi..</h3>
            <h3 className="sub-greet">My Name is</h3>
            <h1 className="name">HAJI <span className="highlight">ABUBAKER SIDIQ</span></h1>
            <div className="course-box">
              <h2 className="course">Software Development</h2>
              <p className="fullstack">[ FULLSTACK DEVELOPMENT ]</p>
            </div>
          </div>
          
          <div className="socia-media">
            <ul>
              <li><a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href="https://github.com" target="_blank"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>

          <div className="resume-container">
            <a href={Resume} download className="resume">Download Resume</a>
          </div>
        </motion.div>

        <motion.div 
          className="profile-wrapper"
          initial={{ scale: 0.8, opacity: 0, rotateY: 30 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ rotateY: -15, rotateX: 10, scale: 1.05 }}
        >
          <div className="profile-card">
            <img src={Profile} alt="profile" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};