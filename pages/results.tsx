// pages/results.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Results: React.FC = () => {
  const [selectedOdds, setSelectedOdds] = useState(0);
  const [selectedEvens, setSelectedEvens] = useState(0);

  useEffect(() => {
    // Retrieve the user's answers from localStorage and calculate odds and evens
    let odds = 0;
    let evens = 0;
    for (let i = 0; i < 8; i++) {
      const answerValue = Number(localStorage.getItem(`question_${i}`));
      if (answerValue % 2 === 0) {
        evens++;
      } else {
        odds++;
      }
    }

    setSelectedOdds(odds);
    setSelectedEvens(evens);
  }, []);

  return (
    <div>
      <h1>Quiz Results</h1>
      <p>
        You selected {selectedOdds} odd answers and {selectedEvens} even
        answers.
      </p>
      {selectedEvens > selectedOdds ? (
        <p>You're even!</p>
      ) : selectedEvens < selectedOdds ? (
        <p>You're odd!</p>
      ) : (
        <p>You tied!</p>
      )}

      <Link href="/">
        <button> Back Home </button>
      </Link>
    </div>
  );
};

export default Results;
