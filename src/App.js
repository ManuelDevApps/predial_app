import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu/Menu";
import FooterInfo from "./Footer/Footer";

function App() {
  return (
    <div>
      <Menu/>
      <FooterInfo />
    </div>
  );
}

export default App;
