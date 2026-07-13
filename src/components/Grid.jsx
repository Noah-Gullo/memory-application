import { useEffect, useState } from "react";
import Card from "./Card.jsx"

export default function Grid({length}){
    const [pokemon, setPokemon] = useState([]);
    const randomPokemon = [];

    async function getRandomPokemon(){
        const randomKeys = [];
        for(let i = 1; i <= length; i++){
            randomKeys.push(i);
        }

        for(let i = 0; i < length; i++){
            const randomNumber = Math.round(Math.random() * randomKeys.length + 1);
            randomKeys.splice(randomNumber, 1);
            
            const url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber;
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`Response status: ${response.status}`);
                }
                const result = await response.json();
                randomPokemon.push({"name": result.name, "image": result.sprites["front_default"]});
            } catch(error){
                console.log(error.message);
            }
        }

        setPokemon(randomPokemon);
    }

    useEffect(() => {
        getRandomPokemon();
        return () =>  {[]};
    }, []);

    return (
        <>
            {pokemon.map(pokemon => {
                <Card name={pokemon.name}></Card>
            })}
        </>
    )
}