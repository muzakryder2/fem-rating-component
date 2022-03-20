import thankYouIcon from "../assets/images/illustration-thank-you.svg";

const ThankYouCard = ({ rating }) => {
  return (
    <div className="card">
      <div className="tycard__head">
        <img src={thankYouIcon} alt="thank you" />
      </div>
      <div className="tycard__body">
        <div className="tycard__body__rating">
          <p>You selected {rating} out of 5</p>
        </div>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYouCard;
