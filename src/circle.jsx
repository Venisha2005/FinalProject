import React, { useState } from 'react';
import './cirlcle.css';
import cir2Image from './assets/cir2.jpg';

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="page-container"
      style={{
        backgroundImage: `url(${cir2Image})`
      }}
    >
      <div className="content">
        <h1>Project Name</h1>
        <h3>Client Name</h3>

        {!isOpen ? (
          <button className="toggle-btn" onClick={() => setIsOpen(true)}>+</button>
        ) : (
          <div className="project-details">
            <button className="toggle-btn" onClick={() => setIsOpen(false)}>×</button>
            <div className="details-wrapper">
              <img src={cir2Image} alt="Project" />
              <div>
                <p>
                  Share information on a previous project here to attract new clients. Provide
                  a brief summary, time frame, goals, and outcome.
                </p>
                <p>
                  Add details about why this project was created, the challenges faced, and how
                  they were solved. Include media if needed.
                </p>
                <strong>Learn More &gt;&gt;</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
