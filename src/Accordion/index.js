import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";
// import cn from 'classnames';
import "./index.css";

export default function Accordion({ question, answer }) {
  const [isQuestionOpen, setIsQuestionOpen] = React.useState(false);
  return (
    <div className="accordion-container">
      <div
        className="question-container"
        onClick={() => setIsQuestionOpen((prev) => !prev)}
      >
        <p className="question">{question}</p>
        <IoIosArrowForward className={`icon ${isQuestionOpen ? "open" : ""}`} />
        {/* <IoIosArrowForward className={cn('icon', { open: isQuestionOpen })} /> */}
      </div>
      <div className={`answer-container ${isQuestionOpen ? "open" : ""}`}>
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
