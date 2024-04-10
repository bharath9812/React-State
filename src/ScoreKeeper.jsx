import { useState } from "react";

function ScoreKeeper() {
    const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });
    function P1handleChange() {
        const newScores = { ...score, p1Score: score.p1Score + 1 }
        setScore(newScores);
    }

    function P2handleChange() {
        setScore((c) => {return {...c, p2Score: c.p2Score + 1}
});
    }
    return (
        <div>
            <h1>Player 1 : { score.p1Score}</h1>
            <h1>Player 2 : {score.p2Score}</h1>
            <button onClick={P1handleChange}>+1- P1</button>
            <button onClick={P2handleChange}>+1- P2</button>
        </div>
    )
}

export default ScoreKeeper;