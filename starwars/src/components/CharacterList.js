import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

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
    <div>
      {characters.map(char => {
        return (
          <CharacterCard
            name={char.name}
            birth_year={char.birth_year}
            homeworld={char.homeworld}
            films={char.films}
            />
        );
      })}
    </div>
  );
};

export default CharacterList;