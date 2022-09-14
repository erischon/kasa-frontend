import { useEffect, useState } from "react";
import axios from "axios";

import background from "../assets/hero-bg-desktop.png";

const HomePage = () => {
  const [lodgingData, setLodgingData] = useState([]);

  const getData = async () => {
    const response = await axios.get("data/logements.json");
    const lodging = response.data;
    setLodgingData(lodging);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
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
            <article className="lodging__card">
              <img src={lodging?.pictures[0]} alt={lodging?.title} />
              <h2>{lodging?.title}</h2>
            </article>
          ))}
      </section>
    </main>
  );
};

export default HomePage;
