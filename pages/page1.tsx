// pages/page1.tsx
import React, { useState } from "react";
import Link from "next/link";
import page2 from "../pages/page2"

const questions = [
  {
    questionText: "What is your favorite color?",
    answers: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    questionText: "What is your favorite animal?",
    answers: ["Dog", "Cat", "Bird", "Fish"],
  },
  {
    questionText: "What grade are you in?",
    answers: ["9th", "10th", "11th", "12th"],
  },
  {
    questionText: "What is your favorite season?",
    answers: ["Summer", "Spring", "Fall", "Winter"],
  },
  {
    questionText: "What is your favorite fruit",
    answers: ["Apple", "Orange", "Watermelon", "Grapes"],
  },

  // Add more questions here
];

const Page1: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const handleAnswerSelection = (index: number, answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const areAllQuestionsAnswered = answers.every((answer) => answer !== "");

  const handleNextClick = () => {
    // Navigate to the next page or do anything else you need here
    console.log("Answers:", answers);
  };

  return (
    <div>
      <h1>Page 1: Political Compass Quiz</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.questionText}</h2>
          {question.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={answer}
                  checked={answers[index] === answer}
                  onChange={() => handleAnswerSelection(index, answer)}
                />
                <span>{answer}</span>
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
