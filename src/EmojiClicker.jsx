import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function EmojiClicker() {

    function randEmoji() {
        const emojis = ["😀", "😂", "🤣", "😉", "😍", "😇"];
        return emojis[Math.floor(Math.random() * emojis.length)];
        
    }

    const [emoji, setEmoji] = useState([{id:uuid(),sym:randEmoji()}]);
    const addEmoji = () => {
        setEmoji(oldEmoji => [...oldEmoji, {  id:uuid(),sym:randEmoji()}]);
    }
    const deleteEmoji = (id) => {
        // setEmoji(prevEmoji => {
        //     return prevEmoji.filter((e) => e.id !== id);
        // })
        setEmoji(prevEmoji => prevEmoji.filter((e) => e.id !== id))
    }
    return (
        <div>
            {emoji.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontSize: "4rem" }}>
                    
                    {e.sym}
                </span>
            ))}

            <button onClick={addEmoji} >+</button>
        </div>
    )
}