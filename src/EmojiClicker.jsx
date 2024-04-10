import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function EmojiClicker() {
    const [emoji, setEmoji] = useState([{id:uuid(),sym:"😋"}]);
    const addEmoji = () => {
        setEmoji(oldEmoji => [...oldEmoji, {  id:uuid(),sym:"😉"}]);
    }
    return (
        <div>
            {emoji.map((e) => (
                <span key={e.id } style={{fontSize:"4rem"}} >{e.sym}</span>
            ))}

            <button onClick={addEmoji} >+</button>
        </div>
    )
}