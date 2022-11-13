import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import styles from './Contact.modules.css'


const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const PUBLIC_KEY = process.env.PUBLIC_KEY;

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
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.connect}>
          <h1>Looking to connect? I'd love to hear from you!</h1>
        </div>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact