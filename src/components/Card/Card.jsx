import React from "react";
import "./Card.css";

function Card() {
  return (
      <div className="article__div">
        <img className="article__img "></img>
        <div className="article__div--div">
          <span className="article__span"> alguien te esta siguiendo</span>
          <h4 className="article__h4 ">Mariapy</h4>
          <span className="article__span--div ">@maripdev</span>
          <p className="article__p ">Web developer in process Gratitud</p>
        </div>
        <button className="article__button">Following</button>
      </div>
  );
}

export default Card;
