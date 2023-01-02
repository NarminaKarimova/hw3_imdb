import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Result =() =>{
    return(
        <p>Your message has been successfully sent. We will contact you soon</p>
    )
}
function Contact(){
    const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mp5porl', 'template_oyfi3vp', e.target, 'user_Y26CewQDlSi598goXD')
      .then(
        (result) => {
          console.log(result.text);
      }, 
      (error) => {
          console.log(error.text);
      }
      );
      e.target.reset();
      showResult(true);
  };

    return (
        <form action="" onSubmit={sendEmail}>
        <div className="formWord">
        <h2>Say Hello!</h2>
        <span>Full Name</span>
        <br />
        <input className ="input100" type="text" name="fullName" required />
        <br />
        <span>Phone Number</span>
        <br />
        <input className ="input100" type="text" name="phone" required />
        <br />
        <span> Enter Email</span>
        <br />
        <input className ="input100" type="text" name="email" required />
        <br />
        </div>
        <div className="formWord">
          <span>Message</span>
          <br />
          <textarea name="message" required></textarea>
          <br />
          <button>SUBMIT</button>
          <div className="row">
            { result ?  <Result /> : null}
          </div>
        </div>
        </form>
    );
};

export default Contact;