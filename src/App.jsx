import Scoreboard from './components/Scoreboard'
import './styles/App.css'

export default function App() {
  async function generatePokemon(length){
    const randomKeys = [];
    const randomPokemon = new Map();

    for(let i = 0; i < length; i++){
      const randomNumber = Math.round(Math.random() * 1025 + 1);
      while(randomKeys.includes(randomNumber)){
        randomNumber = Math.round(Math.random() * 1025 + 1);
      }

      randomKeys.push(randomNumber);
      const url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber;

      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        randomPokemon.set(result.name, result.sprites["front_default"]);
      } catch(error){
        console.log(error.message);
      }
    }
    return randomPokemon;
  }

  console.log(map);
  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <Scoreboard />
    </>
  )
}