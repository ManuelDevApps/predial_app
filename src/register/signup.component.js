import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class SignUp extends Component {
  render() {
    return (
      <div className="col-6 box6">
        <h2 className="text-center">Registrarme</h2>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control type="text" placeholder="Nombres(s)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control type="email" placeholder="A. paterno" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control type="email" placeholder="A. materno (opcional)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="tel" placeholder="55 55 55 55 55" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="text-end">
            <Button variant="primary" type="submit" href="/dashboard">
              Siguiente
            </Button>

            <br />
            <br />
            <h8>Ya tienes una cuenta? </h8>
            <a href="/login">iniciar</a>
          </div>
        </Form>
      </div>
    );
  }
}
