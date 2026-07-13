import { useState } from "react";
export default function Scoreboard({score, highScore}){

    return (
        <div id="scoreboard">
            <p id="currentScore">Current Score: {score}</p>
            <p id="highScore">High Score: {highScore}</p>
        </div>
    )
}