import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import ScoreKeep from './ScoreKeep';

function App() {

  return (
    <>
    {/* <h1>State-demo</h1> */}
      {/* <Counter /> */}
      {/* <ScoreKeeper/> */}
      {/* <EmojiClicker/> */}
      <ScoreKeep numPlayers={5} target={3}/>
      </>
  )
}

export default App
