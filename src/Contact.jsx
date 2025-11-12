
import React, {useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = 'service_jb3xqyp';
    const templateID = 'template_ej2z43s';
    const publicKey = '79-Z69r0Y8p3qknqV';

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'Davidchukwu920@gmail.com'
    }, publicKey)
      .then(() => {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again.');
        setIsSubmitting(false);
      });
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
          >
            <input type="hidden" name="form-name" value="contact" />
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
            <button type="submit" className="btn-send" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;