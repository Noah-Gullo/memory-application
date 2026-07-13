import Scoreboard from './components/Scoreboard.jsx'
import Grid from './components/Grid.jsx'
import { useState } from "react"
import './styles/App.css'

export default function App() {
  const [clicked, setClicked] = useState([]);

  function handleClick(name){
    const copy = [...clicked];
    if(copy.includes(name)){
      console.log("FOUND " + name);
    }else{
      console.log("ADDED " + name);
      copy.push(name);
    }

    setClicked(copy);
  }

  return (
    <>
      <h1 id="title">Pokemon Memory Game</h1>
      <Scoreboard></Scoreboard>
      <Grid length={10} handleClick={handleClick}></Grid>
    </>
  )
}