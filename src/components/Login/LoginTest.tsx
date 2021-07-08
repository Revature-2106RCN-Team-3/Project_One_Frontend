import React, { FormEvent, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";

//import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Form inline>
      <Row>
        <Col>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="Password"
            />
          </FormGroup>
        </Col>
        <Col>
        <Button>Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
