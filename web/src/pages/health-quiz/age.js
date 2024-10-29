import React from "react";
import { Link } from "gatsby";
import QuizLayout from "@components/quizLayout";
import { useQuizContext } from "@lib/quizContext";

const Age = () => {
  const { quizState, dispatch } = useQuizContext();

  const handleInputChange = (input) => {
    dispatch({ type: "updateQuizDetails", payload: { age: input } });
  };

  return (
    <QuizLayout progress="0%">
      <div className="">
        <h1 className="blockH2 text-center max-w-3xl mx-auto mb-two">
          {`How old are ${quizState.completingForMyself ? "you" : "they"}?`}
        </h1>
        <div className="flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0">
          <Link
            onClick={() => handleInputChange("Under 55")}
            to="/health-quiz/heart-murmur"
            className="btn-red w-full md:w-auto mx-auto"
          >
            Under 55
          </Link>
          <Link
            onClick={() => handleInputChange("55-64")}
            to="/health-quiz/heart-murmur"
            className="btn-red w-full md:w-auto mx-auto"
          >
            55-64
          </Link>
          <Link
            onClick={() => handleInputChange("65-74")}
            to="/health-quiz/heart-murmur"
            className="btn-red w-full md:w-auto mx-auto"
          >
            65-74
          </Link>
          <Link
            onClick={() => handleInputChange("75+")}
            to="/health-quiz/heart-murmur"
            className="btn-red w-full md:w-auto mx-auto"
          >
            75+
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Age;
