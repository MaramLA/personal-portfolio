import React from "react";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <video autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/dsskyyspr/video/upload/v1709224850/personal-portfolio/kqns4whsgo56j1azmrxx.mp4"
            type="video/mp4"
          />
          Your browser does not support the video.
        </video>
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>
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
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita,
          quos, laudantium libero adipisci quae iusto saepe hic dolores autem
          numquam exercitationem. Optio quia nam natus earum! Molestiae, minus
          necessitatibus.
        </p>
        <button>
          <a href="#skills" className="btn-link">
            Read More
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
