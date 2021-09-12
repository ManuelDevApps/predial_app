import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../login/login.component";
import SignUp from "../register/signup.component";
import Landing from "../Landing/LandingPage";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Page404 from "../Error/PageNotFound";
import Dashboard from "../dashboard/Dashboard";
import ResetPass from "../ResetPass/ResetPass";
import About from "../About/About";
import LocatioApp from "../Location/Location"
import Campains from "../Campains/Campains";

export default class Menu extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Programa Predial</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/about">Informacion</Nav.Link>
                <Nav.Link href="/location">Ubicanos</Nav.Link>
                <Nav.Link href="/campains">Campañas de Descuento</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/register">Sing up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/reset" component={ResetPass}/>
          <Route path="/about" component={About}/>
          <Route path="/campains" component={Campains}/>
          <Route path="/location" component={LocatioApp}/>
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}
