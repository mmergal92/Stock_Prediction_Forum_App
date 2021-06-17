import React from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn() {
    return (
        <div className="bg-dark">
            <br />
    <h2>Welcome Back!</h2>
    <br />
    <br />
        <div className="border border-secondary rounded w-200px p-3 d-inline-flex justify-content-center bg-light"  >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
      </div>
    )
}

export default SignIn
