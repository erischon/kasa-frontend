import { Link } from "react-router-dom";

const LodgingCard = ({ lodging }) => {
  return (
    <div>
      <Link to={`location/${lodging?.id}`}>
        <article className="lodging__card">
          <img src={lodging?.pictures[0]} alt={lodging?.title} />
          <h2>{lodging?.title}</h2>
        </article>
      </Link>
    </div>
  );
};

export default LodgingCard;
