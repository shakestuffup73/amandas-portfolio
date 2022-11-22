import { useRef } from 'react';
import emailjs from 'emailjs-com'
import styles from './Contact.modules.css'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
    <div className={styles.gridContainer4}>
      <h1>Contact Me</h1>
      <label>Name:</label>
        <input type="text" name="user_name" />
      <label>Email:</label>
        <input type="email" name="user_email" />
      <label>Message:</label>
        <textarea name="message" placeholder="Drag bottom-right corner to expand text area"/>
      <button type="submit" value="Send">Send Email</button>
    </div>
    </form>
    </>
  );
};

export default Contact