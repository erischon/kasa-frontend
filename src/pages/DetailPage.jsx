import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import LodgingInfos from "../components/LodgingInfos";

const baseUrl = process.env.REACT_APP_API_URL;

const DetailPage = () => {
  const [lodgingItem, setLodgingItem] = useState([]);
  const params = useParams();
  const { lodgingId } = params;
  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get(baseUrl);
    const allLodgingData = response.data;

    const lodging = allLodgingData.find((lodging) => lodging.id === lodgingId);

    if (lodging === undefined) {
      navigate("*");
    }

    setLodgingItem(lodging);
  };

  useEffect(() => {
    getData();
  });

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
        <Collapse name={"Description"} isOpen={false}>
          {lodgingItem?.description}
        </Collapse>

        <Collapse name={"Equipements"} isOpen={false}>
          {lodgingItem.equipments &&
            lodgingItem.equipments.map((equipment, i) => (
              <p key={i}>{equipment}</p>
            ))}
        </Collapse>
      </section>
    </main>
  );
};

export default DetailPage;
