import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <div>
        <h1>{props.article.title}</h1>
        <p> <i> by {props.article.author} ({props.article.authorEmail}) </i></p>
        <p>{props.article.displayDate}</p>
        <img src={props.article.image._url} width={props.article.image._width} height={props.article.image._height} />
        <HTMLText text={props.article.text} />
        <p><strong>timeStamp: </strong>{props.article.timeStamp}</p>
      </div>
    </article>
  );
};

export default DynamicArticle;
