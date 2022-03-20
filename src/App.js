import { useState } from "react";

import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

const App = () => {
  const [isThankYou, setIsThankYou] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <div>
      {!isThankYou ? (
        <RatingCard
          setIsThankYou={setIsThankYou}
          rating={rating}
          setRating={setRating}
        />
      ) : (
        <ThankYouCard rating={rating} />
      )}

      <div class="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            {" "}
            Frontend Mentor
          </a>
          . Coded by <a href="#">Daniel Castillo</a>.
        </p>
      </div>
    </div>
  );
};

export default App;
