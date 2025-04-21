import React from "react";
import { image } from "../data/data";
//import About from "../components/About";
//import Image from "../assets/myImage.jpg"; // ✅ use the actual file path


function About() {
  return (<div id="about">
    <h2>About Me</h2>
    <p>Am Strong</p>
    <img src={image} alt="I made this" />
  </div>);
}

export default About;
