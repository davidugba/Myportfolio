
import React, {useState} from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="contact-details">
              <div>
                <i className="fas fa-envelope"></i>
                <span>Davidchukwu920@gmail.com</span>
              </div>
              <div>
                <i className="fas fa-phone"></i>
                <span>+35677709894</span>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <span>Valletta, Malta</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <form 
            onSubmit={handleSubmit} 
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;