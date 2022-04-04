import { useReducer } from "react";

const initialState = { value: "", isTouch: false };

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouch: state.isTouch };
  }
  if (action.type === "BLUR") {
    return { isTouch: true, value: state.value };
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
