import React, { Component } from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import InfoCards from "../Cards/InfoCards";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Business Name or Tagline</h1>
            <p>
              This is a template that is great for small businesses. It doesn't
              have too much fancy flare to it, but it makes a great use of the
              standard Bootstrap core components. Feel free to use this template
              for any project you want!
            </p>
            <a className="btn btn-primary" href="#!">
              Call to Action!
            </a>
          </div>
        </div>

        <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">
              This call to action card is a great place to showcase some
              important information or display a clever tagline!
            </p>
          </div>
        </div>
          <div className="boxService col-6 col-sm-4 col-md-12">
              <Row >
                  <Col>
                      <InfoCards title="Infonavit" img="https://definicion.de/wp-content/uploads/2009/02/condominio.jpg" des="Revisa tus historial de pagos"/>
                  </Col>
                  <Col>
                      <InfoCards title="Foviste" img="https://i.pinimg.com/originals/9f/d4/65/9fd46570f637ba42c7a40baa18648816.jpg" des="Revisa tus historial de pagos"/>
                  </Col>
                  <Col>
                      <InfoCards title="Hipoteca?" img="https://i.ytimg.com/vi/s9wmWSSOiVU/maxresdefault.jpg" des="ubica una unidad cerca de tu casa"/>
                  </Col>
              </Row>
          </div>
      </div>
    );
  }
}
