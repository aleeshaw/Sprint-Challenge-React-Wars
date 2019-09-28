import React from 'react';

const CharacterCard = (props) => {
  return (
    <div className="char-card">

      <h1 className="char-name">{props.name}</h1>

      <div className="char-info">
        <p>DOB: {props.birth_year}</p>
        <p>Home World: {props.homeworld}</p>
        <p>Film Appearances: {props.films}</p>
      </div>

    </div>
  );
};

export default CharacterCard;