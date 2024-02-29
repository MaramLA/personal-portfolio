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
          <img src="src/assets/images/nailscope.png" alt="my project" />
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
          <img src="src/assets/images/casetone-api.png" alt="my project" />
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
          <img src="src/assets/images/casetone.png" alt="my project" />
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
            src="src/assets/images/personal-profile-project.png"
            alt="my project"
          />
          <div className="project-layer">
            <h4>Personal Portfolio</h4>
            <p>Web developer personal portfolio with functional sections</p>
            <div className="project-controllers">
              <a href="#">
                <FiGithub className="project-link" />
              </a>
              <a href="#">
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
