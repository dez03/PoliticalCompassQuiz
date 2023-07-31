// pages/page1.tsx
import React, { useState } from "react";
import Link from "next/link";

const questions = [
  {
    questionText: "What is your favorite color?",
    answers: [
      { text: "Red", value: 1 },
      { text: "Blue", value: 2 },
      { text: "Green", value: 3 },
      { text: "Yellow", value: 4 },
    ],
  },
  {
    questionText: "What is your favorite animal?",
    answers: [
      { text: "Dog", value: 1 },
      { text: "Cat", value: 2 },
      { text: "Bird", value: 3 },
      { text: "Fish", value: 4 },
    ],
  },
  // Add more questions here
];

const Page1: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const handleAnswerSelection = (
    questionIndex: number,
    answerValue: number
  ) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answerValue;
    setAnswers(updatedAnswers);
  };

  const areAllQuestionsAnswered = answers.every((answer) => answer !== -1);

  const handleNextClick = () => {
    if (areAllQuestionsAnswered) {
      // Save the user's answers in local storage
      for (let i = 0; i < answers.length; i++) {
        localStorage.setItem(`question_${i}`, answers[i].toString());
      }

    }
  };

  return (
    <div>
      <h1>Page 1: Political Compass Quiz</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.questionText}</h2>
          {question.answers.map((answer) => (
            <div key={answer.value}>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={answer.value}
                  checked={answers[index] === answer.value}
                  onChange={() => handleAnswerSelection(index, answer.value)}
                />
                <span>{answer.text}</span>
              </label>
            </div>
          ))}
        </div>
      ))}


      
      <Link href="page2">
        <button onClick={handleNextClick} disabled={!areAllQuestionsAnswered}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default Page1;
