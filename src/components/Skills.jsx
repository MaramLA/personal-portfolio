import React, { useEffect } from "react";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { GrMysql } from "react-icons/gr";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoLogoJavascript,
} from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiBracketsCurly } from "react-icons/pi";
import { SiPhpmyadmin, SiPostman, SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    const productContainer = document.querySelectorAll(".skills-container");
    const leftBtn = document.querySelectorAll(".left-btn");
    const rightBtn = document.querySelectorAll(".right-btn");

    const handleRightButtonClick = (i, containerWidth) => {
      productContainer[i].scrollLeft += containerWidth;
    };

    const handleLeftButtonClick = (i, containerWidth) => {
      productContainer[i].scrollLeft -= containerWidth;
    };

    const handleButtonClicks = () => {
      productContainer.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        rightBtn[i].addEventListener("click", () =>
          handleRightButtonClick(i, containerWidth)
        );
        leftBtn[i].addEventListener("click", () =>
          handleLeftButtonClick(i, containerWidth)
        );
      });
    };

    handleButtonClicks();

    // Cleanup
    return () => {
      productContainer.forEach((item, i) => {
        rightBtn[i].removeEventListener("click", () =>
          handleRightButtonClick(i, containerWidth)
        );
        leftBtn[i].removeEventListener("click", () =>
          handleLeftButtonClick(i, containerWidth)
        );
      });
    };
  }, []);
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Technical <span>Skills</span>
      </h2>
      <div className="main-container">
        <IoIosArrowBack className="left-btn" />

        <div className="skills-container">
          <div className="skill-box">
            <FaReact className="skill-icon" />
            <h3>ReactJS</h3>
          </div>
          <div className="skill-box">
            <IoLogoJavascript className="skill-icon" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-box">
            <FaHtml5 className="skill-icon" />
            <h3>HTML5</h3>
          </div>
          <div className="skill-box">
            <FaCss3Alt className="skill-icon" />
            <h3>CSS3</h3>
          </div>
          <div className="skill-box">
            <FaSass className="skill-icon" />
            <h3>Sass</h3>
          </div>
          <div className="skill-box">
            <SiTypescript className="skill-icon" />
            <h3>TypeScript</h3>
          </div>
          <div className="skill-box">
            <FaNodeJs className="skill-icon" />
            <h3>NodeJS</h3>
          </div>
          <div className="skill-box">
            <FaPython className="skill-icon" />
            <h3>Python</h3>
          </div>
          <div className="skill-box">
            <FaPhp className="skill-icon" />
            <h3>Php</h3>
          </div>
          <div className="skill-box">
            <FaJava className="skill-icon" />
            <h3>Java</h3>
          </div>
          <div className="skill-box">
            <FaGithub className="skill-icon" />
            <h3>GitHub</h3>
          </div>
          <div className="skill-box">
            <FaFigma className="skill-icon" />
            <h3>Figma</h3>
          </div>

          <div className="skill-box">
            <SiPostman className="skill-icon" />
            <h3>Postman</h3>
          </div>
          <div className="skill-box">
            <GrMysql className="skill-icon" />
            <h3>MySQL</h3>
          </div>
          <div className="skill-box">
            <BiLogoMongodb className="skill-icon" />
            <h3>MongoDB</h3>
          </div>
        </div>
        <IoIosArrowForward className="right-btn" />
      </div>
    </section>
  );
};

export default Skills;
