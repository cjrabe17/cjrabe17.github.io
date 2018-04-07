import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div>
      <a onClick={() => props.selectCharacter(props.character)} className={props.currentScore === 0}>
        <img alt={props.name} src={props.image} className="img-responsive" />
      </a>
  </div>
);

export default CharacterCard;