import React from "react";
import ReactDom from "react-dom";
import classes from "./modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModayOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
      {ReactDom.createPortal(
        <ModayOverlay>{props.children}</ModayOverlay>,
        portalEl
      )}
    </>
  );
}
