import { useState } from "react";
import "../StyleSheets/About.css";
import { Education } from "../assets/details.json";
import { Certification } from "../assets/details.json";
import { Internship } from "../assets/details.json";
export const About = () => {
  const [education, setEducation] = useState(Education);
  const [course, setCourse] = useState(Certification);
  const [internship, setInternship] = useState(Internship);

  return (
    <div className="about">
      <p className="aboutus">ABOUT US</p>
      <div className="about-container">
        <div className="education">
          <h1>Education</h1>
          {education.map((item, index) => {
            return (
              <div key={index} className="education-details">
                <h3 className="collegename">{item.name}</h3>
                <p>
                  Course : <span>{item.course}</span>
                </p>
                <p>
                  Percentage :<span> {item.percentage} </span>
                </p>
                <p>
                  Duration :
                  <span>
                    {" "}
                    {item.startyear} - {item.endyear}{" "}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="course">
          <h1>Course</h1>
          {course.map((item, index) => {
            return (
              <div key={index} className="course-details">
                <h2 className="collegename">{item.name}</h2>
                <p>
                  Issuing Organization :<span> {item.center} </span>
                </p>
                <p>
                  Location :<span> {item.Location}</span>
                </p>
                <p>
                  Certification :<span> {item.Certification}</span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="internship">
          <h1>Internship</h1>
          {internship.map((item, index) => {
            return (
              <div key={index} className="course-details">
                <h2 className="collegename">{item.Company}</h2>
                <p>
                  Location : <span>{item.Location}</span>
                </p>
                <p>
                  Duration :<span> {item.Duration}</span>
                </p>
                <p>
                  Roles : <span>{item.Roles}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
