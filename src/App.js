import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

const App = () => {
  const [isThankYou, setIsThankYou] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {!isThankYou ? (
          <RatingCard
            key="ratingCard"
            setIsThankYou={setIsThankYou}
            rating={rating}
            setRating={setRating}
          />
        ) : (
          <ThankYouCard key="tyCard" rating={rating} />
        )}
      </AnimatePresence>

      <div className="attribution">
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
