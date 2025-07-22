import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
function handleDeleteClick() {
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE",
  }).then(() => onDelete(id)); // pass the question ID to remove it from state
}
function handleCorrectAnswerChange(e) {
  const newIndex = parseInt(e.target.value);
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correctIndex: newIndex }),
  })
    .then((res) => res.json())
    .then((updatedQuestion) => onUpdate(updatedQuestion));
}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
