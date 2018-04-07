import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <div className="jumbotron">
        <h1>Despicable Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </div>
  );
};

export default Jumbotron;