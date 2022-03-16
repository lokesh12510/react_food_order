import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const [btn, setBtn] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const cartItems = items.reduce((curItem, item) => {
    return curItem + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btn ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtn(true);

    const timer = setTimeout(() => {
      setBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
}
