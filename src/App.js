import "./styles.css";
import React, { useState } from "react";

const emojiDict = {
  "😀": "Grinning Face",
  "🤗": "Hugging Face",
  "😖": "Tired Face",
  "😕": "Confused Face",
  "😪": "Sleepy Face",
  "🤣": "Rolling on the floor Laughing",
  "🥺": "Pleading Face",
  "😲": "Astonised Face",
  "🤒": "Sick",
  "😱": "Screaming in Fear"
};

var emojiArray = Object.keys(emojiDict);

export default function App() {
  const [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("Translation will appear here..");

  function findMeaning(event) {
    var input = event.target.value;
    setEmoji(input);

    if (input in emojiDict) meaning = setMeaning(emojiDict[input]);
    // else if (meaning == undefined) {
    //   meaning = "Sorry we do not have this emoji in our Database";
    // }
    else {
      setMeaning("Sorry we do not have this emoji in our Database");

      // setMeaning(meaning);
      // console.log(meaning);
    }
  }

  function emojiSelector(item) {
    var meaning = emojiDict[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Meaning Finder</h1>
      <div class="input-box" style={{ minWidth: "80%" }}>
        <input onChange={findMeaning} value={emoji}></input>
      </div>
      <h2>{emoji} </h2>
      <h3>{meaning}</h3>
      {/* <div id="emojiArray"> */}
      Emojis in our DB:
      {emojiArray.map((item) => {
        return <span onClick={() => emojiSelector(item)}> {item} </span>;
      })}
    </div>
    // </div>
  );
}
