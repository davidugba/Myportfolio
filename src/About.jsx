import React from "react";


function About(){
    return(
    
        <section id="about" className="about-section">
            <div className="container">
                <h2>About me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>I'm a passionatesss Frontend developer with expertise in React.js and modern javascript.
                            I love creating beautiful, responsive and user-friendly web applocations.
                        </p>
                        <p>With a background in design, I pay special attention to user and clean code architecture.
                        </p>
                        <div className="about-details">
                            <div>
                                <h4>Name:</h4>
                                <p>Ugba David</p>
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
