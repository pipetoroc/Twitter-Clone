import React, {useEffect, useState} from "react";
import "./Card.css";
import getAvatar from "../../services/getAvatar";
import ButtonFollow from "../ButtonFollow/ButtonFollow";

function Card() {

  const [user, setUser] = useState('');

  useEffect(() => {
        getAvatar().then(user => setUser(user))
      }, []);

  return (
    <div className="article__div">
      <img
        src={user.url}
        alt="Imagen de perfil"
        className="article__img"
      />
      <div className="article__div--div">
        <span className="article__span"> {user.city}</span>
        <h4 className="article__h4 ">{user.email}</h4>
        <span className="article__span--div ">{user.email}</span>
        <p className="article__p ">{user.phone}</p>
      </div>
      <ButtonFollow/>
    </div>
  );
}

export default Card;
