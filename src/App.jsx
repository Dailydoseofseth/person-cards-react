import { useState } from "react";
import Button from "./components/Button";
import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  const [showBg, setShowBg] = useState(false);
  const [showCards, setShowCards] = useState(true);

  function handleClick() {
    setShowBg(!showBg);
    console.log("Button clicked!");
  }

  function handleCardsClick() {
    setShowCards(!showCards);
    console.log("SECOND Button clicked!");
  }

  return (
    <body
      style={{
        backgroundImage: showBg
          ? "url('https://i.gifer.com/origin/73/7370303fc26b3f29c54fdd6c7391e25a_w200.webp')"
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="header">
        <img
          src="https://i.gifer.com/origin/49/496f9a6a929b4f78bcf8cc15da25eabc_w200.webp"
          width="444"
          height="333"
          alt=""
          style={{
            border: "4px double darkgoldenrod",
            borderImage: `url("https://t3.ftcdn.net/jpg/04/52/26/48/360_F_452264873_lYS3HKT9PDTlgXUef1sfTuVFuLWi2eAg.jpg") 34 repeat`,
          }}
        />
        {/* <h1 style={{fontFamily: 'Bungee Spice'}}>Person Card Project: ...engage!</h1> */}
      </div>

      {showCards && (
        <>
          <PersonCard
            name={"Seth"}
            img="https://i.gifer.com/origin/73/732699ab07a8d8c5b8387bf85b5a5ef9_w200.webp"
            age={25}
            occupation={"Web Dev"}
            style={{
              border: "2px double #ccc",
              borderRadius: "11px",
              background: "#dddd",
              margin: "1rem",
              fontSize: "2rem",
            }}
          />
          <hr />
          <PersonCard
            name={"Amy"}
            img="https://i.gifer.com/origin/38/38e41eb81a16b877dbb3128438b457c4_w200.webp"
            age={25}
            occupation={"Nail Artist"}
            style={{
              border: "2px double #ccc",
              borderRadius: "11px",
              background: "#3ddd",
              margin: "1rem",
            }}
          />
          <hr />
          <PersonCard
            name={"Spider-Man"}
            img="https://i.gifer.com/origin/ae/ae147198120740fd65192ff093f6e92c_w200.webp"
            age={37}
            occupation={"Protector Of Earth"}
            style={{
              border: "2px double #ccc",
              borderRadius: "11px",
              background: "#d99d",
              margin: "1rem",
              fontSize: "2rem",
            }}
          />
        </>
      )}

      <Button
        text={showBg ? "Hide Background" : "Show Background"}
        onClick={handleClick}
        style={{
          background: "limegreen",
          border: "2px solid #3a3",
          borderRadius: "15px",
        }}
      />
      <hr />
      <Button
        text={showCards ? "Hide Cards" : "Show Cards"}
        onClick={handleCardsClick}
        style={{
          background: "coral",
          border: "2px solid #999",
          borderRadius: "15px",
        }}
      />
    </body>
  );
}

export default App;
