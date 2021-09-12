import React, { Component } from "react";

export default class FooterInfo extends Component {
  render() {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <img src="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icon-Face.png" className="redSocial fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <img src="https://sfpya.edomexico.gob.mx/predial/imagenes/Plataforma02/Icon-Twiiter.png" className="fab fa-twitter redSocial "/>
              </a>
              <a href="" className="me-4 text-reset">
                <img src="https://www.tuexpertoapps.com/wp-content/uploads/2018/06/instagram-no-alertara-si-haces-capturas-stories-01.jpg.webp" className="fab fa-instagram redSocial "/>
              </a>
              <a href="" className="me-4 text-reset">
                <img src="http://www.marketing-branding.cl/wp-content/uploads/2014/02/linkedin-logo-marketingbuilding.png" className="fab fa-linkedin redSocial "/>
              </a>

            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"/>Predial Gob
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Instituciones</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      SAT
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      CONDUSEF
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      IMSS
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      ISSTE
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Abaout
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Campañas
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Pagos
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Ayuda
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
              className="text-center p-4"
              style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="/">
              predial.gob.mx
            </a>
          </div>
        </footer>
    );
  }
}
