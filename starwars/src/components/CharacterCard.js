import React from 'react';

const CharacterCard = (props) => {
  return (
    <div className="char-card">

      <h1 className="char-name">{props.name}</h1>

      <div className="char-info">
        <p>Gender: {props.gender}</p>
        <p>DOB: {props.birth_year}</p>
        <p>Height: {props.height}cm</p>
        <p>Eye Color: {props.eye_color}</p>
      </div>

    </div>
  );
};

export default CharacterCard;