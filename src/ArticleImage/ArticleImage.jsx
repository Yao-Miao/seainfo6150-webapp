import React from "react";
import classes from "./ArticleImage.module.css";

const ArticleImage = (props) => {
  return (
    <img className={classes.Image} src={props.url} alt={props.title}/>
  );
};

export default ArticleImage;
