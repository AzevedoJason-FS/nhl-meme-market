import React, { useRef, useState  } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [stateMessage, setStateMessage] = useState(null);
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cl4m0s9", "template_ex61dq3", form.current, {
        publicKey: "iTReAF1ZASUODvXpZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage('We have receieved your request, Our team will get in touch with you ASAP. Thank you')
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="quick-form">
      <label>Email</label>
      <input type="email" name="reply_to" className="field"/>
      <input type="submit" value="Send" className="btn"/>
      {message && <p className="success-message" style={{color: 'white'}}>{message}</p>}
    </form>
  );
};
export default ContactForm;
