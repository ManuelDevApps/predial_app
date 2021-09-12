import React, { Component } from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import InfoCards from "../Cards/InfoCards";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <h1 className="text-center">Bienvenido Usuario</h1>
                <br/>
                <div className="boxService col-6">
                    <Row>
                        <Col>
                            <InfoCards title="Pagar" img="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icono-consultapago.png" des="Realiza el pago!"/>
                        </Col>
                        <Col>
                            <InfoCards title="Consultar pagos" img="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icono-validacion.png" des="Revisa tus historial de pagos"/>
                        </Col>
                        <Col>
                            <InfoCards title="Ubicanos" img="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icono-Centros-Pago.png" des="ubica una unidad cerca de tu casa"/>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <InfoCards title="Facturar" img="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icono-formulario-pago.png" des="Factura tus pagos"/>
                        </Col>
                        <Col>
                            <InfoCards title="Consultar pagos" img="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icono-validacion.png" des="Revisa tus historial de pagos"/>
                        </Col>
                        <Col>
                            <InfoCards title="Ubicanos" img="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icono-Centros-Pago.png" des="ubica una unidad cerca de tu casa"/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
