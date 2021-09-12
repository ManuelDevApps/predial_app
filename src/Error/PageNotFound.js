import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";

export default class Page404 extends Component {
  render() {
    return (
        <Container>
            <br/>
            <br/>
            <h1 className="text-center">OPPSS</h1>
            <h2 className="text-center">Page not found 404</h2>
            <div className="text-center">
            <Image rounded className="img-fluid" src="https://puntorojo.com/blog/wp-content/uploads/2019/05/error-404-leve-this-is-fine.png"></Image>
            </div>
        </Container>
    );
  }
}
