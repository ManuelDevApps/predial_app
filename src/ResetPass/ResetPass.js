import React, { Component } from "react";
import {Button, Form} from "react-bootstrap";

export default class ResetPass extends Component {
    render() {
        return (
            <div className="col-6 box6">
                <h2 className="text-center">Recuperar contraseña</h2>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Curp</Form.Label>
                        <Form.Control type="text" placeholder="ingresa tu curp" />
                    </Form.Group>

                    <h9>Se te enviara un codigo a tu correo para restablecer tu contraseña.</h9>
                    <div className="text-end">
                        <Button variant="primary" type="submit" href="/dashboard">
                            Enviar
                        </Button>

                        <br/>
                        <br/>
                        <a href="/login">regresar</a>
                    </div>
                </Form>
            </div>
        );
    }
}