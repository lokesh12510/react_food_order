import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
