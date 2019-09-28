import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  background-color: rgba(225, 225, 225, .75);
  width: 20%;
  height: 30%;
  margin: 10px;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  background-color: brown;
`;

const CharInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterCard = (props) => {
  return (
    <CardDiv className="char-card">

      <H1 className="char-name">{props.name}</H1>

      <CharInfoDiv className="char-info">
        <p>Gender: {props.gender}</p>
        <p>DOB: {props.birth_year}</p>
        <p>Height: {props.height}cm</p>
        <p>Eye Color: {props.eye_color}</p>
      </CharInfoDiv>

    </CardDiv>
  );
};

export default CharacterCard;