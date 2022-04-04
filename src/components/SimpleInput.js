import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChageHandler,
    onBlurHandler: nameOnBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => /\S+@\S+\.\S+/.test(value));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      console.log("invalid");
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameOnBlurHandler}
          type="text"
          id="name"
          onChange={nameChageHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">email address</label>
        <input
          id="email"
          type="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailOnBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">invalid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
