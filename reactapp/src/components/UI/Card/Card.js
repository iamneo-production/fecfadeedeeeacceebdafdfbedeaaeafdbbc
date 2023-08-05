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
    if (qsnAttempt === 4) {
      setCard(true);
    }
    if (clicked === answer) correctAnswerMarkUpdate(attempt + 1);
  };
  const norm = "bg-orange-300 px-2 py-1 rounded hover:bg-orange-400";
  const disabled = "bg-orange-300 px-2 py-1 rounded disabled:opacity-50";
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
