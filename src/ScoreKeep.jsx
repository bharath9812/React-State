import { useState } from "react"

export default function ScoreKeep({ numPlayers = 3, target = 3 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    //                              approach-1

    // const incrementScore = (idx) => {
    //     setScores(prevScore => {
    //         const copy = [...prevScore];
    //         copy[idx] += 1;
    //         return copy;
    //     })
    // }

    //                              approach-2
    const incrementScore = (idx) => {
        setScores(prevScore => {
            return prevScore.map((score, i) => {
                if (i === idx) return score + 1;
                return score;
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}>Player-{idx + 1} : {score}
                            <button onClick={() => incrementScore(idx)}>+</button>
                            { score >= target && "WINNER" }
                    </li>
                    )

                })}
            </ul>
            <button onClick={reset} >Reset</button>
        </div>
    )
}