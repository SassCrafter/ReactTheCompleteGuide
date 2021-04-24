import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEneteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length !== 0;
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const inputChangeHandler = (e) => {
    setEneteredName(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEneteredName("");
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${enteredNameIsInvalid ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
        {enteredNameIsInvalid && (
          <p style={{ color: "crimson" }}>Name input can not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
