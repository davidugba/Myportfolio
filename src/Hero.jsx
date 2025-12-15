import React from "react";


function Hero(){

    return(
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm Ugba David</h1>
          <h2>Frontend Developer</h2>
          <p>I build beautiful, responsive web applications with React</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
            <img src="/david.jpg"
            alt="david-picture" 
            className="profile-image"
          />
          <div className="image-decorator"></div>
        </div>
      </div>
    </section>
    );
};
export default Hero