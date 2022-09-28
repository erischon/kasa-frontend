const StarsRating = ({ rate }) => {
  let starsRatingHtml = "";
  let increment = 0;
  let maxRate = 5;

  const starRateHtml = () => {
    while (increment < rate) {
      starsRatingHtml += '<i class="fa-solid fa-star"></i>';
      increment++;
    }

    while (maxRate > rate) {
      starsRatingHtml += '<i class="fa-regular fa-star"></i>';
      maxRate--;
    }

    return starsRatingHtml;
  };

  console.log("======", starRateHtml());

  return (
    <div
      className="lodging-infos__rating"
      dangerouslySetInnerHTML={{ __html: starsRatingHtml }}
    ></div>
  );
};

export default StarsRating;
