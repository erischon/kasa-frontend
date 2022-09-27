import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Carousel from "../components/Carousel";
import LodgingInfos from "../components/LodgingInfos";

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
      <section className="lodging-carousel">
        <Carousel>
          {lodgingItem?.pictures &&
            lodgingItem.pictures.map((picture, i) => (
              <img src={picture} alt={lodgingItem?.title} key={i} />
            ))}
        </Carousel>
      </section>

      <LodgingInfos lodgingItem={lodgingItem} />

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
