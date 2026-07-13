import { useState } from "react";
export default function Scoreboard(){
    const [score, setScore] =  useState(0);
    const [highScore, setHighScore] = useState(0);

    function increaseScore(){
        const newScore = score + 1;
        setScore(newScore);
        if(newScore > highScore){
            setHighScore(newScore);
        }
    }

    function resetScore(){
        setScore(0);
    }

    return (
        <>
            <p id="currentScore">Current Score: {score}</p>
            <p id="highScore">High Score: {highScore}</p>
        </>
    )
}