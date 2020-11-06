import React, { useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import classes from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
    const articleText = props.article.text;
    const articleParagrah = articleText.split('</p>');
    let firstPara = articleParagrah[0];
    firstPara = firstPara.substring(3);

    const showMoreArticle = (
      <article>
      <header className={classes.Header}>
          <h1>{props.article.title}</h1>
      </header>
      <p className={classes.Content}>{firstPara}</p>
      <time dateTime={props.article.displayDate} className={classes.Time}>
          {props.article.displayDate}
      </time>
    </article>
    );

    const showLessArticle = (
      <article>
      <header className={classes.Header}>
          <h1>{props.article.title}</h1>
      </header>
    </article>
    );

    const [buttonText, setButtonText] = useState("Show more");
    const [articleContent, setArticleContent] = useState(showLessArticle);
    
    

    const handleButtonClicked = (props) => {

      if(buttonText === "Show more"){
        setButtonText("Show less");
        setArticleContent(showMoreArticle);
      }else{
        setButtonText("Show more");
        setArticleContent(showLessArticle);
      }
    };


  return (
    <div className={classes.Item}>
      <div className={classes.Top}>
        {articleContent}
      </div>
      <div className={classes.Bottom}>
        <ArticleTextToggleButton buttonText={buttonText} onClick= {() => handleButtonClicked()}/>
      </div>
      
    </div>
    
    
  );
};

export default ArticleListItem;
