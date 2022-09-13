import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [lodgingData, setLodgingData] = useState([]);

  const getData = async () => {
    const response = await axios.get("logements.json");
    const lodging = response.data;
    setLodgingData(lodging);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      HomePage
      {lodgingData[0]?.title}
    </div>
  );
};

export default HomePage;
