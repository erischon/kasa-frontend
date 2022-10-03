import { useEffect, useState } from "react";
import axios from "axios";

import background from "../assets/hero-bg-desktop.png";
import LodgingCard from "../components/LodgingCard";

const baseUrl = process.env.REACT_APP_API_URL;

const HomePage = () => {
  const [lodgingData, setLodgingData] = useState([]);

  const getData = async () => {
    const response = await axios.get(baseUrl);
    const lodging = response.data;
    setLodgingData(lodging);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="home-page">
      <section
        className="hero__section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>
          Chez vous, <span>partout et ailleurs</span>
        </h1>
      </section>

      <section className="lodging__section">
        {lodgingData &&
          lodgingData.map((lodging) => (
            <LodgingCard lodging={lodging} key={lodging.id} />
          ))}
      </section>
    </main>
  );
};

export default HomePage;
