import Title from '../Genral/Title-name';
import './footer.css';
import React from 'react';
const Foot = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const textareaValue = e.target.elements.message.value;
    const subject = document.getElementById("sub").value;
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(textareaValue);
    var allInputs = document.querySelectorAll('input');
    var alltext= document.querySelectorAll('textarea');
    allInputs.forEach(singleInput => singleInput.value = '');
    alltext.forEach(singleInput => singleInput.value = '');
    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=contact.nagare@gmail.com&su=${emailSubject}&body=${emailBody}&tf=cm`);
  };
  
  

  return (
    <div>
                  <Title first="Contact" second="Me" icon="6" />


    <div id="contactsplit">

<section className="mapbox" data-mapbox>
      <figure>
        
        <iframe
                  title="Google Map"

          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77722.36904585413!2d73.84475300109229!3d18.527082241003814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf51dab63b23%3A0xc0c9d32fb336d7ac!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </figure>
    </section>

    <section className="contact-form" id='Myform'>
      <h3 className="h3 form-title">Contact Me</h3>
      <form className="form" onSubmit={handleSubmit} data-form>
        <div className="input-wrapper">
          <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
          <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          <input type="text" name="subject" className="form-input" id="sub" placeholder="Subject" required data-form-input />
        </div>
        <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
        <button className="form-btn" type="submit"  data-form-btn >
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
    </div>
    </div>
  );
};

export default Foot;
