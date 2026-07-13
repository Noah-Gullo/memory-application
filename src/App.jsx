import Scoreboard from './components/Scoreboard.jsx'
import Grid from './components/Grid.jsx'
import './styles/App.css'

export default function App() {

  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <Scoreboard></Scoreboard>
      <Grid length={25}></Grid>
    </>
  )
}