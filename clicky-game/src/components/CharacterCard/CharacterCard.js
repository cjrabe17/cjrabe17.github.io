import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <img alt={props.name} src={props.image} className="img-responsive" />
);

export default CharacterCard;