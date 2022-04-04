import React from "react";
import useInputPractice from "../hooks/use-inputePractice";

const BasicForm = () => {
  const {
    value: enteredFistName,
    isValid: enteredFistNameIsValid,
    hasError: firstNameInputHasError,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameOnBlurHandler,
    reset: firstNameReset,
  } = useInputPractice((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameOnBlurHandler,
    reset: lastNameReset,
  } = useInputPractice((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    reset: emailReset,
  } = useInputPractice((value) => /\S+@\S+\.\S+/.test(value));

  let formValidity = false;

  if (enteredFistNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formValidity = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!formValidity) return;
    firstNameReset();
    lastNameReset();
    emailReset();
    console.log("enviado");
  };

  const fistNameCLass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const lastNameCLass = lastNameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailCLass = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={fistNameCLass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFistName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameOnBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameCLass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameOnBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailCLass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Invalid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValidity}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
