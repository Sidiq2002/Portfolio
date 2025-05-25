import "../StyleSheets/Home.css";
import Profile from "../assets/Picture.png";
import Resume from "../assets/Haji-Abubaker-Sidiq.pdf"
export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="introduction">
          <div className="intro-txt">
            <h1>Hi..</h1>
            <h1>My Name is</h1>
            <h2 className="name">HAJI ABUBAKER SIDIQ</h2>
            <h1 className="coure">
              Software Development
              <br />
              <span className="fullstack">[ FullStack Development ]</span>
            </h1>
          </div>
          <div className="socia-media">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/haji-abubaker-sidiq-a2382635b"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Sidiq2002" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_sidiq._02_" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="resume-container">
            <a href={Resume} download className="resume">
              Resume
            </a>
          </div>
        </div>
        <div className="profile">
          <img src={Profile} alt="picture" />
        </div>
      </div>
    </div>
  );
};
