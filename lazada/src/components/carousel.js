import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    style={{ textAlign: "center", justifyContent: "center", cursor: "pointer" }}
  >
    <img
      src="https://icms-image.slatic.net/images/ims-web/c8ec1002-2825-47e2-90f9-fbefcd80041a.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      style={{ maxWidth: "60%" }}
    />
    ,
  </div>,
  <div
    style={{ textAlign: "center", justifyContent: "center", cursor: "pointer" }}
  >
    <img
      src="https://icms-image.slatic.net/images/ims-web/c8ec1002-2825-47e2-90f9-fbefcd80041a.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      style={{ maxWidth: "60%" }}
    />
  </div>,
  <div
    style={{ textAlign: "center", justifyContent: "center", cursor: "pointer" }}
  >
    <img
      src="https://icms-image.slatic.net/images/ims-web/c8ec1002-2825-47e2-90f9-fbefcd80041a.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      style={{ maxWidth: "60%" }}
    />
  </div>,
];
const Carousel = () => {
  return (
    <div>
      <AliceCarousel
        mouseTracking
        autoPlayInterval={5000}
        items={items}
        autoPlay
        infinite
        disableButtonsControls
        autoHeight
      />
    </div>
  );
};

export default Carousel;
