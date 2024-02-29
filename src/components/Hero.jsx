import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="info-side">
        <h3 className="part-1">Hello, It's Me</h3>
        <h1>Maram Alfaraj</h1>
        <h3 className="part-2">
          A Passionate{" "}
          <span>
            <ReactTyped
              strings={[
                "Frontend Developer",
                "Backend Developer",
                "UX/UI Designer",
                "Database Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          autem quia illum ipsum earum eos saepe dolore laborum odio nihil.
        </p>

        <a href="https://www.linkedin.com/in/maram-alfaraj">
          <FaLinkedinIn className="personal-link" style={{ "--i": 7 }} />
        </a>
        <a href="https://www.instagram.com/m.l.a_2023">
          <FaInstagram className="personal-link" style={{ "--i": 8 }} />
        </a>
        <a href="https://github.com/MaramLA">
          <FiGithub className="personal-link" style={{ "--i": 9 }} />
        </a>
        <br />
        <button className="btn">
          <a
            className="btn-link"
            href="src/assets/files/CV_Maram_Alfaraj_Web_Developer.pdf"
            download
          >
            Download CV
          </a>
        </button>
      </div>

      <div className="hero-vid">
        <video autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/dsskyyspr/video/upload/v1709224850/personal-portfolio/bwilv8o99pbhws4zau1s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video.
        </video>
      </div>
    </section>
  );
};

export default Hero;
