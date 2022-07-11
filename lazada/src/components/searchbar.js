import React from "react";
import { BiCart } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search-body">
        <div className="search-icon-lzd" style={{ height: "100%" }}>
          <a href="#">
            <img
              alt="โลโก้ ลาซาด้า ช้อปออนไลน์"
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png"
              style={{ width: "8vw", objectFit: "cover" }}
            ></img>
          </a>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาในลาซาด้า"
        ></input>
        <button type="submit" className="search-button">
          <AiOutlineSearch size={"1.5vw"}/>
        </button>
        <div className="search-cart-icon">
          <a href="#">
            <BiCart size={"2vw"} color="#000"></BiCart>
          </a>
        </div>
        <div className="search-icon-lzd">
          <a href="#">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DcZESBr0gK0jSZFnXXbRRXXa.jpg"
              style={{ width: "13vw", objectFit: "cover" }}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
