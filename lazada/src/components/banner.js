import React from "react";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        textAlign: "center",
        width: "100%",
        backgroundColor: "#01bfa6",
      }}
    >
      <div className="banner-img" style={{ width: "100%" }}>
        <a href="#">
          <img src="https://icms-image.slatic.net/images/ims-web/c3259ddf-fbef-4119-9c02-f47a000c55d3.jpg" style={{ width : '70%'}}></img>
        </a>
      </div>
    </div>
  );
};
export default Banner;
