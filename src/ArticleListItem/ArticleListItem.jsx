import React from "react";

const ArticleListItem = (props) => {
    const articleText = props.article.text;
    const articleParagrah = articleText.split('</p>');
    let firstPara = articleParagrah[0];
    firstPara = firstPara.substring(3);
  return (
    <article>
      <header>
        <li>
          <h1>{props.article.title}</h1>
        </li>
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
      <p>{firstPara}</p>
    </article>
  );
};

export default ArticleListItem;
