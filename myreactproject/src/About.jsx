import React from "react";


function About(){
    return(
    
        <section id="about" className="about-section">
            <div className="container">
                <h2>About me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>I'm a passionate Cloud Engineer specializing in AWS, Infrastructure as Code, and DevOps practices. 
                           I build scalable, secure, and cost-optimized cloud infrastructure using Terraform and automated CI/CD pipelines.
                        </p>
                        <p>With expertise in cloud architecture and systems thinking, I focus on creating maintainable, 
                           reproducible infrastructure that balances performance, security, and cost efficiency.
                        </p>
                        <div className="about-details">
                            <div>
                                <h4>Name:</h4>
                                <p>David Ugba</p>
                            </div>
                            <div>
                                <h4>Experience:</h4>
                                <p>3+ years</p>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </section>

    );
}


export default About;
