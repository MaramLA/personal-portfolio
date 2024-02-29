import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading" id="projectsHeading">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        <div className="project-box">
          <img
            src="https://res.cloudinary.com/dsskyyspr/image/upload/v1709224851/personal-portfolio/t07hdv1ftdiixkqyzgq9.png"
            alt="my project"
          />
          <div className="project-layer">
            <h4>Nail Scope</h4>
            <p>An AI Website Tool For Diagnosing Three Nail Diseases</p>
            <div className="project-controllers">
              <a href="https://github.com/MaramLA/NailScope-CS-Graduation-Project-2023">
                <FiGithub className="project-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-box">
          <img
            src="https://res.cloudinary.com/dsskyyspr/image/upload/v1709224852/personal-portfolio/upkl4zv3jhpq0jxuzljv.png"
            alt="my project"
          />
          <div className="project-layer">
            <h4>E-Commerce API</h4>
            <p>An API for MERN fullstack e-commerce website</p>
            <div className="project-controllers">
              <a href="https://github.com/MaramLA/casetone-backend-api">
                <FiGithub className="project-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-box">
          <img
            src="https://res.cloudinary.com/dsskyyspr/image/upload/v1709224851/personal-portfolio/iaulwygp8wyspfnogxrx.png"
            alt="my project"
          />
          <div className="project-layer">
            <h4>Casetone</h4>
            <p>MERN fullstack e-commerce website</p>
            <div className="project-controllers">
              <a href="https://github.com/MaramLA/casetone-frontend">
                <FiGithub className="project-link" />
              </a>
              <a href="https://casetone-frontend.vercel.app/">
                <FaRegEye className="project-link" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-box">
          <img
            src="https://res.cloudinary.com/dsskyyspr/image/upload/v1709224852/personal-portfolio/yj7dene0vzifwmtiytwv.png"
            alt="my project"
          />
          <div className="project-layer">
            <h4>Personal Portfolio</h4>
            <p>Web developer personal portfolio with functional sections</p>
            <div className="project-controllers">
              <a href="https://github.com/MaramLA/personal-portfolio">
                <FiGithub className="project-link" />
              </a>
              <a href="https://personal-portfolio-sooty-iota.vercel.app/">
                <FaRegEye className="project-link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
