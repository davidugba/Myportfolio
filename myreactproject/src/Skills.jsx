import React from "react";

const skillCategories = [
    {
        category: "☁️ Cloud Platforms",
        icon: "☁️",
        skills: [
            { name: 'AWS (EC2, S3, IAM)', },
            { name: 'CloudFront & Route 53', },
            { name: 'Lambda & API Gateway', },
            { name: 'VPC & Networking', },
        ]
    },
    {
        category: "🛠️ DevOps & IaC",
        icon: "🛠️",
        skills: [
            { name: 'Terraform', level: 70 },
            { name: 'GitHub Actions CI/CD', level: 75 },
            { name: 'Docker & Containers', level: 65 },
            { name: 'Linux Administration', level: 70 },
        ]
    },
    {
        category: "💻 Programming",
        icon: "💻",
        skills: [
            { name: 'Python (Boto3)', level: 70 },
            { name: 'Bash Scripting', level: 65 },
            { name: 'JavaScript/React', level: 75 },
            { name: 'Git & Version Control', level: 80 },
        ]
    },
    {
        category: "🔒 Security & Monitoring",
        icon: "🔒",
        skills: [
            { name: 'AWS IAM & Security', level: 70 },
            { name: 'CloudWatch Monitoring', level: 65 },
            { name: 'Cost Optimization', level: 70 },
            { name: 'Infrastructure Best Practices', level: 75 },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="skills-h2">Cloud Engineering Skills</h2>
                <p className="skills-subtitle">Building expertise in AWS, Infrastructure as Code, and DevOps automation</p>
                
                <div className="skills-grid">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="skill-category-card">
                            <h3 className="category-title">
                                <span className="category-icon">{category.icon}</span>
                                {category.category}
                            </h3>
                            <div className="category-skills">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;