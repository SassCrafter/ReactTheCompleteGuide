import React, { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (nameInputHasError || emailInputHasError) {
      return;
    }
    console.log(enteredName);
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameInputHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && (
          <p style={{ color: "crimson" }}>Name input can not be empty</p>
        )}
      </div>
      <div className={`form-control ${emailInputHasError ? "invalid" : ""}`}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p style={{ color: "crimson" }}>
            Email input can not be empty and must have @
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
