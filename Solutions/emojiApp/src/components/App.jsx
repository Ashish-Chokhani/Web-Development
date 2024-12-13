import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiPedia =>( 
          <Entry
            key={emojiPedia.id}
            emoji={emojiPedia.emoji}
            name={emojiPedia.name}
            meaning={emojiPedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
