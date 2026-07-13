import Scoreboard from './components/Scoreboard.jsx'
import Grid from './components/Grid.jsx'
import { use, useState } from "react"
import './styles/App.css'

export default function App() {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(name){
    const copy = [...clicked];
    if(copy.includes(name)){
      setClicked([]);
      resetScore();
    }else{
      copy.push(name);
      setClicked(copy);
      increaseScore();
    }
  }

  function increaseScore(){
    setScore(score + 1);

    if(score + 1 > highScore){
      setHighScore(score + 1);
    }
  }

  function resetScore(){
    setScore(0);
  }

  return (
    <>
      <h1 id="title">Pokemon Memory Game</h1>
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      <Grid length={38} handleClick={handleClick}></Grid>
    </>
  )
}