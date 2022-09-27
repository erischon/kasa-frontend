import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfFrame, setNumberOfFrame] = useState(children?.length);

  //   const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    setNumberOfFrame(children?.length);
  }, [children]);

  //   const handleTransitionEnd = () => {
  //     if (currentIndex === 0) {
  //       setTransitionEnabled(false);
  //       setCurrentIndex(numberOfFrame);
  //     } else if (currentIndex === numberOfFrame) {
  //       setTransitionEnabled(false);
  //       setCurrentIndex(0);
  //     }
  //   };

  const next = () => {
    if (currentIndex < numberOfFrame - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex === numberOfFrame - 1) {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }

    if (currentIndex === 0) {
      setCurrentIndex(numberOfFrame - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {numberOfFrame > 1 && (
          <button onClick={prev} className="left-arrow">
            <AiOutlineLeft />
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              //   transition: !transitionEnabled ? "none" : undefined,
            }}
            // onTransitionEnd={() => handleTransitionEnd()}
          >
            {children}
          </div>
        </div>
        {numberOfFrame > 1 && (
          <button onClick={next} className="right-arrow">
            <AiOutlineRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
