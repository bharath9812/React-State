import { useState } from "react";

export default function EmojiClicker() {
    const [emoji, setEmoji] = useState(["😋"]);
    const addEmoji = () => {
        setEmoji(oldEmoji => [...oldEmoji, "😉"]);
    }
    return (
        <div>
            {emoji.map((e) => (
                <span style={{fontSize:"4rem"}} >{e}</span>
            ))}

            <button onClick={addEmoji} >+</button>
        </div>
    )
}