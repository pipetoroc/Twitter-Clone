import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

function CardContiner() {
  return (
    <article className="article">
      <h3 className="article__h3 ">Who to follow</h3>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </article>
  );
}

export default CardContiner;