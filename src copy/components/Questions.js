import Options from "./options";

function Questions({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
