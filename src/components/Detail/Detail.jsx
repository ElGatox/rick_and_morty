import React from "react";
import  Axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";




const Detail = () =>{
    const [character,setCharacter] = useState({});
    const {id} = useParams()
    useEffect (() => {
        Axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
         }, [id]);
         return (
            <div>
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
                <img src={character.image} alt="img" />
            </div>
         )
}

export default Detail