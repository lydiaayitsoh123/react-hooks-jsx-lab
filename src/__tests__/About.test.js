// About.jsx
import React from "react";
import myImage from "../path/to/your/image.jpg"; // Update the path as needed

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I’m passionate about learning React and building cool stuff!</p>
      <img src={myImage} alt="I made this" />
    </div>
  );
}

export default About;
