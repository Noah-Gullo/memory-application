import { useState } from "react";
export default function Scoreboard({score, highScore}){

    return (
        <>
            <p id="currentScore">Current Score: {score}</p>
            <p id="highScore">High Score: {highScore}</p>
        </>
    )
}