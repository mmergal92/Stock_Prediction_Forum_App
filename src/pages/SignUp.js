import React from "react";

//Bootstrap

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function SignUp() {
  return (
    <div>
    <br />
    <h2>Get Started</h2>
    <h4 className="text-muted">Let's create your account.   </h4>
    <br />
    <br />

    <div className="border border-secondary rounded w-25 p-3 d-inline-flex justify-content-center"  >
        
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="string" placeholder="Enter Username" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        
        <hr/>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    
        
        <hr/>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the terms and privacy policy." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default SignUp;
