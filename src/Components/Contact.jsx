import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_uzvb8pd', 'template_lk15u88', e.target, 'user_BzMEARrzxLNRHT8X3zFqq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div id='contact'>
        <div className='left-side'>
            <h1>CONTACT US</h1>
            <h3>We would love to hear from you.</h3>
        </div>
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="number" placeholder='Phone Number'  name="contact_number" required/>
                <input type="text" placeholder='Full Name'  name="user_name" required />
                <input type="email" placeholder='Type Your Email' name="user_email" required />
                <textarea name="message" required />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
  );
}