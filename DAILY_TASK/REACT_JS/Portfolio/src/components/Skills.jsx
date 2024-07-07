import React from 'react';
import skills from './data/skills';

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>Skills</h1>
      <div className="items">
        {skills.map((skill) => (
          <div className="item" key={skill.id}>
            <img src={`/images/${skill.imageSrc}`} alt={skill.name || 'Skill'} className='exp-img'/>
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;