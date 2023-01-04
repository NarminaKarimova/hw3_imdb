import React, {  useState } from 'react';
// import "./Contact.css";

import "./Home.css";
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
    <center style={{width: "400px",
      height: "450px",
      margin: "35px auto",
      border: "1px solid #689eea",
      borderRadius: "10px",
      backgroundColor: "#89C4E1"}}>

    <form onSubmit={handleSubmit}>
      
        <div className="contact">
        <h2 
        style={{paddingTop: "20px",
    paddingBottom: "20px",
    color:"#5053a7"}} 
    >Say Hello!</h2>

        <span 
        style={{color:"#5053a7",
    fontWeight: "bold"}}
      >Full Name</span>
        <br />
        <input className ="input" type="text" name="fullName" style={{ width:"300px",
    height: "40px",
    border: "solid #5053a7",
    borderRadius: "10px",
    marginBottom: "10px"}} value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <br />
        <span
         style={{color:"#5053a7",
    fontWeight: "bold"}}>Phone Number</span>
        <br />
        <input className ="input" type="text" name="phone"  style={{ width:"300px",
    height: "40px",
    border: "solid #5053a7",
    borderRadius: "10px",
    marginBottom: "10px"}} required value ={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)}/>
        <br />
        <span 
        style={{color:"#5053a7",
    fontWeight: "bold"}}> Enter Email</span>
        <br />
        <input className ="input" type="text" name="email" style={{ width:"300px",
    height: "40px",
    border: "solid #5053a7",
    borderRadius: "10px",
    marginBottom: "10px"}} required value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
          <span 
          style={{color:"#5053a7",
    fontWeight: "bold"}}
    >Message</span>
          <br />
          <textarea name="message" style={{ width:"300px",
    height: "80px",
    border: "solid #5053a7",
    borderRadius: "10px",
    marginBottom: "10px"}} required value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
          <br />
          <button style={{marginTop: "3px",
   backgroundColor: "#8587c3",
   border: "solid #5053a7",
   borderRadius: "7px"}}>Submit</button>
          <div className="row">
          </div>
        </div>
    </form>
    </center>
  );
}

export default Contact;
