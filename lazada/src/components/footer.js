import React from "react";

const Footer = () => {
  const cardData = [
    {
      alt: "",
      imgSrc:
        "	https://icms-image.slatic.net/images/ims-web/aab53410-56e1-4818-b52c-45ef447592c4.jpg",
    },
    {
      alt: "",
      imgSrc:
        "	https://icms-image.slatic.net/images/ims-web/aab53410-56e1-4818-b52c-45ef447592c4.jpg",
    },
    {
      alt: "",
      imgSrc:
        "	https://icms-image.slatic.net/images/ims-web/aab53410-56e1-4818-b52c-45ef447592c4.jpg",
    },
  ];

  const brandData = [
    { herder: "EL", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "MOTHER & BABY", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "HEALTH & BEAUTY", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "HEALTH & BEAUTY", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "HEALTH & BEAUTY", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "HEALTH & BEAUTY", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "HEALTH & BEAUTY", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "HEALTH & BEAUTY", brand: ["DoHome", " Canon", "Canon"] },
    { herder: "HEALTH & BEAUTY", brand: ["DoHome", " Canon", "Canon"] },
  ];
  const infoCare = [
    "ศูนย์ช่วยเหลือ",
    "การสั่งซื้อสินค้า",
    "การส่งสินค้า",
    "นโยบายของสินค้าต่างประเทศ",
    "การคืนสินค้า",
    "ติดต่อเรา",
  ];

  return (
    <div className="footer">
      <div className="footer_credit">
        {cardData.map((e, index) => {
          return (
            <div key={index} className="footer_credit_item">
              <img src={e.imgSrc}></img>
            </div>
          );
        })}
      </div>
      <div className="footer_credit_info">
        <div className="footer_credit_info_item1">
          <h4>ศูนย์ดูแลลูกค้า</h4>
          {infoCare.map((e, index) => {
            return (
              <div className="footer_credit_info_item1">
                <a
                  href="#"
                  style={{ color: "#0f136d", textDecorationColor: "#0f136d" }}
                >
                  {e}
                </a>
              </div>
            );
          })}
        </div>
        <div className="footer_credit_info_item1">
          <h4>ศูนย์ดูแลลูกค้า</h4>
          {infoCare.map((e, index) => {
            return (
              <div className="footer_credit_info_item1">
                <a
                  href="#"
                  style={{ color: "#0f136d", textDecorationColor: "#0f136d" }}
                >
                  {e}
                </a>
              </div>
            );
          })}
        </div>
        <div className="footer_credit_info_item1">
          <p style={{ color: "#f57224" }}>Go where your heart beats</p>
          <p>Download the App</p>
        </div>
        <div className="footer_credit_info_item1"></div>
      </div>
      {/* -------------- */}
      <div className="footer_infomation">
        <div className="footer_infomation_item">
          <p>วิธีการชำระเงิน</p>
        </div>
        <div className="footer_infomation_item">
          <p>Delivery Services</p>
        </div>
        <div className="footer_infomation_item">
          <p>วิธีการชำระเงิน</p>
        </div>
      </div>
      {/* ---------------- */}
      <div className="footer_infomation2">
        <div className="footer_infomation2_item">
          <p style={{ fontSize: "13px", color: "#606060" }}>
            <b>
              ประสบการณ์การช้อปปิ้งที่ดีที่สุดที่ลาซาด้าประเทศไทย ลาซาด้า
              นิยามใหม่ของ “การช้อปที่แสนสะดวก”
            </b>
          </p>
          <p style={{ fontSize: "12px", color: "rgb(136,136,136)" }}>
            ในขณะที่การช้อปปิ้งออนไลน์แพร่หลายมากขึ้นลาซาด้ประเทศไทยมีความมุ่งมั่นที่จะตอบโจทย์ความต้องการของผู้บริโภคอยู่เสมอ
            เราพยายามอย่างเต็มที่เพื่อให้ลูกค้าได้รับความพึงพอใจสูงสุดผ่านการทำธุรกรรมที่ราบรื่น
            ผนวกกับการกำหนดราคาสินค้าที่น่าดึงดูด เรามีการพัฒนา ประเภทของสินค้า
            ที่วางจำหน่ายใ นราคาที่ดีที่สุด
            เพื่อสร้างความพึงพอใจให้กับลูกค้าของเรา
            พร้อมกับกิจกรรมที่น่าดึงดูดใจ อาทิ ดีลเด็ด แฟลชเซลล์ และโปรโมชั่นดีๆ
            ที่มีอย่างต่อเนื่อง ด้วยโลโก้ใหม่รูป “หัวใจ” ที่แสดงตัวอักษร “L”
            เป็นกล่องสามมิติ <br />
            <br />{" "}
            ลาซาด้ามุ่งมั่นที่จะมอบวิธีการที่ดีกว่าและแตกต่างจากผู้ให้บริการอื่นๆ
            เพื่อให้แน่ใจว่าการทำทุกธุรกรรมบนแพลตฟอร์มของลาซาด้านั้นเป็นไปด้วยความง่ายอย่างแท้จริง
            มากกว่าไปกว่านั้น สโลแกนใหม่ “มีทุกสิ่งที่ใจค้นหา”
            แสดงถึงวิสัยทัศน์ของบริษัทที่มุ่งมั่นที่จะพัฒนาประสบการณ์ของผู้ซื้อและผู้ขายออนไลน์ผ่านการค้าและเทคโนโลยีที่ล้ำสมัย
            โลโก้ของหัวใจที่มีสีสันแสดงให้เห็นถึงความอ่อนเยาว์และมีพลัง
            ซึ่งเป็นสัญลักษณ์ของความมีชีวิตชีวาของการช้อปปิ้งและยุคดิจิตอลในปัจจุบัน
          </p>
          <p style={{ fontSize: "13px", color: "#606060" }}>
            <b>การช้อปปิ้งที่ง่ายและสะดวก</b>
          </p>
          <p style={{ fontSize: "12px", color: "rgb(136,136,136)" }}>
            “การช้อปปิ้งที่ง่ายและสะดวก”
            เป็นเป้าหมายของลาซาด้าตลอดหลายปีที่ผ่านมา
            โดยให้คำสัญญากับลูกค้าทุกคนว่าเราจะให้ประสบการณ์การช้อปปิ้งออนไลน์ที่สะดวกสบายแบบไร้ความยุ่งยากใดๆ
            เราได้ออกแบบทุกสิ่งที่อำนวยความสะดวกในการค้นหาผ่านเว็บไซต์และแอพเพื่อการใช้งานที่ง่าย
            มีการจัดสรรผลิตภัณฑ์ไว้ใต้หมวดหมู่เดียวกัน
            รวมถึงคำอธิบายที่เกี่ยวข้องและรีวิวสินค้านั้นๆอย่างเปิดเผย
          </p>
          <br />
          <br />
        </div>
        <div className="footer_infomation2_item">
          <p style={{ fontSize: "12px", color: "rgb(136,136,136)" }}>
            พบกับสินค้ามากมายบน LazMall
            ด้วยความร่วมมือกับแบรนด์ชั้นนำหลายร้อยแห่งทั่วโลก
            พร้อมกับผู้ขายที่มีชื่อเสียงมากมายเพื่อให้บริการสินค้าที่ดีที่สุดสำหรับคุณ
            มากไปกว่านั้น เรายังมี LazMart
            ที่ให้บริการสินค้าของกินของใช้มากมายในราคาสุดคุ้ม
          </p>
          <p style={{ fontSize: "13px", color: "#606060" }}>
            <b>ตัวเลือกในการชำระเงินที่หลากหลาย</b>
          </p>
          <br />
          <p style={{ fontSize: "12px", color: "rgb(136,136,136)" }}>
            การทำธุรกรรมกับเราเป็นเรื่องง่าย ด้วยการชำระเงินที่หลากหลาย
            ในฐานะที่เป็นผู้นำอีคอมเมิร์ซแห่งตะวันออกเฉียงใต้
            เราจะทำหน้าที่เป็นแพลตฟอร์มที่ปลอดภัยในการซื้อสินค้า
            อีกทั้งยังปกป้องข้อมูลสำคัญของคุณจากผู้ใช้ที่ไม่ได้รับอนุญาตและกิจกรรมที่ฉ้อโกงต่างๆที่อาจจะเกิดขึ้นในขั้นตอนการชำระเงิน
            และคุณยังสามารถชำระเงินผ่านบัตรเดบิต เครดิต
            หรือจ่ายปลายทางด้วยเงินสด
          </p>
          <br></br>
          <p style={{ fontSize: "13px", color: "#606060" }}>
            <b>ตัวเลือกในการชำระเงินที่หลากหลาย</b>
          </p>
          <br />
          <p style={{ fontSize: "12px", color: "rgb(136,136,136)" }}>
            การทำธุรกรรมกับเราเป็นเรื่องง่าย ด้วยการชำระเงินที่หลากหลาย
            ในฐานะที่เป็นผู้นำอีคอมเมิร์ซแห่งตะวันออกเฉียงใต้
            เราจะทำหน้าที่เป็นแพลตฟอร์มที่ปลอดภัยในการซื้อสินค้า
            อีกทั้งยังปกป้องข้อมูลสำคัญของคุณจากผู้ใช้ที่ไม่ได้รับอนุญาตและกิจกรรมที่ฉ้อโกงต่างๆที่อาจจะเกิดขึ้นในขั้นตอนการชำระเงิน
            และคุณยังสามารถชำระเงินผ่านบัตรเดบิต เครดิต
            หรือจ่ายปลายทางด้วยเงินสด
          </p>
          <br></br>
          <p style={{ fontSize: "13px", color: "#606060" }}>
            <b>ตัวเลือกในการชำระเงินที่หลากหลาย</b>
          </p>
          <br />
          <p style={{ fontSize: "12px", color: "rgb(136,136,136)" }}>
            การทำธุรกรรมกับเราเป็นเรื่องง่าย ด้วยการชำระเงินที่หลากหลาย
            ในฐานะที่เป็นผู้นำอีคอมเมิร์ซแห่งตะวันออกเฉียงใต้
            เราจะทำหน้าที่เป็นแพลตฟอร์มที่ปลอดภัยในการซื้อสินค้า
            อีกทั้งยังปกป้องข้อมูลสำคัญของคุณจากผู้ใช้ที่ไม่ได้รับอนุญาตและกิจกรรมที่ฉ้อโกงต่างๆที่อาจจะเกิดขึ้นในขั้นตอนการชำระเงิน
            และคุณยังสามารถชำระเงินผ่านบัตรเดบิต เครดิต
            หรือจ่ายปลายทางด้วยเงินสด
          </p>
        </div>
        <div className="footer_infomation2_item">
          <p style={{ fontSize: "13px", color: "#606060" }}>
            <b>TOP CATEGORIES & BRANDS</b>
          </p>
          <br />
          {brandData.map((e, index) => {
            return (
              <div>
                <span>
                  <p style={{ fontSize: "13px" }}>
                    <b>{e.herder}</b>
                  </p>
                </span>
                <span style={{ display: "flex" }}>
                  {e.brand.map((b, index) => {
                    return <a href="#">{b}, </a>;
                  })}
                </span>
                <br></br>
              </div>
            );
          })}
        </div>
        <div className="footer_infomation2_item">
          <br></br>
          <br></br>

          {brandData.map((e, index) => {
            return (
              <div>
                <span>
                  <p style={{ fontSize: "13px" }}>
                    <b>{e.herder}</b>
                  </p>
                </span>
                <span style={{ display: "flex" }}>
                  {e.brand.map((b, index) => {
                    return <a href="#">{b}, </a>;
                  })}
                </span>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Footer;
