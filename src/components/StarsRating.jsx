/**
 *
 * @param {*} param0
 * @returns
 */
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

  return (
    <div
      className="lodging-infos__rating"
      dangerouslySetInnerHTML={{ __html: starRateHtml() }}
    ></div>
  );
};

export default StarsRating;
