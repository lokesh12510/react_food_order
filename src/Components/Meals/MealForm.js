import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealForm.module.css";

export default function MealForm(props) {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredValue = +enteredAmount;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredValue);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!isValid && <p>Not valid</p>}
    </form>
  );
}
