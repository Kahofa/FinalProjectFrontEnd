import { useState } from "react";
import "./Rating.css"; 

const Rating = ({ game }) => {
  const [rating, setRating] = useState(game.rating || 0);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
