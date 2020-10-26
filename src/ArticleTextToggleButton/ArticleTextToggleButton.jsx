import React from "react";
import classes from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => (
      <button
        className={classes.Button}
        onClick={() => props.onClick()}
      >
        {props.buttonText}
      </button>
  );

  export default ArticleTextToggleButton;