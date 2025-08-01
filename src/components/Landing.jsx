import React from 'react';

const Landing = () => {
  return (
    <div className="blackboard">
      <div className="blackboard-content">
        <h1 style={{ fontFamily: 'Arial, sans-serif', color: 'lavenderblush' }}>
          Welcome to Qurious
        </h1>
        <h3 style={{ fontFamily: 'Arial, sans-serif', color: 'lavenderblush' }}>
          Your smart quiz partner for teachers and students
        </h3>
        <p>
          Qurious is an easy-to-use quiz platform where teachers can create interactive quizzes and
          students can take them anytime, anywhere. Whether it's learning, testing or fun—Qurious
          makes quizzing engaging and efficient
        </p>
        <br />
        <h2>Guidelines</h2>
        <div className="left">
          <ul>
            <li>Each quiz consists of 10 questions</li>
            <li>
              Every question will have 3 options among which one will be the correct answer
            </li>
            <li>You can score a maximum of 10 marks per quiz</li>
            <li>
              Students can see their attempted tests and scores in Tests Attempted page
            </li>
            <li>
              Students can view available tests in Tests Available page and can begin a quiz by
              clicking on start button
            </li>
            <li>Do not logout or refresh while taking a quiz</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
