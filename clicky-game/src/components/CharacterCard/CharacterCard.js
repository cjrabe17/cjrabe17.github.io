import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="character-card">
    <a onClick={() => props.selectCharacter(props.name)} className={props.currentScore === 0} >
      <img alt={props.name} src={props.image} className="img-responsive" />
    </a>
  </div>
);

export default CharacterCard;