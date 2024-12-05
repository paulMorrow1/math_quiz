import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const STEPS = {
  AMOUNT_OF_QUESTIONS: "AMOUNT_OF_QUESTIONS",
  QUIZ: "QUIZ",
  RESULTS: "RESULTS",
};

const operators = {
  "+": (input1, input2) => input1 + input2,
  "-": (input1, input2) => input1 - input2,
  "*": (input1, input2) => input1 * input2,
  "/": (input1, input2) => input1 / input2,
};

export default function Quiz() {
  const [step, setStep] = React.useState(STEPS.AMOUNT_OF_QUESTIONS);
  const [amountOfQuestions, setAmountOfQuestions] = React.useState(10);
  const [questions, setQuestions] = React.useState(null);

  const generateRandomNumber = (num = 101) => {
    const number = Math.floor(Math.random() * num);
    return number;
  };

  const generateRandomOperator = () => {
    const randomOp = generateRandomNumber(3);
    const operator = ["+", "-", "*", "/"];
    return operator[randomOp];
  };

  const goToQuiz = () => {
    const arrayOfQuestions = Array.from({ length: amountOfQuestions }, () => {
      const input1 = generateRandomNumber();
      const operator = generateRandomOperator();
      const input2 = generateRandomNumber();
      return {
        id: uuidv4(),
        input1,
        operator,
        input2,
        answer: operators[operator](input1, input2),
        user_answer: "",
      };
    });
    setQuestions(arrayOfQuestions);
    setStep(STEPS.QUIZ);
  };

  const addUserInput = (userAnswer, id) => {
    const updatedAnswer = questions.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          user_answer: Number(userAnswer),
        };
      }
      return question;
    });
    setQuestions(updatedAnswer);
  };

  const amountCorrect = React.useMemo(
    () =>
      questions?.filter((question) => {
        if (question.user_answer === question.answer) return question;
        return null;
      })?.length,
    [questions]
  );

  return (
    <>
      {step === STEPS.AMOUNT_OF_QUESTIONS ? (
        <div>
          <h1>Choose amount of questions</h1>
          <select
            value={amountOfQuestions}
            onChange={({ target }) =>
              setAmountOfQuestions(Number(target.value))
            }
          >
            {[...Array(100).keys()]
              .map((num) => (num += 1))
              .map((num) => (
                <option key={num}>{num}</option>
              ))}
          </select>
          <button onClick={goToQuiz}>Start Quiz</button>
        </div>
      ) : null}
      {step === STEPS.QUIZ ? (
        <div>
          <h1>Quiz</h1>
          {questions.map((question) => (
            <div key={question.id}>
              <p>{`${question.input1} ${question.operator} ${question.input2} =`}</p>
              <input
                type="text"
                value={question.user_answer}
                onChange={({ target }) =>
                  addUserInput(target.value, question.id)
                }
              />
            </div>
          ))}
          {questions.every((q) => q.user_answer !== "") ? (
            <button onClick={() => setStep(STEPS.RESULTS)}>Submit</button>
          ) : null}
        </div>
      ) : null}
      {step === STEPS.RESULTS ? (
        <div>
          <h1>Results</h1>
          <p>
            Your score is {amountCorrect}/{amountOfQuestions}
          </p>
          <button onClick={() => setStep(STEPS.AMOUNT_OF_QUESTIONS)}>
            Back to step 1
          </button>
        </div>
      ) : null}
    </>
  );
}
