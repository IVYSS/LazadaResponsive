import React from "react";
import "./components.css";
import { IoIosArrowForward } from "react-icons/io";

const Collection = () => {
  const cRow1 = [
    {
      name: "เคล็ดลับดารา บำรุงล้ำลึกชั่วข้ามคืน >",
      path: "#",
      manyProduct: 800,
      imagCollection: [
        "https://lzd-img-global.slatic.net/g/p/c9b25c67ece8beb662df34aacf272008.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/e8dc37166355eddab8b8a095d7727ab7.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/14e41e1e9ceb11d508f1fa229ff4f1fc.jpg_80x80q80.jpg_.webp",
      ],
    },
    {
      name: "เปลี่ยนสีผมง่ายๆที่บ้าน >",
      path: "#",
      manyProduct: 800,
      imagCollection: [
        "https://lzd-img-global.slatic.net/g/p/c9b25c67ece8beb662df34aacf272008.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/e8dc37166355eddab8b8a095d7727ab7.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/14e41e1e9ceb11d508f1fa229ff4f1fc.jpg_80x80q80.jpg_.webp",
      ],
    },
    {
      name: "กระเป๋าตังค์สาวออฟฟิศ >",
      path: "#",
      manyProduct: 800,
      imagCollection: [
        "https://lzd-img-global.slatic.net/g/p/c9b25c67ece8beb662df34aacf272008.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/e8dc37166355eddab8b8a095d7727ab7.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/14e41e1e9ceb11d508f1fa229ff4f1fc.jpg_80x80q80.jpg_.webp",
      ],
    },
    {
      name: "สวยเฮลตี้ >",
      path: "#",
      manyProduct: 800,
      imagCollection: [
        "https://lzd-img-global.slatic.net/g/p/c9b25c67ece8beb662df34aacf272008.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/e8dc37166355eddab8b8a095d7727ab7.jpg_80x80q80.jpg_.webp",
        "https://lzd-img-global.slatic.net/g/p/14e41e1e9ceb11d508f1fa229ff4f1fc.jpg_80x80q80.jpg_.webp",
      ],
    },
  ];

  return (
    <div className="collection">
      <div className="collection_header">
        <h3>คอลเลคชั่น</h3>
        <a href="#">
          คอลเลคชั่นเลือกซื้อสินค้าต่อ <IoIosArrowForward size={14}></IoIosArrowForward>
        </a>
      </div>
      <div className="collection_body">
        <div className="collection_body_section1">
          {cRow1.map((e, index) => {
            return (
              <div key={index} className="collection_body_section_item">
                <p>{e.name}</p>
                <p style={{ color: "#757575" }}>{e.manyProduct} สินค้า</p>
                <div className="collection_body_section_item_listImg">
                  {e.imagCollection.map((e, index) => {
                    return (
                      <img
                        key={index}
                        src={e}
                        className="collection_body_section_item_listImg_img"
                      ></img>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* -------------section 2 ------------- */}

        <div className="collection_body_section2">
          {cRow1.map((e, index) => {
            return (
              <div key={index} className="collection_body_section_item">
                <p>{e.name}</p>
                <p style={{ color: "#757575" }}>{e.manyProduct} สินค้า</p>
                <div className="collection_body_section_item_listImg">
                  {e.imagCollection.map((e, index) => {
                    return <img key={index} src={e}></img>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
