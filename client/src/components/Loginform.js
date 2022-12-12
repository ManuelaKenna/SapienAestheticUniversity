import React from 'react';
import { Form, Button } from 'react-bootstrap';

// import Auth from '../utils/Auth';

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        name="password"
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        label="Remember me" 
        />
      </Form.Group>
      
      <Button 
        variant="primary" 
        type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;