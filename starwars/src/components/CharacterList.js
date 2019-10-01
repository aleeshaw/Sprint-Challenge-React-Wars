import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import styled from 'styled-components';

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CharacterList = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const charList = await axios.get('https://swapi.co/api/people');

        setCharacter(charList.data.results);
      } catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ListDiv>
      {characters.map(char => {
        return (
          <CharacterCard
            name={char.name}
            gender={char.gender}
            birth_year={char.birth_year}
            height={char.height}
            eye_color={char.eye_color}
            />
        );
      })}
    </ListDiv>
  );
};

export default CharacterList;