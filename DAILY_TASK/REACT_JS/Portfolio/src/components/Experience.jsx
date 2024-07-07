import React from 'react';
import experience from './data/experience.json';

const Experience = () => {
  return (
    <div className="container ex" id='experience'>
      <h1>Experience</h1>
      {experience.map((exp) => (
        <div key={exp.id} className="ex-items text-center my-5">
          <div className="left">
            <img src={`images/${exp.imageSrc}`} alt={exp.title} className='exp-img'/>
          </div>
          <div className="right">
            <h2 className="company-title">
              {exp.title} {exp.company}
            </h2>
            <h3>{exp.location}</h3>
            <h4>{exp.from} {exp.to} {exp.location}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;