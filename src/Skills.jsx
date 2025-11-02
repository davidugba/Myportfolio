import React from "react";



  let skills = [
        {name: 'HTML', level: 95},
        {name: 'CSS', level: 90}, 
        {name: 'JavaScript', level: 75},
        {name: 'React', level: 80},
        {name: 'Node.js', level: 70},
        {name: 'Tailwind', level: 80},
        {name: 'BootStrap', level: 80},
        {name: 'TypeScript', level: 70},
    ];
  let Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="skills-h2">My Skills</h2>
                <div className="skills-container">
                    {skills.map((skill, index) =>(
                        <div key={index} className="skill-item">
                            <div className="skill-info">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{width: '${skill.level}%' }}>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Skills