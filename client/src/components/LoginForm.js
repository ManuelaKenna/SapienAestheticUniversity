import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/Mutations";

import Auth from "../utils/Auth";


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
    creator: false,
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (userFormData.creator === true) {
      // sign in as creator
    } else {
      try {
        const { data } = await loginUser({
          variables: { ...userFormData },
        });

        Auth.login(data.login.token);
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
    }
    setUserFormData({
      email: "",
      password: "",
      creator: false,
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials! Try again!
        </Alert>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 py-2" controlId="formBasicCreator">
          <Form.Label>Instructor?</Form.Label>
          <Form.Check
            className="p-4 py-2"
            type="checkbox"
            name="creator"
            onChange={handleInputChange}
            value={true}
          />
        </Form.Group>

        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
