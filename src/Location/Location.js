import React, { Component } from "react";
import {Button, Form, Image} from "react-bootstrap";

export default class Location extends Component {
    render() {
        return (
            <div className="col-6 box6">
                <h2 className="text-center">Encuentra el modulo mas cercano!</h2>
                <br/>
                <br/>
                <Image className="img-fluid" src="http://www.rubenalcaraz.es/pinakes/wp-content/uploads/2015/01/marcadores.png"/>
                <br/>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Codigo Postal</Form.Label>
                        <Form.Control type="text" placeholder="codigo postal" />
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="primary" type="submit" href="/dashboard">
                            Buscar
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}