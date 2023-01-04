import React, { useEffect, useState } from 'react';

function Contact() {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  function sendMessage(formData) {
    return fetch('http://localhost:3004/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }

function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    fullName,
    phoneNumber,
    email,
    message,
  };
  sendMessage(formData);
}

  return (
    <center>

    <form onSubmit={handleSubmit}>
      
        <div className="formWord">
        <h2>Say Hello!</h2>
        <span>Full Name</span>
        <br />
        <input className ="input100" type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <br />
        <span>Phone Number</span>
        <br />
        <input className ="input100" type="text" name="phone" required value ={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)}/>
        <br />
        <span> Enter Email</span>
        <br />
        <input className ="input100" type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        </div>
        <div className="formWord">
          <span>Message</span>
          <br />
          <textarea name="message" required value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
          <br />
          <button>SUBMIT</button>
          <div className="row">
          </div>
        </div>
    </form>
    </center>
  );
}

export default Contact;
