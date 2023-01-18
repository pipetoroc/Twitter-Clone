import "./CardContainer.css";
import Card from "../Card/Card";

function CardContiner({ url, city, phone, email }) {
  return (
    <article className="article">
      <h3 className="article__h3 ">Who to follow</h3>
      <Card
        url={url}
        city={city}
        phone={phone}
        email={email}
      />
      <Card
        url={url}
        city={city}
        phone={phone}
        email={email}
      />
      <Card
        url={url}
        city={city}
        phone={phone}
        email={email}
      />
      <Card
        url={url}
        city={city}
        phone={phone}
        email={email}
      />
      <Card
        url={url}
        city={city}
        phone={phone}
        email={email}
      />
    </article>
  );
}

export default CardContiner;
