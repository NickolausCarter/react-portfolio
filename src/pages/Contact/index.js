import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../assets/css/contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-header'>Send me a message.</div>
      <Form>
        <Form.Group controlId='FormGroupName'>
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control type='text' placeholder='Your name' />
        </Form.Group>
        <Form.Group controlId='FormGroupEmail'>
          <Form.Label>Enter your email:</Form.Label>
          <Form.Control type='email' placeholder='email@example.com' />
        </Form.Group>
        <Form.Group controlId='FormGroupMessage'>
          <Form.Label>Message:</Form.Label>
          <Form.Control as='textarea' rows={7} />
        </Form.Group>
      </Form>
      <Button variant='primary'>Send</Button>
    </div>
  )
};

export default Contact;