import React, { useState } from "react";
import Link from "next/link"; 

const FirstPage: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmation = () => {
    setIsConfirmed(true);
  };

  return (
    <div>
      <h1>Welcome to the Political Compass Quiz</h1>
      <p>
        This quiz is designed to help you understand your political orientation
        and where you stand on various political issues. It consists of a series
        of questions that will assess your views on social and economic matters,
        and then place you on the political compass based on your responses.
      </p>
      <p>
        It's important to answer the questions honestly and to the best of your
        ability in order to get accurate results. Your individual responses will
        not be collected or stored in any way.
      </p>

      {!isConfirmed && (
        <div>
          <label>
            <input type="checkbox" onChange={handleConfirmation} />
            <span>I confirm that I have read the above and understand.</span>
          </label>
        </div>
      )}

      {isConfirmed && (
        <Link href="/page1">
          <button>Start Quiz</button>
        </Link>
      )}
    </div>
  );
};

export default FirstPage;
