import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
  console.log("test2");
  console.log(props.articles);
  /*const articleListSummary = props.articles.map((item) =>{
      return (
        <ArticleListItem article = {item}></ArticleListItem>
      )
  } );*/

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
    <div>
      <ul>{articleListSummary}</ul>
    </div>
  );
};

export default ArticleList;
