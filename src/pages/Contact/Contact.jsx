import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
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
        Swal.fire({
          icon: 'success',
          title: 'Thanks for reaching out!'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
      e.target.reset();
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} id="contact">
      <h1 className={styles.contact}>Contact Me</h1>
        <label>Name:</label>
          <input type="text" name="user_name" placeholder='Name...'/>
        <label>Email:</label>
          <input type="email" name="user_email" placeholder="Email..."/>
        <label>Message:</label>
          <textarea name="message" placeholder="Message..."/>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default Contact