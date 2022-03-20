import starIcon from "../assets/images/icon-star.svg";

const RatingCard = ({ rating, setRating, setIsThankYou }) => {
  return (
    <div className="card">
      <div className="card__head">
        <img src={starIcon} alt="" />
      </div>
      <div className="card__body">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="card__button-group">
          {[1, 2, 3, 4, 5].map((val) => (
            <button
              key={val}
              number={val}
              className={`rating-btn ${
                rating === val ? "rating-btn--selected" : null
              }`}
              onClick={() => setRating(val)}
            >
              {val}
            </button>
          ))}
        </div>
        <button
          className="card__submit-btn"
          onClick={() => setIsThankYou(true)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingCard;
