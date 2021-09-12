import React, { Component } from "react";
import {  Card, Button } from "react-bootstrap";

export default class InfoCards extends Component {
  render() {
    return (
      <Card className="cardInfo">
        <Card.Img variant="top" src={this.props.img} style={{height:'200px'}}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.des}</Card.Text>
          <div className="text-center">
          <Button variant="primary">Info</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
