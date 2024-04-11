// so we loop true each of the options to give it a button with the options passed inside the buttton //

//so we start the newAnwser click event onto the button
//so when we click on the button the newAnswer stores the index of the question

//so with the className condition the btn btn-optionclass styles the button
//if the click index === the answer choosen the it shift the answer button
//if the index click === the question option then color it blue if wrong color it red

export default function Options({ question, dispatch, answer }) {
  //if the anwser is not null
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
