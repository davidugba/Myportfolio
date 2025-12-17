import React from "react";
function Header() {

    return(
      <section id="home">
        <header className="header">
          <div className="header-content">
            <h1>Hi, I'm David Ugba</h1>
            <p className="header-duties">Building scalable, secure infrastructure on AWS with Infrastructure as Code</p>
            <div className="header-button">
                <a href="#projects" className="btn">view my work</a>
                <a href="#contact" className="btn btn-outline">contact me</a>
                
                
            </div>
          </div>
          <div className="header-image">
            <div className="header-avatar">
              <span className="avatar-initials">UD</span>
            </div>
          </div>

        </header>
      </section>
    
    
    );



}

export default Header