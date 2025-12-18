import React from "react";
function Header() {

    return(
      <section id="home">
        <header className="header">
          <div className="header-content">
            <h1>Welcome to My Portfolio</h1>
            <h2>Transforming Ideas into Cloud Solutions</h2>
            <p className="header-duties">Explore my journey in cloud engineering and infrastructure automation</p>
            <div className="header-button">
                <a href="#projects" className="btn">view my work</a>
                <a href="#contact" className="btn btn-outline">contact me</a>
            </div>
          </div>
          <div className="header-image">
            <div className="header-avatar">
              <span className="avatar-initials">DU</span>
            </div>
          </div>

        </header>
      </section>
    
    
    );



}

export default Header