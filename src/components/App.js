import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleAddQuestion(newQ) {
  setQuestions((prev) => [...prev, newQ]);
}
function handleAddQuestion(newQ) {
  setQuestions((prev) => [...prev, newQ]);
}
function handleDelete(id) {
  setQuestions((prev) => prev.filter((q) => q.id !== id));
}
function handleUpdate(updatedQ) {
  setQuestions((prev) =>
    prev.map((q) => (q.id === updatedQ.id ? updatedQ : q))
  );
}

  return (
    <main>
      <QuestionList questions={questions} />
    </main>
  );
}

export default App;
