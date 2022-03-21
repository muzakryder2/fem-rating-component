import { motion } from "framer-motion";

import thankYouIcon from "../assets/images/illustration-thank-you.svg";

const ThankYouCard = ({ rating }) => {
  const variants = {
    hidden: {
      transform: "translate(500%, -50%)",
    },
    visible: {
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="card"
    >
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
    </motion.div>
  );
};

export default ThankYouCard;
