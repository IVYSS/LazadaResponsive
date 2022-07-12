import React from "react";

const Flashsale = () => {
  const productData = [
    {
      productName:
        "ILT KF94 [แพ็ค 10 ชิ้น] ปิดปาก งาน 4D หนา 4 ชั้น 2 สี ขาว ดำ มี 2 แบบคละให้ ทรงเกาหลี ระบายอากาศได้ดี",
      price: 1.0,
      afterPrice: 25.0,
      discout: 96,
      imgSrc:
        "https://lzd-img-global.slatic.net/g/p/ee94912f6a44c1b18ad79d910c09937a.jpg_200x200q80.jpg_.webp",
    },
    {
      productName:
        "Rtพร้อมส่ง มาร์คหน้า มาส์กหน้า มาส์กแผ่นหน้าใส มาส์กให้ความชุ่มชื้น มาส์กบำรุง Bioaqua 25g แผ่นมาส์กหน้า มาส์กสารสกัดจากธรรมชาติ อ่อนโยน",
      price: 1.0,
      afterPrice: 25.0,
      discout: 86,
      imgSrc:
        "https://lzd-img-global.slatic.net/g/p/da0389b981ea0ef9d5d9034ac61a1f1e.png_200x200q80.jpg_.webp",
    },
    {
      productName:
        "สบู่ สครับกาแฟขมิ้น❗ราคาส่ง❗ ก้อนละ 3 บาท (สั่งขั้นต่ำ 20 ก้อน)",
      price: 1.25,
      afterPrice: 25.5,
      discout: 76,
      imgSrc:
        "https://lzd-img-global.slatic.net/g/p/8ba1554479967a23b8d7a4b9ced2e964.jpg_200x200q80.jpg_.webp",
    },
    {
      productName:
        "ILT KF94 [แพ็ค 10 ชิ้น] ปิดปาก งาน 4D หนา 4 ชั้น 2 สี ขาว ดำ มี 2 แบบคละให้ ทรงเกาหลี ระบายอากาศได้ดี",
      price: 1.0,
      afterPrice: 25.0,
      discout: 96,
      imgSrc:
        "https://lzd-img-global.slatic.net/g/ff/kf/S44332fb2d0e444568a787fff81e0a8695.jpg_200x200q80.jpg_.webp",
    },
    {
      productName:
        "ILT KF94 [แพ็ค 10 ชิ้น] ปิดปาก งาน 4D หนา 4 ชั้น 2 สี ขาว ดำ มี 2 แบบคละให้ ทรงเกาหลี ระบายอากาศได้ดี",
      price: 1.0,
      afterPrice: 25.0,
      discout: 96,
      imgSrc:
        "https://lzd-img-global.slatic.net/g/p/ee94912f6a44c1b18ad79d910c09937a.jpg_200x200q80.jpg_.webp",
    },
    {
      productName:
        "ILT KF94 [แพ็ค 10 ชิ้น] ปิดปาก งาน 4D หนา 4 ชั้น 2 สี ขาว ดำ มี 2 แบบคละให้ ทรงเกาหลี ระบายอากาศได้ดี",
      price: 1.0,
      afterPrice: 25.0,
      discout: 96,
      imgSrc:
        "https://lzd-img-global.slatic.net/g/p/ee94912f6a44c1b18ad79d910c09937a.jpg_200x200q80.jpg_.webp",
    },
  ];

  return (
    <div className="flashsale">
      <h3>Flash Sale</h3>
      <div className="flashsale_table">
        <div className="flashsale_header">
          <div className="flashsale_header_item">
            <p style={{ color: "#f57224", marginRight: "2vw" }}>
              ขณะนี้กำลังลดราคาอยู่
            </p>
            <p>จะสิ้นสุดใน</p>
          </div>

          <button className="flashsale_header_itembutton">
            ช้อปสินค้าทั้งหมด
          </button>
        </div>
        <hr></hr>
        <div className="flashsale_body_grid">
          {productData.map((e, index) => {
            var pName = e.productName.slice(0, 50);
            return (
              <div className="flashsale_body_grid_item" key={index}>
                <img
                  src={e.imgSrc}
                  className="flashsale_body_grid_item_img"
                ></img>
                <p>{pName} ...</p>
                <p className="flashsale_body_grid_item_price">$ {e.price}</p>
                <div className="flashsale_body_grid_item_price_discount">
                  <p style={{ color: "#9e9e9e", marginRight: "3px" }}>
                    <strike style={{ color: "#9e9e9e" }}>
                      $ {e.afterPrice}
                    </strike>
                  </p>
                  <p className="flashsale_body_grid_item_price_percent">
                    -{e.discout}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Flashsale;
