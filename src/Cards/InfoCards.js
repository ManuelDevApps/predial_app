import React, { Component } from "react";
import { Container, Image, Card, Button } from "react-bootstrap";

export default class InfoCards extends Component {
  render() {
    return (
      <Card className="col-4">
        <Card.Img variant="top" src="https://www.informador.mx/__export/1572866060048/sites/elinformador/img/2019/11/04/imagen_loc_casas_infonavit_especial_crop1572865299778.jpg_554688468.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
          <Button variant="primary">Info</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
