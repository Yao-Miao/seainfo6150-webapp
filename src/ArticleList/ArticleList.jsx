import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import classes from "./ArticleList.module.css";

const ArticleList = (props) => {
  
  //add key to list
  const articleListSummary = Object.keys(props.articles).map((key) => {
    return (
      <ArticleListItem
        article={props.articles[key]}
        key={key}
      ></ArticleListItem>
    );
  });

  return (
    <div className={classes.List}>
      {articleListSummary}
    </div>
  );
};

export default ArticleList;
