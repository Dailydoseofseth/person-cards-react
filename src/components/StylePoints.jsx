import { useState } from "react";

function StylePoints({ name }) {
  const [points, setPoints] = useState(0);

  return (
    <div>
      <p style={{ fontSize: "3rem" }}>
        ✨ {name}'s Style Points: {points}
      </p>
      <button onClick={() => setPoints(points + 1)}>+ Drip</button>
      <button onClick={() => setPoints(points - 1)}>- Drip</button>
    </div>
  );
}

export default StylePoints;
