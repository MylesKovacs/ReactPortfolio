// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
    <div class="mx-auto" style={{ margin: 'auto'}}>Contact</div>
    <div class="card mx-auto m-5 shadow-lg p-3 mb-5 bg-body rounded" style = {{ width: '50%'}}> 
      
      <div class="mb-3">
      <label for="nameInput" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" id="nameInput" placeholder="Jon Doe" defaultValue={name} onBlur={handleChange}  />

        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" defaultValue={email} onBlur={handleChange} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" defaultValue={message} onBlur={handleChange} ></textarea>
      </div>
      {errorMessage && (
          <div className="mx-auto">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      <button class="btn btn-success" type="button">Send Message</button>
    </div>
    </div>
    

  );
}

export default ContactForm;

    // <section>
    //   <h1 data-testid="h1tag">Contact me</h1>
    //   <form id="contact-form" onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email address:</label>
    //       <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button data-testid="button" type="submit">Submit</button>
    //   </form>
    // </section>