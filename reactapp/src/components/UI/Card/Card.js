import { useState } from "react";
import Button from "../Button/Button";

const Card = ({
  question,
  correctAnswerMarkUpdate,
  attempt,
  options,
  answer,
  setQsns,
  qsn,
  setCard,
  qsnAttempt,
}) => {
  const optionArray = [
    options.option1,
    options.option2,
    options.option3,
    options.option4,
  ];
  const [marked, setMarked] = useState(false);
  const click = (clicked) => {
    setQsns(qsn + 1);
    setMarked(true);
    console.log("hello")
    if (qsnAttempt === 4) {
      setCard(true);
    }
    if (clicked === answer) correctAnswerMarkUpdate(attempt + 1);
  };
  const norm = {
    backgroundColor: '#FFA500', // bg-orange-300
    paddingLeft: '2px',        // px-2
    paddingRight: '2px',       // px-2
    paddingTop: '1px',         // py-1
    paddingBottom: '1px',      // py-1
    borderRadius: '0.25rem',   // rounded
    ':hover': {                // hover:bg-orange-400
      backgroundColor: '#FF8C00',
    }}
  const disabled = {
    backgroundColor: '#FFA500',    // bg-orange-300
    paddingLeft: '2px',            // px-2
    paddingRight: '2px',           // px-2
    paddingTop: '1px',             // py-1
    paddingBottom: '1px',          // py-1
    borderRadius: '0.25rem',       // rounded
    opacity: '0.5',                // disabled:opacity-50
  }
  return (
    <div>
      <h4 className="pt-3 pb-1">{question}</h4>
      <div className="flex space-x-2">
        {optionArray.map((option, index) => (
          <Button
            key={index}
            marked={marked}
            onclick={() => click(option)}
            style={!marked ? norm : disabled}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Card;
