// import 'semantic-ui-css/semantic.min.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import styles from './Contact.modules.css'

const SERVICE_ID = process.env.SERVICE_ID
const TEMPLATE_ID = process.env.TEMPLATE_ID
const USER_ID = process.env.USER_ID

const Contact = () => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };


  return (
    <>
      <div className={styles.introDiv}>
        <h1>Looking to connect?</h1> 
        <h1>I'd love to hear from you!</h1>
      </div>
      <div className='App'>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Enter Your Email Here'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Enter Your Name Here'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
    </>
  )
}

export default Contact