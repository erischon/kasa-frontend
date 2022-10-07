import StarsRating from "./StarsRating";

const LodgingInfos = ({ lodgingItem }) => {
  return (
    <section className="lodging-infos">
      <div className="lodging-infos__box1">
        <h2 className="lodging-infos__title">{lodgingItem?.title}</h2>
        <p className="lodging-infos__location">{lodgingItem?.location}</p>
        <div className="lodging-infos__tags">
          {lodgingItem.tags &&
            lodgingItem.tags.map((tag, i) => (
              <p className="lodging-infos__tag" key={i}>
                {tag}
              </p>
            ))}
        </div>
      </div>
      <div className="lodging-infos__box2">
        <StarsRating rate={lodgingItem?.rating} />

        <div className="lodging-infos__personal">
          <p className="lodging-infos__hostName">{lodgingItem?.host?.name}</p>
          <img
            src={lodgingItem?.host?.picture}
            alt={lodgingItem?.host?.name}
            className="lodging-infos__hostImage"
          />
        </div>
      </div>
    </section>
  );
};

export default LodgingInfos;
