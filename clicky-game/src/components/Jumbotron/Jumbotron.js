import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <div>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>
  );
};

export default Jumbotron;