import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div className="col-6 box6">
          <h2 className="text-center">Iniciar Sesion</h2>
          <br/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember" />
          </Form.Group>
          <div className="text-end">
          <Button variant="primary" type="submit" href="/dashboard">
            Login
          </Button>

          <br/>
          <br/>
          <h8>Aun no tienes una cuenta? </h8><a href="/register">registrarme</a>
            <br/>
            <br/>
            <a href="/reset">olvide mi contraseña</a>
          </div>
        </Form>
      </div>
    );
  }
}
