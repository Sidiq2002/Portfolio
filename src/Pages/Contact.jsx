import React, { useState } from "react";
import "../StyleSheets/Contact.css";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "67cf3289-1bad-487a-acc4-f856b9551e5a");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((response) => response.json());
      if (response.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="your-details">
          <h1>Contact Form</h1>
          <form onSubmit={onSubmit}>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Full Name" name="name" required />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Message" name="message"></textarea>
            </div>
            <div>
              <button type="submit" className="button">
                Send
              </button>
            </div>
            {result && <p>{result}</p>}
          </form>
        </div>
        <div className="my-detail">
          <h1 className="contact-details">Contact Details</h1>
          <div className="details">
            <div className="detail">
              <h2>Phone :</h2>
              <p>
                <a href="tel:6379539528">+91 6379539528</a>
              </p>
            </div>
            <div className="detail">
              <h2>Email :</h2>
              <p>
                <a href="mailto:hajiabubakersidiq2002@gmail.com">
                  {" "}
                  hajiabubakersidiq2002@gmail.com{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="detail">
            <h2>Address :</h2>
            <p>
              <a href="/">Guindy, Chennai - 600032</a>
            </p>
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
        </div>
      </div>
    </div>
  );
};
