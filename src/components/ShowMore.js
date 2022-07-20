import React, { useState } from "react";
import { Images } from "../imgData";
import "./showMore.css";

const Carousel = () => {
  const [selectedImg, setSelectedImg] = useState(Images[0]);
  const [visible, setVisible] = useState(3);
  console.log(Images);

  const showImg = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="img-gallery">
          {Images.slice(0, visible).map((item, idx) => {
            return (
              <img
                src={item.img}
                alt=""
                style={{
                  border: selectedImg.img === item.img && "2px solid crimson",
                }}
                onClick={() => setSelectedImg(item)}
              />
            );
          })}
        </div>
        <button onClick={showImg}>show more</button>
      </div>
    </div>
  );
};

export default Carousel;
