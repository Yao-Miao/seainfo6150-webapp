import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <header>
        <h1>{props.article.title}</h1>
        <address>
          <i>
            by {props.article.author} (
            <a href={props.article.authorEmail}>
              {" "}
              {props.article.authorEmail}{" "}
            </a>
            ){" "}
          </i>
        </address>

        <time dateTime={props.article.displayDate}>
          {props.article.displayDate}
        </time>
      </header>
      <img
        src={props.article.image._url}
        width={props.article.image._width}
        height={props.article.image._height}
      />
      <p>
        <strong>timeStamp: </strong>{" "}
        <time dateTime={props.article.timeStamp}>
          {props.article.timeStamp}
        </time>
      </p>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
