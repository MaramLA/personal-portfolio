import React from "react";
import { ReactTyped } from "react-typed";

const NoPage = () => {
  return (
    <>
      <div className="noPage">
        <div className="noPage-container">
          <span className="heading">404</span>
          <p>
            {"< "}The page you are looking for doesn't exsist{" />"}
          </p>
          <button>
            <a href="#" className="btn-link">
              Go Back
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoPage;
