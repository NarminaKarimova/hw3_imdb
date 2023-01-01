import React, { useState } from 'react'

const Contact = () => {
    return (
        <div id="contact-form">
            <input type="text" placeholder="Your Name" />
            <br />
            <input type="email" placeholder="Your email address" />
            <br />
            <textarea placeholder="Your message"></textarea>
            <br />
            <button>Send Message</button>
            <br />
            <span>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};

export default Contact;