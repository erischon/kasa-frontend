import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const baseUrl = process.env.REACT_APP_API_URL;

const DetailPage = () => {
  const [lodgingItem, setLodgingItem] = useState([]);
  const params = useParams();
  const { lodgingId } = params;

  const getData = async () => {
    const response = await axios.get(baseUrl);
    const allLodgingData = response.data;

    const lodging = allLodgingData.find((lodging) => lodging.id === lodgingId);
    setLodgingItem(lodging);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="lodgingDetailPage">
      <section className="lodging-carrousel">
        {lodgingItem?.pictures &&
          lodgingItem.pictures.map((picture, i) => (
            <img src={picture} alt={lodgingItem?.title} key={i} />
          ))}
      </section>

      <section className="lodging-infos">
        <div>
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
        <div>
          <div>
            <p className="lodging-infos__hostName">{lodgingItem?.host?.name}</p>
            <img
              src={lodgingItem?.host?.picture}
              alt={lodgingItem?.host?.name}
              className="lodging-infos__hostImage"
            />
          </div>
          <div className="lodging-infos__rating">{lodgingItem?.rating}</div>
        </div>
      </section>

      <section className="lodging-detail">
        <article>{lodgingItem?.description}</article>
        <article>
          {lodgingItem.equipments &&
            lodgingItem.equipments.map((equipment, i) => (
              <p key={i}>{equipment}</p>
            ))}
        </article>
      </section>
    </main>
  );
};

export default DetailPage;
