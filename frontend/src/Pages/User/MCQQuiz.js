 // MCQQuiz.js
 import React, { useState } from 'react';
 import { questions } from './data'; // Import your questions
 //import './MCQQuiz.css'; // Import the CSS file
 //import '../../Assets/CSS/MCQQuiz.css';
 import "../../Assets/CSS/MCQQuiz.css";
import { Link } from 'react-router-dom';
 
 function MCQQuiz() {
   const [answers, setAnswers] = useState({});
   const [submitted, setSubmitted] = useState(false);
 
   const handleOptionChange = (questionId, option) => {
     setAnswers({
       ...answers,
       [questionId]: option,
     });
   };
 
   const handleSubmit = () => {
     setSubmitted(true);
   };
 
   const getScore = () => {
     let score = 0;
     questions.forEach((question) => {
       if (answers[question.id] === question.answer) {
         score++;
       }
     });
     return score;
   };
 
   return (
     <div className="mcq-quiz">
       <h1>MCQ Quiz</h1>
       {questions.map((question) => (
         <div key={question.id}>
           <h3>{question.question}</h3>
           {question.options.map((option) => (
             <div key={option}>
<input 
  type="radio" 
  name={`question-${question.id}`} 
  value={option} 
  checked={answers[question.id] === option} 
  onChange={() => handleOptionChange(question.id, option)} 
  disabled={submitted} 
/>
               <label>{option}</label>
             </div>
           ))}
         </div>
       ))}
       <button onClick={handleSubmit} disabled={submitted}>
         {submitted ? 'Submitted' : 'Submit'}
       </button>
       {submitted && (
         <div className="result">
           <h2>Result</h2>
           <p>
             You scored {getScore()} out of {questions.length}
           </p>
           <Link to='/report'><button onClick={handleSubmit}>report</button></Link>
         </div>
       )}
     </div>
   );
 }
 
 export default MCQQuiz;