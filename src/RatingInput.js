import { useState } from "react";

const RatingInput = ({ game }) => {
  const [score, setScore] = useState(game.rating || 0);

  return (
    <select value={score} onChange={(e) => setScore(Number(e.target.value))}>
      {[...Array(11).keys()].slice(1).map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
};

export default RatingInput;
