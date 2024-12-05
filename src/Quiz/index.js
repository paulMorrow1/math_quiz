import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const STEPS = {
  AMOUNT_OF_QUESTIONS: "AMOUNT_OF_QUESTIONS",
  QUIZ: "QUIZ",
  RESULTS: "RESULTS",
};

export default function Quiz() {
  const [step, setStep] = React.useState(STEPS.AMOUNT_OF_QUESTIONS);
  const [amountOfQuestions, setAmountOfQuestions] = React.useState(10);
  const [questions, setQuestions] = React.useState(null);
  const [amountCorrect, setAmmountCorrect] = React.useState(0);

  const randomNumberGenerator = (n = 101) => {
    const num = Math.floor(Math.random() * n);
    return num;
  };

  const randomOperatorGenerator = () => {
    const randomNum = randomNumberGenerator(3);
    const operators = ["+", "-", "*", "/"];
    return operators[randomNum];
  };

  const operators = {
    "+": (input1, input2) => input1 + input2,
    "-": (input1, input2) => input1 - input2,
    "*": (input1, input2) => input1 * input2,
    "/": (input1, input2) => input1 / input2,
  };

  const addUserAnswer = (useranswer, id) => {
    const updatedAnswers = questions.map((q) => {
      if (q.id === id) {
        return {
          ...q,
          user_answer: Number(useranswer),
        };
      }
      return q;
    });
    setQuestions(updatedAnswers);
  };

  const goToQuiz = () => {
    const qs = Array.from({ length: amountOfQuestions }, () => {
      const input1 = randomNumberGenerator();
      const operator = randomOperatorGenerator();
      const input2 = randomNumberGenerator();
      return {
        id: uuidv4(),
        input1,
        operator,
        input2,
        answer: operators[operator](input1, input2),
        user_answer: "",
      };
    });
    setQuestions(qs);
    setStep(STEPS.QUIZ);
  };

  React.useEffect(() => {
    if (step === STEPS.RESULTS) {
      const correctAnswers = questions.filter((q) => {
        if (q.answer === q.user_answer) return q;
        return null;
      });
      setAmmountCorrect(correctAnswers.length);
    }
  }, [step]);

  return (
    <>
      <h1>Quiz</h1>
      {step === STEPS.AMOUNT_OF_QUESTIONS ? (
        <div>
          <p>Please select amount of questions</p>
          <select
            value={amountOfQuestions}
            onChange={(e) => setAmountOfQuestions(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <button onClick={goToQuiz}>Submit</button>
        </div>
      ) : null}
      {step === STEPS.QUIZ ? (
        <div>
          {questions.map((question) => (
            <div key={question.id}>
              <p>
                {`${question.input1} ${question.operator} ${question.input2} =`}
              </p>
              <input
                type="text"
                value={question.user_answer}
                onChange={(e) => addUserAnswer(e.target.value, question.id)}
              />
            </div>
          ))}
          {questions.every((q) => q.user_answer !== "") ? (
            <button onClick={() => setStep(STEPS.RESULTS)}>
              Submit Answers
            </button>
          ) : null}
        </div>
      ) : null}
      {step === STEPS.RESULTS ? (
        <div>
          <p>
            You got {amountCorrect}/{questions.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
