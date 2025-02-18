import React, { useState } from 'react'

const RandomEmojiGen = () => {
    const emoji=["🐒","😘","💕","😉","😎","💖","👍","😁","😍","❤️"];
    const [selectedEmojis,setSelectedEmojis]=useState();

    const randomEmoji=()=>{
        const randomIndex=Math.floor(Math.random()*emoji.length);
        setSelectedEmojis(emoji[randomIndex]);
    }
  return (
    <div>Random Emoji Generator
      <div style={{fontSize:"55px"}}>{selectedEmojis}</div>
      <button onClick={randomEmoji}>Generate emoji</button>
    </div>
  )
}

export default RandomEmojiGen